import useScrollReveal from '../../hooks/useScrollReveal'

const Timeline = ({ items, renderItem, dark = false }) => {
  return (
    <div className="relative">
      <div
        className={`absolute left-5 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-[3px] ${
          dark
            ? 'bg-[linear-gradient(rgba(255,255,255,0.18),rgba(255,255,255,0.06)_44%,rgba(255,255,255,0)_95%)]'
            : 'bg-[linear-gradient(rgba(57,62,127,0.45),rgba(57,62,127,0.22)_44%,rgba(57,62,127,0)_95%)]'
        }`}
        aria-hidden="true"
      />
      <div className="space-y-10">
        {items.map((item, index) => (
          <TimelineItem key={index} index={index} dark={dark}>
            {renderItem(item, index)}
          </TimelineItem>
        ))}
      </div>
    </div>
  )
}

const TimelineItem = ({ index, dark, children }) => {
  const ref = useScrollReveal()

  return (
    <div
      ref={ref}
      className="scroll-reveal relative md:grid md:grid-cols-2 md:gap-12 items-start"
    >
      <span
        className={`absolute left-5 md:left-1/2 -translate-x-1/2 top-1.5 w-3 h-3 rounded-full ${
          dark
            ? 'bg-primary border-2 border-white shadow-[0_0_0_1px_rgba(57,62,127,0.6)]'
            : 'bg-primary ring-4 ring-primary/20'
        }`}
        aria-hidden="true"
      />
      <div
        className={`ml-12 md:ml-0 ${index % 2 === 0 ? 'md:pr-2' : 'md:col-start-2 md:pl-2'}`}
      >
        {children}
      </div>
    </div>
  )
}

export default Timeline