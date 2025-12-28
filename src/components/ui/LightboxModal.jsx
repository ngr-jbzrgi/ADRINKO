import { useEffect } from "react";

export default function LightboxModal({ open, items, activeIndex, onClose }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose?.();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  const item = items?.[activeIndex];
  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose?.();
      }}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      <div className="relative w-full max-w-5xl">
        <div className="glass-effect rounded-2xl overflow-hidden">
          <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
            <div className="text-sm text-gray-300 truncate pr-4">{item.alt || "Preview"}</div>
            <button
              type="button"
              onClick={onClose}
              className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-gray-200"
              aria-label="Close preview"
            >
              Close
            </button>
          </div>

          <div className="bg-black/30">
            <img src={item.src} alt={item.alt || ""} className="w-full max-h-[75vh] object-contain" />
          </div>
        </div>

        <div className="mt-3 flex justify-center text-xs text-gray-400">
          <span>
            {activeIndex + 1} / {items.length}
          </span>
        </div>
      </div>
    </div>
  );
}

