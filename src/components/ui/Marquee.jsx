const Marquee = ({ items, dark = false, className = '' }) => {
  const content = (
    <>
      {items.map((item, index) => (
        <span key={`${item}-${index}`} className="flex items-center">
          <span className="px-5 text-xs md:text-sm uppercase tracking-[0.2em] whitespace-nowrap">
            {item}
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" aria-hidden="true" />
        </span>
      ))}
    </>
  )

  return (
    <div
      aria-hidden="true"
      className={`marquee overflow-hidden select-none border-y py-4 ${
        dark
          ? 'bg-ink-soft border-white/10 text-slate-400'
          : 'bg-paper border-slate-200 text-slate-500'
      } ${className}`}
    >
      <div className="marquee-track">
        <div className="flex shrink-0">{content}</div>
        <div className="flex shrink-0">{content}</div>
      </div>
    </div>
  )
}

export default Marquee
