'use client';

import { useEffect, useState } from 'react';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1280) setIsOpen(false);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);


    useEffect(() => {
        const sections = document.querySelectorAll('section[id]');
        
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(`#${entry.target.id}`);
                    }
                });
            },
            { 

                rootMargin: '-30% 0px -60% 0px' 
            }
        );

        sections.forEach((section) => observer.observe(section));

        return () => {
            sections.forEach((section) => observer.unobserve(section));
        };
    }, []);

    const navLinks = [
        { label: 'About', href: '#about' },
        { label: 'Skills', href: '#skills' },
        { label: 'Projects', href: '#projects' },
        { label: 'Education', href: '#education' },
        { label: 'Services', href: '#services' },
        { label: 'Contact', href: '#contact' },
    ];

    return (
        <nav
            className={`
                fixed left-1/2 -translate-x-1/2 z-50
                backdrop-blur-sm bg-black/50 text-white
                transition-all duration-500 ease-in-out 
                ${isScrolled
                    ? 'w-[95%] sm:w-[90%] md:w-[80%] lg:w-[70%] rounded-2xl xl:rounded-full my-3 shadow-lg shadow-gray-950'
                    : 'w-full rounded-none'
                }
            `}
        >
            <div className="h-16 sm:h-18 md:h-20 px-4 sm:px-6 flex items-center justify-between">
                
                <a
                    href="/"
                    className="text-xl font-bold sm:text-2xl md:text-3xl lg:text-4xl text-red-500"
                >
                    AmenTech
                </a>


                <ul className="hidden xl:flex gap-4 xl:gap-8 text-gray-300 text-sm xl:text-base">
                    {navLinks.map((link) => {
                        const isActive = activeSection === link.href;
                        return (
                            <li key={link.label} className="relative py-2">
                                <a 
                                    className={`transition whitespace-nowrap block relative pb-1
                                        ${isActive ? 'text-red-500 font-medium' : 'hover:text-white'}`} 
                                    href={link.href}
                                >
                                    {link.label}

                                    <span className={`absolute bottom-0 left-0 h-[2px] bg-red-500 transition-all duration-300
                                        ${isActive ? 'w-full' : 'w-0'}`} 
                                    />
                                </a>
                            </li>
                        );
                    })}
                </ul>

                <button
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label={isOpen ? 'Close menu' : 'Open menu'}
                    aria-expanded={isOpen}
                    className="xl:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 shrink-0"
                >
                    <span className={`block h-0.5 w-6 bg-white transition-all duration-300 origin-center ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
                    <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${isOpen ? 'opacity-0 scale-x-0' : ''}`} />
                    <span className={`block h-0.5 w-6 bg-white transition-all duration-300 origin-center ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                </button>
            </div>


            <div className={`xl:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <ul className="flex flex-col px-4 sm:px-6 pb-4 gap-1 text-gray-300">
                    {navLinks.map((link) => {
                        const isActive = activeSection === link.href;
                        return (
                            <li key={link.label}>
                                <a
                                    onClick={() => setIsOpen(false)}
                                    href={link.href}
                                    className={`block py-2.5 px-3 rounded-lg transition
                                        ${isActive 
                                            ? 'text-red-500 bg-red-500/10 font-medium border-l-4 border-red-500' 
                                            : 'hover:text-white hover:bg-gray-800'}`}
                                >
                                    {link.label}
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </nav>
    );
}