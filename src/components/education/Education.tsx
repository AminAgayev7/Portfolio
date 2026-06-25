
const educationContent = {
  title: "Education",
  subtitle: "My academic journey",
  items: [
    {
      degree: "Bachelor's in Computer Engineering",
      institution: "Azerbaijan Technical University",
      location: "Baku, Azerbaijan",
      period: "2023 – Present",
      description: "Focused on software engineering, algorithms, and data structures. ",
      gpa: "95 / 100",
    },
    {
      degree: "Front-end Web Development",
      institution: "Peerstack Academy",
      location: "Baku, Azerbaijan. Azerbaijan Technical University",
      period: "2021 – 2022",
      description: "Completed intensive training in modern web technologies including React, Node.js, and databases.",
      gpa: null,
    },
  ],
};


export default function Education() {
  return (
    <section id="education" className="py-20 px-4 md:px-8 bg-zinc-50 dark:bg-black">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-14">
          <p className="text-red-400 font-semibold tracking-widest uppercase text-sm mb-2">
            {educationContent.subtitle}
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            {educationContent.title}
          </h2>
          <div className="mt-4 h-1 w-16 bg-red-400 mx-auto rounded-full" />
        </div>


        <div className="relative flex flex-col gap-0">
  
          <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-red-400/20 hidden sm:block" />

          {educationContent.items.map((item, i) => (
            <div key={i} className="flex gap-6 sm:gap-10 items-start group pb-12 last:pb-0">

              <div className="relative hidden sm:flex flex-col items-center shrink-0">
                <div className="w-10 h-10 rounded-full border-2 border-red-400 bg-white dark:bg-black flex items-center justify-center z-10 group-hover:bg-red-400 transition-colors duration-300">
                  <i className="fa-solid fa-graduation-cap text-red-400 text-sm group-hover:text-black transition-colors duration-300"></i>
                </div>
              </div>


              <div className="flex-1 border border-red-400/20 rounded-2xl p-6 hover:border-red-400 hover:shadow-lg hover:shadow-red-900/10 transition-all duration-300 bg-white dark:bg-zinc-900">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                      {item.degree}
                    </h3>
                    <p className="text-red-400 font-medium">{item.institution}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="text-xs font-semibold border border-red-400/40 text-red-400 rounded-full px-3 py-1 whitespace-nowrap">
                      {item.period}
                    </span>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{item.location}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {item.description}
                </p>
                {item.gpa && (
                  <p className="mt-2 text-xs text-red-400 font-semibold">GPA: {item.gpa}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
