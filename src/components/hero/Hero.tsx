import Image from "next/image";
import Link from "next/link";


const heroContent = {
  name: "Amen",
  role: "Developer",
  bio: "Passionate Front-End Developer focused on building modern, responsive, and user-friendly web applications. I enjoy turning ideas into clean, efficient, and visually appealing digital experiences using technologies like React, Next.js, TypeScript, and Tailwind CSS. Always eager to learn and improve, I strive to create fast, accessible, and high-quality solutions that deliver great user experiences.",
  image: "/images/cropped2 (2).png",
  hireMeEmail: "mailto:aminagayev516@gmail.com",
  socials: {
    linkedin: "https://www.linkedin.com/in/amin-a%C4%9Fayev-a6258a387/",
    github: "https://github.com/AminAgayev7",
    instagram: "https://instagram.com/amin_aghayev7",
  },
};


export default function Hero() {
  return (
    <section
      id="hero"
      className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans p-4 md:p-8 dark:bg-black min-h-screen"
    >
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-between max-w-6xl w-full gap-8 md:gap-16">

        <div className="w-full max-w-xs md:max-w-md px-4 md:px-0 flex justify-center">
          <Image
            className="rounded-full shadow-lg shadow-red-800 w-full h-auto"
            src={heroContent.image}
            width={500}
            height={500}
            alt={heroContent.name}
            priority
          />
        </div>

        <section className="flex flex-col gap-y-8 text-left max-w-xl">
          <div className="flex flex-col gap-y-2">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold">
              Hi It&apos;s <span className="text-red-400">{heroContent.name}</span>
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold">
              I&apos;m a <span className="text-red-400">{heroContent.role}</span>
            </h2>
          </div>

          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
            {heroContent.bio}
          </p>

          <div className="flex flex-col gap-y-8">

            <div className="flex items-center space-x-5 sm:space-x-10 justify-start">
              <Link
                href={heroContent.socials.linkedin}
                target="_blank"
                className="block border rounded-full p-1 px-2 sm:p-2 dark:text-red-400 dark:hover:bg-red-500 dark:hover:scale-125 dark:hover:-translate-y-2 dark:hover:text-black transition-all duration-500"
              >
                <i className="fa-brands sm:text-2xl fa-square-linkedin"></i>
              </Link>
              <Link
                href={heroContent.socials.github}
                target="_blank"
                className="block dark:text-red-400 border rounded-full p-1 px-2 sm:p-2 dark:hover:bg-red-500 dark:hover:scale-125 dark:hover:-translate-y-2 dark:hover:text-black text-gray-900 transition-all duration-500"
              >
                <i className="fa-brands sm:text-2xl fa-github"></i>
              </Link>

              <Link
                href={heroContent.socials.instagram}
                target="_blank"
                className="block dark:text-red-400 border dark:hover:bg-red-500 dark:hover:scale-125 dark:hover:-translate-y-2 dark:hover:text-black rounded-full p-1 sm:p-2 text-gray-900 transition-all duration-500"
              >
                <i className="fa-brands sm:text-2xl fa-instagram"></i>
              </Link>
            </div>


            <a
              href={heroContent.hireMeEmail}
              className="w-fit dark:hover:bg-red-500 dark:hover:scale-110 dark:hover:-translate-y-2 dark:hover:text-black dark:hover:border-red-700 transition-all duration-500 border border-red-400 text-red-400 py-2 px-6 rounded-full"
            >
              Hire me
            </a>
          </div>
        </section>
      </div>
    </section>
  );
}
