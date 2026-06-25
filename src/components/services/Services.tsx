
const servicesContent = {
  title: "My Services",
  subtitle: "What I offer",
  services: [
    {
      icon: "fa-solid fa-laptop-code",
      title: "Web Development",
      description: "End-to-end web application development using modern frameworks like Next.js and React, with a focus on performance and scalability.",
    },
    {
      icon: "fa-solid fa-mobile-screen",
      title: "Responsive Design",
      description: "Pixel-perfect, mobile-first designs that look and work great on every screen size — from phones to ultra-wide monitors.",
    },
    {
      icon: "fa-solid fa-server",
      title: "Backend & APIs",
      description: "Building robust REST APIs, database schemas, and server-side logic to power your web applications.",
    },
    {
      icon: "fa-solid fa-paint-brush",
      title: "UI/UX Implementation",
      description: "Translating Figma or design mockups into clean, interactive interfaces with smooth animations and great UX.",
    },
    {
      icon: "fa-solid fa-magnifying-glass-chart",
      title: "Performance Optimization",
      description: "Auditing and optimizing existing sites for speed, SEO, and Core Web Vitals to boost search rankings and user retention.",
    },
    {
      icon: "fa-solid fa-headset",
      title: "Consulting & Code Review",
      description: "Providing technical guidance, architecture advice, and thorough code reviews for individuals and small teams.",
    },
  ],
};


export default function Services() {
  return (
    <section id="services" className="py-20 px-4 md:px-8 bg-zinc-50 dark:bg-black">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-red-400 font-semibold tracking-widest uppercase text-sm mb-2">
            {servicesContent.subtitle}
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            {servicesContent.title}
          </h2>
          <div className="mt-4 h-1 w-16 bg-red-400 mx-auto rounded-full" />
        </div>


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesContent.services.map((service, i) => (
            <div
              key={i}
              className="group border border-red-400/20 rounded-2xl p-6 flex flex-col gap-4 hover:border-red-400 hover:shadow-xl hover:shadow-red-900/10 hover:-translate-y-1 transition-all duration-300 bg-white dark:bg-zinc-900"
            >
              <div className="w-12 h-12 rounded-xl bg-red-400/10 flex items-center justify-center group-hover:bg-red-400 transition-colors duration-300">
                <i className={`${service.icon} text-red-400 text-xl group-hover:text-black transition-colors duration-300`}></i>
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-red-400 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
