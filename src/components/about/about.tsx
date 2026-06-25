
const aboutContent = {
  title: "About Me",
  subtitle: "Get to know me",
  description: 
    "Hi, I'm Amen. I'm currently a bachelor degree student of computer engineering speciality at Azerbaijan Tecnical University (AzTU) and I'm passionate front-end developer focused on building real-world projects rather than simply following tutorials. Through a trainee program at Peerstack Academy, I have contributed to over 60 projects, including backend applications, and gained experience working with Qwasar Silicon Valley standards. ",
  stats: [
    { label: "Years of Experience", value: "2+" },
    { label: "Projects Completed", value: "60+" },
    { label: "Technologies", value: "10+" },
    { label: "Certificates", value: "5+" },
  ],
  resumeUrl: "/cv/Amen_Aghayev_CV.pdf",
};


export default function About() {
  return (
    <section id="about" className="py-20 px-4 md:px-8 bg-white dark:bg-zinc-900">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-14">
          <p className="text-red-400 font-semibold tracking-widest uppercase text-sm mb-2">
            {aboutContent.subtitle}
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            {aboutContent.title}
          </h2>
          <div className="mt-4 h-1 w-16 bg-red-400 mx-auto rounded-full" />
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">

          <div className="flex-1   flex flex-col gap-5">
            
              <p  className="text-gray-600 dark:text-gray-300 leading-relaxed text-base">
                {aboutContent.description}
              </p>
         
            <a
              href={aboutContent.resumeUrl}
              download
              className="mt-4 w-fit border border-red-400 text-red-400 py-2 px-6 rounded-full hover:bg-red-500 hover:text-black hover:scale-105 hover:-translate-y-1 transition-all duration-300"
            >
              Download CV
            </a>
          </div>


          <div className="grid grid-cols-2 gap-6 w-full lg:w-auto">
            {aboutContent.stats.map((stat, i) => (
              <div
                key={i}
                className="border border-red-400/30 dark:border-red-400/20 rounded-2xl p-6 text-center hover:border-red-400 hover:shadow-lg hover:shadow-red-900/20 transition-all duration-300"
              >
                <p className="text-3xl md:text-4xl font-bold text-red-400">{stat.value}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
