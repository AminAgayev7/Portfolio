import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss, 
  SiHtml5, 
  SiCss, 
  SiNodedotjs, 
  SiPostgresql, 
  SiGit, 
  SiGithub 
} from "react-icons/si";
import { HiOutlineCube } from "react-icons/hi"; // REST API üçün alternativ ikon

const skillsContent = {
  title: "My Skills",
  subtitle: "What I work with",
  categories: [
    {
      name: "Frontend",
      skills: [
        { name: "React / Next.js", icon: <div className="flex gap-1"><SiReact className="text-[#61DAFB]" /> <SiNextdotjs className="text-black dark:text-white" /></div> },
        { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
        { name: "HTML & CSS", icon: <div className="flex gap-1"><SiHtml5 className="text-[#E34F26]" /> <SiCss className="text-[#1572B6]" /></div> },
      ],
    },
    {
      name: "Backend",
      skills: [
        { name: "Node.js", icon: <SiNodedotjs className="text-[#339933]" /> },
        { name: "REST APIs", icon: <HiOutlineCube className="text-[#00BCD4]" /> },
        { name: "PostgreSQL", icon: <SiPostgresql className="text-[#4169E1]" /> },
      ],
    },
    {
      name: "Tools & Other",
      skills: [
        { name: "Git & GitHub", icon: <div className="flex gap-1"><SiGit className="text-[#F05032]" /> <SiGithub className="text-black dark:text-white" /></div> },
      ],
    },
  ],
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 md:px-8 bg-zinc-50 dark:bg-black">
      <div className="max-w-6xl mx-auto">
        

        <div className="text-center mb-14">
          <p className="text-red-400 font-semibold tracking-widest uppercase text-sm mb-2">
            {skillsContent.subtitle}
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            {skillsContent.title}
          </h2>
          <div className="mt-4 h-1 w-16 bg-red-400 mx-auto rounded-full" />
        </div>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {skillsContent.categories.map((cat) => (
            <div key={cat.name} className="bg-white dark:bg-zinc-900/50 border border-zinc-100 dark:border-zinc-800/50 p-6 rounded-2xl shadow-sm">
              <h3 className="text-lg font-semibold text-red-400 mb-6 border-b border-red-400/20 pb-3">
                {cat.name}
              </h3>
              

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-4">
                {cat.skills.map((skill) => (
                  <div 
                    key={skill.name} 
                    className="flex items-center gap-4 p-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/40 hover:bg-red-50 dark:hover:bg-red-950/20 border border-transparent hover:border-red-200 dark:hover:border-red-900/30 transition-all duration-300 group"
                  >
  
                    <div className="text-2xl p-2 bg-white dark:bg-zinc-800 rounded-lg shadow-sm group-hover:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </div>
                    

                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}