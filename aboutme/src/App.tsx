
import './App.css'

function App() {

  return (
    <div className="relative font-dm min-h-screen">
  {/* Background pic */}
  <div className="fixed inset-0 z-1 bg-howl bg-cover bg-no-repeat bg-center"></div>

  {/* Page content */}
  <div className="relative z-10 flex flex-col">
    {/* top part */}
    <main className="flex-1 flex flex-col p-4">
      <h2 className="text-[6rem] md:text-[8rem] font-medium leading-none text-gray-100">
        Kevin Guillaume
      </h2>
      <p className="mt-6 text-xl text-gray-300 max-w-2xl">
      I’m a software engineer passionate about exploring the DeFi space 
      and its real-world applications. I focus on building high-performance applications that users enjoy,
       blending practical innovation with seamless user experiences.
      </p>
    </main>

    {/* sections */}
    <section id="about" className="px-10 py-20">
      <h3 className="text-3xl font-semibold mb-4">About Me</h3>
      <p className="text-lg leading-relaxed text-gray-600 max-w-3xl">
      </p>
    </section>

    <section id="experience" className="px-10 py-20">
      <h3 className="text-3xl font-semibold mb-4">Experience</h3>
      <p className="text-lg text-gray-600 max-w-3xl">
      </p>
    </section>

    <section id="contact" className="px-10 py-20">
      <h3 className="text-3xl font-semibold mb-4">Contact</h3>
      <p className="text-lg text-gray-600 max-w-3xl">
      </p>
    </section>
  </div>
</div>

  )
}

export default App
