'use client';

import { useState, useRef } from 'react';
import SectionHeader from './SectionHeader';
import PanelCard from './PanelCard';

const SUGGESTED_QUESTIONS = [
  "What's your background?",
  'What tech do you use?',
  'Tell me about aerospace work',
];

export default function AskDhruv() {
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const abortRef = useRef<AbortController | null>(null);

  async function handleSubmit(q: string) {
    const trimmed = q.trim();
    if (!trimmed || loading) return;

    // Cancel any in-flight request
    abortRef.current?.abort();
    const controller = new AbortController();
    abortRef.current = controller;

    setLoading(true);
    setResponse('');
    setError(null);

    try {
      const res = await fetch('/api/ask', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: trimmed }),
        signal: controller.signal,
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || 'Something went wrong');
      }

      const reader = res.body!.getReader();
      const decoder = new TextDecoder();
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        setResponse((prev) => prev + decoder.decode(value, { stream: true }));
      }
    } catch (err) {
      if ((err as Error).name !== 'AbortError') {
        setError((err as Error).message ?? 'Something went wrong');
      }
    } finally {
      setLoading(false);
    }
  }

  function handleChipClick(q: string) {
    setQuestion(q);
    handleSubmit(q);
  }

  return (
    <section className="py-16 text-center">
      <SectionHeader title="Ask Me Anything" />
      <PanelCard>
        {/* Suggested question chips */}
        <div className="flex flex-wrap gap-2 mb-5">
          {SUGGESTED_QUESTIONS.map((q) => (
            <button
              key={q}
              onClick={() => handleChipClick(q)}
              disabled={loading}
              className="font-mono text-xs px-3 py-1.5 border border-border-panel text-text-secondary hover:text-amber-400 hover:border-amber-400 transition-colors rounded-sm disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {q}
            </button>
          ))}
        </div>

        {/* Response area */}
        {(response || (loading && !response) || error) && (
          <div className="mb-5 min-h-[3rem]">
            {loading && !response && (
              <div className="flex gap-1 items-center h-6">
                {[0, 1, 2].map((i) => (
                  <span
                    key={i}
                    className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-bounce"
                    style={{ animationDelay: `${i * 0.15}s` }}
                  />
                ))}
              </div>
            )}
            {error && (
              <p className="font-mono text-sm text-red-400">{error}</p>
            )}
            {response && (
              <p className="font-mono text-sm text-text-primary whitespace-pre-wrap leading-relaxed">
                {response}
                {loading && (
                  <span className="inline-block w-1.5 h-3.5 ml-0.5 bg-amber-400 animate-pulse align-middle" />
                )}
              </p>
            )}
          </div>
        )}

        {/* Input row */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(question);
          }}
          className="flex gap-2"
        >
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Ask about my career, projects, or experience..."
            maxLength={500}
            disabled={loading}
            className="flex-1 bg-background border border-border-panel rounded-sm px-3 py-2 font-mono text-sm text-text-primary placeholder:text-text-label focus:outline-none focus:border-amber-400 transition-colors disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={loading || !question.trim()}
            className="px-4 py-2 bg-amber-400 text-background font-mono text-sm font-semibold rounded-sm hover:bg-amber-300 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            →
          </button>
        </form>
      </PanelCard>
    </section>
  );
}
