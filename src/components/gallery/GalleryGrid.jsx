export default function GalleryGrid({ items, onOpen }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {items.map((it, idx) => (
        <button
          key={`${it.src}-${idx}`}
          type="button"
          onClick={() => onOpen?.(idx)}
          className="glass-effect rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-ice-500/10 transition-all"
          aria-label={`Open image: ${it.alt}`}
        >
          <div className="relative aspect-[4/3]">
            <img src={it.src} alt={it.alt} className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-all" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/0 to-transparent" />
          </div>
          <div className="p-3 text-left">
            <div className="text-sm text-gray-200 font-medium truncate">{it.alt}</div>
            <div className="text-xs text-gray-400 mt-1 capitalize">{it.category}</div>
          </div>
        </button>
      ))}
    </div>
  );
}

