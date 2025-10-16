
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
      src="/src/assets/profilepic.png"
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
    <section
  id="experience"
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
        Investment Management Firm<span className="text-gray-500">*</span>
      </h3>
      <p className="text-gray-600 text-sm md:text-base">May 2023 – Present</p>
    </div>

    <p className="text-gray-700 mt-3">
      Created both internal and external facing products that make work easier.
    </p>

    <ul className="list-disc list-inside text-gray-600 mt-4 space-y-2 marker:text-indigo-400">
      <li>Built investor portfolio management application with complementary administrative platforms.</li>
      <li>Developed a secure authentication system using Python and JWTs.</li>
      <li>Improved data retrieval performance by building optimized REST APIs.</li>
    </ul>

    <p className="text-sm text-gray-500 mt-4 italic">
      * Name redacted for compliance reasons.
    </p>
  </article>
</section>

<section
  id="experience"
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
        RedMane Technology LLC.
      </h3>
      <p className="text-gray-600 text-sm md:text-base">July 2022 – May 2023</p>
    </div>

    <p className="text-gray-700 mt-3">
      Built applications with the State of Missouri to provide citizens access to financial aid programs.
    </p>

    <ul className="list-disc list-inside text-gray-600 mt-4 space-y-2 marker:text-indigo-400">
      <li>Implemented user application process.</li>
      <li>Created sign-in and sign-up features.</li>
      <li>Maintained and improved existing Java applications.</li>
    </ul>
  </article>
</section>

<section
  id="experience"
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
        HBR Consulting Intern
      </h3>
      <p className="text-gray-600 text-sm md:text-base">August 2021 – July 2022</p>
    </div>

    <p className="text-gray-700 mt-3">
      Full-stack intern where I increased overall employee collaboration and connection.
    </p>

    <ul className="list-disc list-inside text-gray-600 mt-4 space-y-2 marker:text-indigo-400">
      <li>Created a front-facing database to help employees connect with experts in specific areas.</li>
      <li>Presented technical ideas to management to get the product approved.</li>
      <li>Led data collection and importing of employee skills and assets.</li>
    </ul>
  </article>
</section>


    <section id="contact" className="px-10 py-20 p-4
          relative z-10  bg-white/30  backdrop-blur-md rounded-xl 
          shadow-lg p-8 w-1/2 text-center m-auto border border-white/20 
          transform transition-all duration-300 ease-in-out">
      <h3 className="text-3xl font-semibold mb-4">Contact</h3>
      <p className="text-lg text-gray-600 max-w-3xl">
      </p>
    </section>
  </div>
</div>

  )
}

export default App
