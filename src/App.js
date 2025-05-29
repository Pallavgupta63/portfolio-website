import React, { useState } from "react";

const projects = [
  {
    title: "Audi After-Sales Analytics",
    description:
      "Built predictive models for vehicle after-sales service and parts inventory optimization.",
    tech: "Python, Machine Learning, SQL",
    impact:
      "Improved parts inventory accuracy by 20%, reducing stockouts and increasing customer satisfaction.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Audi_logo_2016.svg",
    github: "#",
    demo: "#",
  },
  {
    title: "Home Furnishing Export OTD Prediction",
    description:
      "Developed ML models to ensure 100% on-time delivery and reduce lead times for Sarita Handa Exports.",
    tech: "Python, Time Series, Data Visualization",
    impact:
      "Achieved 15% reduction in delivery lead time and boosted on-time delivery rate from 85% to 100%.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Sarita_Handa_Logo.png",
    github: "#",
    demo: "#",
  },
  {
    title: "Meeting Note Taker Bot",
    description:
      "Created an AI-powered meeting bot that records, transcribes, and summarizes meetings with action items.",
    tech: "React, Node.js, NLP, Azure Cognitive Services",
    impact:
      "Reduced meeting note-taking effort by 70%, enhancing team productivity and follow-up accuracy.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Microsoft_Azure_Logo.svg",
    github: "#",
    demo: "#",
  },
];

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      {/* 
        Add this to your index.html inside <head> for SEO:
        <title>YourName | Data Scientist & MBA</title>
        <meta name="description" content="Portfolio of YourName, Data Scientist and MBA graduate." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        And Tailwind CDN:
        <script src="https://cdn.tailwindcss.com"></script>
      */}

      <div className="min-h-screen bg-black font-sans text-gray-300 scroll-smooth">
        {/* Header */}
        <header className="bg-green-600 shadow-lg sticky top-0 z-50">
          <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
            <div className="text-3xl font-extrabold text-white tracking-wide select-none">
              Pallav Gupta
            </div>

            {/* Desktop menu */}
            <ul className="hidden md:flex space-x-8 text-white font-semibold">
              {["about", "projects", "contact"].map((section) => (
                <li key={section}>
                  <a
                    href={`#${section}`}
                    className="relative group after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </a>
                </li>
              ))}
            </ul>

            {/* Mobile hamburger menu */}
            <button
              aria-label="Toggle menu"
              className="md:hidden text-white focus:outline-none"
              onClick={toggleMobileMenu}
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </nav>

          {/* Mobile menu items */}
          {mobileMenuOpen && (
            <ul className="md:hidden bg-green-700 text-white font-semibold px-6 py-4 space-y-4">
              {["about", "projects", "contact"].map((section) => (
                <li key={section}>
                  <a
                    href={`#${section}`}
                    onClick={() => setMobileMenuOpen(false)} // close on click
                    className="block py-1 hover:underline"
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </header>

        {/* About Section */}
        <section
          id="about"
          className="container mx-auto px-6 py-20 flex flex-col md:flex-row items-center"
        >
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-5xl font-extrabold text-white">Hi, I’m Pallav Gupta</h1>
            <p className="text-lg text-green-400 leading-relaxed">
              I am an MBA graduate and Data Scientist passionate about building AI-powered
              solutions that drive business growth and operational excellence.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Skilled in Python, Machine Learning, Data Analysis, and Visualizations. Experienced
              in project management, team leadership, and business strategy.
            </p>
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0">
            <img
  src="https://media.licdn.com/dms/image/v2/D4D03AQFHTknAqc2w4Q/profile-displayphoto-shrink_800_800/B4DZYRIDmVHAAg-/0/1744044047268?e=1753920000&v=beta&t=pu9mfo_zN7me-oQNSPW-FEHX3iSAaNZ2xfisQQ24v0g"
  alt="YourName Portrait"
  className="rounded-lg shadow-lg mx-auto border-4 border-green-600"
  loading="lazy"
/>


          </div>
          
        </section>

        {/* Projects Section */}
        <section id="projects" className="container mx-auto px-6 py-20">
          <h2 className="text-4xl font-extrabold text-white mb-12 text-center">
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map(({ title, description, tech, impact, logo, github, demo }) => (
              <div
                key={title}
                className="bg-gray-900 rounded-lg shadow-lg p-6 transform transition duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <div className="flex items-center mb-4 space-x-4">
                  {logo && (
                    <img
                      src={logo}
                      alt={`${title} Logo`}
                      className="h-12 w-12 object-contain"
                      loading="lazy"
                    />
                  )}
                  <h3 className="text-2xl font-semibold text-green-400">{title}</h3>
                </div>

                <p className="text-gray-300 mb-2">{description}</p>
                <p className="text-sm text-gray-400 mb-2">
                  <strong>Tech:</strong> {tech}
                </p>
                <p className="text-sm text-green-400 italic mb-4">
                  <strong>Impact:</strong> {impact}
                </p>

                <div className="flex space-x-6">
                  {github !== "#" && (
                    <a
                      href={github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-400 hover:underline"
                    >
                      GitHub
                    </a>
                  )}
                  {demo !== "#" && (
                    <a
                      href={demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-400 hover:underline"
                    >
                      Demo
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="container mx-auto px-6 py-20 text-gray-300"
        >
          <h2 className="text-4xl font-extrabold mb-6 text-center text-white">
            Contact Me
          </h2>
          <div className="max-w-md mx-auto space-y-4 text-center">
            <p>
              <strong>Email:</strong>{" "}
              <a
                href="mailto:your.email@example.com"
                className="text-green-400 hover:underline"
              >
                your.email@example.com
              </a>
            </p>
            <p>
              <strong>Phone:</strong>{" "}
              <a href="tel:+1234567890" className="text-green-400 hover:underline">
                +1 234 567 890
              </a>
            </p>
            <p>
              <strong>LinkedIn:</strong>{" "}
              <a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:underline"
              >
                linkedin.com/in/yourprofile
              </a>
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-green-800 text-gray-300 text-center py-6">
          &copy; {new Date().getFullYear()} Pallav Gupta. All rights reserved.
        </footer>
      </div>
    </>
  );
}
