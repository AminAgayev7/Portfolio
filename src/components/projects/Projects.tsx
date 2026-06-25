

const projectsContent = {
  title: "My Projects",
  subtitle: "Things I've built",
  projects: [
    {
      title: "Portfolio Website",
      description: "A modern, responsive personal portfolio built with Next.js, TypeScript, and Tailwind CSS. Features dark mode, smooth animations, and a clean red-accented design.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS"],

      githubUrl: "",
      featured: true,
    },
    {
      title: "E-Commerce App",
      description: "Replication of a backend-based e-commerce platform using localStorage, featuring product listings, cart management, user authentication, payment integration, and more.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS"],

      githubUrl: "https://github.com/AminAgayev7/FinalProject.git",
      featured: true,
    },
    {
      title: "Basecamp",
      description: "A web application for managing projects and tasks, developed with Express.js and Node.js, featuring user authentication and organized project workflows.",
      tags: ["Node.js", "Express.js", "HTML & CSS"],

      githubUrl: "https://github.com/AminAgayev7/my_basecamp_1.git",
      featured: true,
    },
    {
      title: "Language Learning Chat",
      description: "A Gemini AI integrated chat application that offers a personalized learning plan according to the language you want to lean",
      tags: ["Next.js", "TypeScript", "REST API", "Gemini AI"],

      githubUrl: "https://github.com/AminAgayev7/ai-supported-duolingo-chat-app.git",
      featured: true,
    },
    {
      title: "Spotify UI",
      description: "A complex clone of the user interface of Spotify",
      tags: ["Next.js", "TypeScript", "Tailwind CSS"],

      githubUrl: "https://github.com/AminAgayev7/Spotify-UI.git",
      featured: false,
    },
    {
      title: "Face Detector App",
      description: "An API-based web application that recognizes faces and computes emotions.",
      tags: ["JavaScript", "API"],

      githubUrl: "https://github.com/AminAgayev7/FaceDetector-App.git",
      featured: false,
    },
    {
      title: "My Users App (Express.js)",
      description: "A MVC-based user management system that includes CRUD operations and more.",
      tags: ["Express.js", "SQLite", "Node.js"],

      githubUrl: "https://github.com/AminAgayev7/My-Users-App-JS.git",
      featured: true
    },
    {
      title: "My Sqlite",
      description: "Command Line Interface supported app that allows writing sql queries.",
      tags: ["Ruby"],

      githubUrl: "https://github.com/AminAgayev7/MySqlite.git",
      featured: true
    },
    {
      title: "Edge Computing Streaming",
      description: "Built a Netflix-inspired streaming application that shows the number of fake clients using streaming and shows tailored movies based on your location.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS"],

      githubUrl: "https://github.com/AminAgayev7/Edge-Computing-Streaming.git",
      featured: true
    }, 
    {
      title: "Airbnb Clone",
      description: "Built an Airbnb-inspired e-commerce application that includes filtering, wishlist, property details and more.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS"],

      githubUrl: "https://github.com/AminAgayev7/Airbnb-clone.git",
      featured: false
    },
    {
      title: "Tetris Game",
      description: "Built one of the most popular games, Tetris!",
      tags: ["JavaScript", "HTML & CSS"],

      githubUrl: "https://github.com/AminAgayev7/TetrisGame.git",
      featured: true
    }, 
    {
      title: "Product Management App",
      description: "Enterprise Management Platform is a full-stack business management system built with Next.js, TypeScript, Prisma, and SQLite. The platform provides secure authentication, role-based access control, product and order management, user administration, and real-time analytics through a centralized dashboard.",
      tags: ["Next.js", "TypeScript", "Prisma", "SQLite"],

      githubUrl: "https://github.com/AminAgayev7/Enterprise-Platform-deployment.git",
      featured: true
    },
    {
      title: "My Users App (Ruby, Sinatra)",
      description: "A MVC-based user management system that includes CRUD operations and more.",
      tags: ["Sinatra", "Ruby", "SQLite"],

      githubUrl: "https://github.com/AminAgayev7/MyUsersApp.git",
      featured: true
    }
  ],
};


export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 md:px-8 bg-white dark:bg-zinc-900">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-14">
          <p className="text-red-400 font-semibold tracking-widest uppercase text-sm mb-2">
            {projectsContent.subtitle}
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            {projectsContent.title}
          </h2>
          <div className="mt-4 h-1 w-16 bg-red-400 mx-auto rounded-full" />
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsContent.projects.map((project, i) => (
            <div
              key={i}
              className="group border border-red-400/20 rounded-2xl p-6 flex flex-col gap-4 hover:border-red-400 hover:shadow-xl hover:shadow-red-900/10 hover:-translate-y-1 transition-all duration-300 bg-zinc-50 dark:bg-zinc-800"
            >
              {project.featured && (
                <span className="text-xs font-semibold text-red-400 border border-red-400/40 rounded-full px-3 py-0.5 w-fit">
                  Featured
                </span>
              )}

              <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-red-400 transition-colors duration-300">
                {project.title}
              </h3>

              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed flex-1">
                {project.description}
              </p>


              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-red-400/10 text-red-400 px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>


              <div className="flex gap-4 mt-2">

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-red-400 hover:underline flex items-center gap-1"
                >
                  <i className="fa-brands fa-github text-sm"></i> GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
