

export default function Card(props: {title: string, timeSpent: string, caption: string, bullets: string[]}) {
    const title = props.title
    const timeSpent = props.timeSpent
    const caption = props.caption
    const bullets = props.bullets

    const redacted = title === "Investment Management Firm"
    

    return (
        <section
      id="experience1"
      className="group relative z-10 w-11/12 md:w-1/2 m-auto 
                p-6 md:p-8 bg-white/30 backdrop-blur-md rounded-2xl 
                border border-white/20 shadow-md 
                transition-all duration-300 ease-in-out 
                hover:-translate-y-2 hover:shadow-xl hover:shadow-indigo-200/50"
    >
      <div
        className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r 
                  from-indigo-400/20 via-pink-400/20 to-purple-400/20 
                  opacity-0 group-hover:opacity-100 transition duration-500 blur-sm"
      ></div>

      <article className="relative">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          <h3 className="text-2xl font-semibold text-gray-800 mb-2 md:mb-0">
            {title}
            {redacted && <span className="text-gray-500">*</span>}
          </h3>
          <p className="text-gray-600 text-sm md:text-base">{timeSpent}</p>
        </div>

        <p className="text-gray-700 mt-3">
          {caption}
        </p>

        <ul className="list-disc list-inside text-gray-600 mt-4 space-y-2 marker:text-indigo-400">
          {bullets.map(point => (
            <li>{point}</li>
          ))}
        </ul>
        {redacted &&
        <p className="text-sm text-gray-500 mt-4 italic">
          * Name redacted for compliance reasons.
        </p>}
      </article>
    </section>
    )
}