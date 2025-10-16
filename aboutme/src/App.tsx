
import './App.css'

function App() {

  return (
    <div className="relative font-dm min-h-screen">
  {/* Background pic */}
  <div className="fixed inset-0 z-1 bg-howl bg-cover bg-no-repeat bg-center"></div>

  {/* Page content */}
  <div className="relative z-10 flex flex-col gap-4">
    {/* top part */}
    <div
  className="flex-1 flex flex-col p-4 relative z-10 bg-white/30 backdrop-blur-md rounded-xl 
  shadow-lg p-8 max-w-7xl m-auto text-center border border-white/20 
  transform transition-all duration-300 ease-in-out"
>
  {/* Flex row: image on left, text on right */}
  <div className="flex flex-row items-center space-x-6 text-left">
    {/* Profile Image */}
    <img
      src="/src/assets/profilepic.png"  // replace with your image path
      alt="Kevin Guillaume"
      className="w-32 h-32 rounded-full border-2 border-white/40 shadow-md object-cover"
    />

    {/* Text column */}
    <div className="flex flex-col justify-center">
      <h2 className="text-[2rem] md:text-[4rem] font-medium leading-none text-gray-700">
        Kevin Guillaume
      </h2>
      <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-xl">
        I’m a software engineer passionate about exploring the DeFi space and its real-world applications. 
        I focus on building high-performance applications that users enjoy, blending practical innovation 
        with seamless user experiences.
      </p>
    </div>
  </div>
</div>


    {/* sections */}
    <section id="about" className="px-10 py-20 p-4
          relative z-10  bg-white/30  m-auto backdrop-blur-md rounded-xl 
          shadow-lg p-8 w-1/2 text-center border border-white/20 
          transform transition-all duration-300 ease-in-out">
      <h3 className="text-3xl font-semibold mb-4">About Me</h3>
      <p className="text-lg leading-relaxed text-gray-600 max-w-3xl">
      </p>
    </section>

    <section id="experience" className="px-10 py-20 p-4
          relative z-10  bg-white/30  backdrop-blur-md rounded-xl 
          shadow-lg p-8 w-1/2 text-center m-auto border border-white/20 
          transform transition-all duration-300 ease-in-out">
      <h3 className="text-3xl font-semibold mb-4">Experience</h3>
      <p className="text-lg text-gray-600 max-w-3xl">
      </p>
    </section>
  </div>
</div>

  )
}

export default App
