import Link from "next/link";

const heroContent = {
    name: "Amen",
    role: "Developer",
    bio: "A Passionate Front-End Developer focused on building modern, responsive, and user-friendly web applications...",
    image: "/images/cropped2 (2).png",
    hireMeEmail: "mailto:aminagayev516@gmail.com",
    socials: {
        linkedin: "https://www.linkedin.com/in/amin-a%C4%9Fayev-a6258a387/",
        github: "https://github.com/AminAgayev7",
        instagram: "https://instagram.com/amin_aghayev7",
    },
};

export default function Footer() {
    return (
        <footer className="py-12 border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black">
            <div className="container mx-auto px-4">
                

                <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8">
                    <div className="text-center md:text-left">
                        <h3 className="text-2xl font-bold text-red-500 gradient-text mb-1">AmenTech</h3>
                        <p className="text-gray-500 dark:text-gray-400 text-sm">Frontend Developer</p>
                    </div>


                    <div className="flex items-center gap-4 sm:gap-6">
                        <Link
                            href={heroContent.socials.linkedin}
                            target="_blank"
                            className="flex items-center justify-center w-10 h-10 border border-zinc-200 dark:border-zinc-800 rounded-full dark:text-red-400 hover:bg-red-500 hover:scale-110 hover:-translate-y-1 hover:text-black transition-all duration-300"
                        >
                            <i className="fa-brands text-xl fa-linkedin-in"></i>
                        </Link>
                        
                        <Link
                            href={heroContent.socials.github}
                            target="_blank"
                            className="flex items-center justify-center w-10 h-10 border border-zinc-200 dark:border-zinc-800 rounded-full dark:text-red-400 hover:bg-red-500 hover:scale-110 hover:-translate-y-1 hover:text-black transition-all duration-300"
                        >
                            <i className="fa-brands text-xl fa-github"></i>
                        </Link>

                        <Link
                            href={heroContent.socials.instagram}
                            target="_blank"
                            className="flex items-center justify-center w-10 h-10 border border-zinc-200 dark:border-zinc-800 rounded-full dark:text-red-400 hover:bg-red-500 hover:scale-110 hover:-translate-y-1 hover:text-black transition-all duration-300"
                        >
                            <i className="fa-brands text-xl fa-instagram"></i>
                        </Link>
                    </div>
                </div>


                <div className="pt-8 border-t border-zinc-200 dark:border-zinc-800 text-center text-sm text-gray-500 dark:text-gray-400">
                    <p>© 2026 | Made by Amen</p>
                </div>

            </div>
        </footer>
    );
}