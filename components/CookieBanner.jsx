"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "vibe-cookie-consent";

export default function CookieBanner() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      const value = localStorage.getItem(STORAGE_KEY);
      if (!value) setOpen(true);
    } catch {
      setOpen(true);
    }
  }, []);

  const handleChoice = (choice) => {
    try {
      localStorage.setItem(STORAGE_KEY, choice);
    } catch {
      // ignore
    }
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-800 bg-slate-950/95 backdrop-blur px-4 py-3">
      <div className="mx-auto flex max-w-5xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-sm text-slate-200">
          <p className="font-semibold">We use cookies 🍪</p>
          <p className="text-slate-400">
            This site uses cookies for basic analytics and to remember your
            preferences. You can accept or deny non-essential cookies.
          </p>
        </div>
        <div className="flex gap-2 justify-end">
          <button
            onClick={() => handleChoice("deny")}
            className="rounded-full border border-slate-600 px-3 py-1.5 text-xs font-medium text-slate-200 hover:bg-slate-800"
          >
            Deny
          </button>
          <button
            onClick={() => handleChoice("accept")}
            className="rounded-full bg-emerald-500 px-4 py-1.5 text-xs font-semibold text-slate-950 hover:bg-emerald-400"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
