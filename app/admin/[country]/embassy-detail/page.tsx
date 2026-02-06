"use client";

import { Fragment, useEffect, useMemo, useState } from "react";
import { useParams } from "next/navigation";

export default function EmbassyDetailPage() {
  const params = useParams();
  const countryParam = Array.isArray(params?.country) ? params.country[0] : params?.country;
  const country = (countryParam || "UK").toUpperCase();
  const storageKey = `admin_${country.toLowerCase()}_embassy`;
  const [detail, setDetail] = useState("");
  const [draft, setDraft] = useState("");
  const [open, setOpen] = useState(false);
  const preview = useMemo(() => renderMarkdown(draft), [draft]);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(storageKey);
      if (stored) {
        setDetail(stored);
      }
    } catch {
      setDetail("");
    }
  }, [storageKey]);

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border px-6 py-4 shadow-sm" style={{ backgroundColor: "#3B82F6" }}>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h1 className="text-2xl font-semibold text-white">{country} Embassy Detail</h1>
          <button
            type="button"
            onClick={() => {
              setDraft(detail);
              setOpen(true);
            }}
            className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-blue-700 hover:bg-blue-100"
          >
            {detail ? "Update Embassy Detail" : "Add Embassy Detail"}
          </button>
        </div>
      </div>

      <div className="rounded-2xl border bg-white p-6 shadow-sm">
        {detail ? (
          <div className="prose max-w-none text-sm text-gray-700">
            {renderMarkdown(detail)}
          </div>
        ) : (
          <p className="text-sm text-gray-500">No embassy detail added yet.</p>
        )}
      </div>

      {open && (
        <>
          <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" />
          <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto p-4">
            <div className="flex w-full max-w-2xl max-h-[calc(100vh-2rem)] flex-col overflow-hidden rounded-2xl bg-white shadow-2xl">
              <div
                className="flex items-center justify-between px-6 py-3 text-white"
                style={{ backgroundColor: "#3B82F6" }}
              >
                <div>
                  <h2 className="text-lg font-semibold">Embassy Detail</h2>
                  <p className="text-sm text-blue-100">Add or update embassy information.</p>
                </div>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="rounded-lg border border-white/40 px-3 py-1 text-xs font-semibold text-white hover:bg-white/10"
                >
                  Close
                </button>
              </div>
              <div className="flex-1 space-y-4 overflow-y-auto px-6 py-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="text-sm font-medium text-gray-700">Detail (Markdown)</label>
                    <textarea
                      value={draft}
                      onChange={(event) => setDraft(event.target.value)}
                      className="mt-2 w-full rounded-xl border px-3 py-2 text-sm"
                      rows={12}
                      placeholder="Use #, ##, ###, - bullet, and [text](url)"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700">Preview</label>
                    <div className="mt-2 h-full min-h-[288px] rounded-xl border bg-gray-50 px-4 py-3 text-sm text-gray-700">
                      {draft.trim() ? preview : "Nothing to preview yet."}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center gap-3 border-t px-6 py-4">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="rounded-xl border px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setDetail(draft.trim());
                    try {
                      window.localStorage.setItem(storageKey, draft.trim());
                    } catch {
                      // ignore
                    }
                    setOpen(false);
                  }}
                  className="rounded-xl bg-black px-4 py-2 text-sm text-white hover:bg-gray-900"
                >
                  Save Detail
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

function renderMarkdown(input: string) {
  const lines = input.split(/\r?\n/);
  const nodes: React.ReactNode[] = [];
  let listItems: React.ReactNode[] = [];

  const flushList = () => {
    if (listItems.length > 0) {
      nodes.push(
        <ul key={`ul-${nodes.length}`} className="list-disc pl-6">
          {listItems}
        </ul>
      );
      listItems = [];
    }
  };

  const renderInline = (text: string) => {
    const parts: React.ReactNode[] = [];
    let lastIndex = 0;
    const regex = /\[([^\]]+)\]\(([^)]+)\)/g;
    let match: RegExpExecArray | null;
    while ((match = regex.exec(text))) {
      const [full, label, href] = match;
      if (match.index > lastIndex) {
        parts.push(text.slice(lastIndex, match.index));
      }
      parts.push(
        <a key={`${label}-${match.index}`} href={href} className="text-blue-600 underline">
          {label}
        </a>
      );
      lastIndex = match.index + full.length;
    }
    if (lastIndex < text.length) {
      parts.push(text.slice(lastIndex));
    }
    return parts;
  };

  lines.forEach((raw, index) => {
    const line = raw.trim();
    if (!line) {
      flushList();
      return;
    }

    if (line.startsWith("- ") || line.startsWith("* ")) {
      const itemText = line.slice(2);
      listItems.push(
        <li key={`li-${index}`} className="mb-1">
          {renderInline(itemText)}
        </li>
      );
      return;
    }

    flushList();

    if (line.startsWith("### ")) {
      nodes.push(
        <h3 key={`h3-${index}`} className="mt-4 text-base font-semibold text-gray-900">
          {renderInline(line.slice(4))}
        </h3>
      );
      return;
    }
    if (line.startsWith("## ")) {
      nodes.push(
        <h2 key={`h2-${index}`} className="mt-4 text-lg font-semibold text-gray-900">
          {renderInline(line.slice(3))}
        </h2>
      );
      return;
    }
    if (line.startsWith("# ")) {
      nodes.push(
        <h1 key={`h1-${index}`} className="mt-4 text-xl font-semibold text-gray-900">
          {renderInline(line.slice(2))}
        </h1>
      );
      return;
    }

    nodes.push(
      <p key={`p-${index}`} className="mt-2 text-sm text-gray-700">
        {renderInline(line)}
      </p>
    );
  });

  flushList();

  return <Fragment>{nodes}</Fragment>;
}
