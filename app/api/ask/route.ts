import Anthropic from '@anthropic-ai/sdk';
import { buildContext } from '../../lib/buildContext';

export async function POST(req: Request) {
  const body = await req.json();
  const question = body?.question;

  if (typeof question !== 'string' || question.trim().length === 0) {
    return new Response('Question is required', { status: 400 });
  }
  if (question.length > 500) {
    return new Response('Question must be 500 characters or fewer', { status: 400 });
  }

  const client = new Anthropic();
  const context = buildContext();

  const stream = client.messages.stream({
    model: 'claude-sonnet-4-6',
    max_tokens: 512,
    system: `You are Dhruv Sethi's personal AI assistant on his portfolio website. Answer questions about Dhruv's career, skills, experience, and interests based ONLY on the context below. Be concise, friendly, and use third-person when appropriate (e.g. "Dhruv has..." or "He's worked on..."). If a question is outside the context, say you don't have that information.\n\n${context}`,
    messages: [{ role: 'user', content: question }],
  });

  const encoder = new TextEncoder();
  const readable = new ReadableStream({
    async start(controller) {
      for await (const chunk of stream) {
        if (
          chunk.type === 'content_block_delta' &&
          chunk.delta.type === 'text_delta'
        ) {
          controller.enqueue(encoder.encode(chunk.delta.text));
        }
      }
      controller.close();
    },
    cancel() {
      stream.abort();
    },
  });

  return new Response(readable, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'X-Content-Type-Options': 'nosniff',
    },
  });
}
