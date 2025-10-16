import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import './App.css'
import Card from './components/Card'

function App() {

  return (
    <div className="relative font-dm min-h-screen">
      {/* Background pic */}
      <div className="fixed inset-0 z-1 bg-howl bg-cover bg-no-repeat bg-center"></div>

      {/* Page content */}
      <div className="relative z-10 flex flex-col gap-4 mt-4 mb-4">
        {/* top part */}
        <div
          className="flex-1 flex flex-col p-4 relative z-10 bg-white/30 backdrop-blur-md rounded-xl 
          shadow-lg p-8 max-w-7xl m-auto text-center border border-white/20 
          transform transition-all duration-300 ease-in-out"
        >
      {/* Flex row: image on left, text on right */}
      <div className="flex flex-row items-center space-x-6 text-left">
        {/* Profile Image */}
        <div className="relative inline-block">
          <div
            className="absolute -inset-[3px] rounded-full bg-gradient-to-r 
                      from-indigo-400 via-pink-400 to-purple-400 
                      opacity-70 blur-md animate-pulse"
          ></div>
          <img
            src="/src/assets/profilepic.png"
            alt="Kevin Guillaume"
            className="relative w-32 h-32 rounded-full border-4 border-white/40 
                      shadow-md object-cover"
          />
        </div>

        {/* Text column */}
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-[2rem] md:text-[4rem] font-medium leading-none text-gray-700">
            Kevin Guillaume
          </h2>

          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-4">
            <a
              href="https://github.com/KevinGuillaume"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
            >
              <FaGithub size={28} />
            </a>
            <a
              href="https://linkedin.com/in/kevin-guillaume-722544239/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:text-blue-900 transition-colors duration-200"
            >
              <FaLinkedin size={28} />
            </a>
            <a
              href="https://x.com/KevinG11_?lang=en"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700 transition-colors duration-200"
            >
              <FaXTwitter size={28} />
            </a>
          </div>

          <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-xl text-center">
            I’m a software engineer passionate about exploring technology and its real-world applications. 
            I focus on building high-performance applications that users enjoy, blending practical innovation 
            with seamless user experiences.
          </p>
        </div>
      </div>
    </div>
    {/* sections */}
    <Card 
    title='Investment Management Firm'
    timeSpent='May 2023 – Present'
    caption='Created both internal and external facing products that make work easier.'
    bullets={[
      "Built investor portfolio management application with complementary administrative platforms.",
      "Developed a secure authentication system using Python and JWTs.",
      "Improved data retrieval performance by building optimized REST APIs."
    ]}
    />
    <Card 
    title='RedMane Technology LLC.'
    timeSpent='July 2022 – May 2023'
    caption='Built applications with the State of Missouri to provide citizens access to financial aid programs.'
    bullets={[
      "Implemented user application process.",
      "Created sign-in and sign-up features.",
      "Maintained and improved existing Java applications.",
    ]}
    />
    <Card 
    title='HBR Consulting Intern'
    timeSpent='August 2021 – July 2022'
    caption='Full-stack intern where I increased overall employee collaboration and connection.'
    bullets={[
      "Created a front-facing database to help employees connect with experts in specific areas.",
      "Presented technical ideas to management to get the product approved.",
      "Led data collection and importing of employee skills and assets."
    ]}
    />
    <br />
  </div>
</div>

  )
}

export default App
