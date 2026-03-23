"use client";

import { useState } from "react";

const focusModes = {
  quality: {
    label: "Quality",
    kicker: "",
    headline: "Release with confidence, not guesswork.",
    copy:
      "I like checking how a product works, spotting issues early, and writing bug reports the team can fix quickly.",
    tags: ["User testing", "Clear bug reports", "Confident releases"],
    metrics: [
      { label: "What I look at", value: "User flows, bugs, and weak spots" },
      { label: "What I improve", value: "Clarity, stability, and faster fixes" },
      { label: "Where it helps", value: "Web apps, AI tools, and product teams" },
    ],
  },
  operations: {
    label: "Operations",
    kicker: "",
    headline: "Reduce admin drag before adding more complexity.",
    copy:
      "I enjoy turning messy work into simple systems people can actually follow and use every day.",
    tags: ["Simple workflows", "Clear status", "Useful systems"],
    metrics: [
      { label: "What I look at", value: "Requests, approvals, and daily tasks" },
      { label: "What I improve", value: "Less back-and-forth and clearer handoffs" },
      { label: "Where it helps", value: "Healthcare, HR, admin, and internal tools" },
    ],
  },
  analytics: {
    label: "Analytics",
    kicker: "",
    headline: "Turn raw information into a decision someone can use.",
    copy:
      "I like working with data when it helps people understand what is going on and what to do next.",
    tags: ["Clean data", "Useful insights", "Clear visuals"],
    metrics: [
      { label: "What I look at", value: "Messy records and scattered information" },
      { label: "What I improve", value: "Understanding and decision-making" },
      { label: "Where it helps", value: "Reports, analysis, and performance review" },
    ],
  },
} as const;

type FocusMode = keyof typeof focusModes;

export default function FocusBoard() {
  const [activeMode, setActiveMode] = useState<FocusMode>("quality");
  const selected = focusModes[activeMode];

  return (
    <div className="focus-board panel">
      <div className="focus-switch" role="tablist" aria-label="Portfolio build lenses">
        {Object.entries(focusModes).map(([key, mode]) => {
          const isActive = key === activeMode;

          return (
            <button
              key={key}
              type="button"
              role="tab"
              aria-selected={isActive}
              className={`focus-tab${isActive ? " active" : ""}`}
              onClick={() => setActiveMode(key as FocusMode)}
            >
              {mode.label}
            </button>
          );
        })}
      </div>

      <div className="focus-layout">
        <div>
          <h3 className="focus-headline focus-headline-tight">{selected.headline}</h3>
          <p className="focus-copy">{selected.copy}</p>

          <div className="tag-list">
            {selected.tags.map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="focus-metrics">
          {selected.metrics.map((item) => (
            <article key={item.label} className="metric-card">
              <span>{item.label}</span>
              <strong>{item.value}</strong>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
