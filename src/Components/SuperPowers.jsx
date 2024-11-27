import  { useEffect } from "react";
import AOS from "aos";
import { SiJavascript, SiFlutter, SiPrisma, SiPostgresql, SiRemix, SiMongodb } from "react-icons/si";
import SectionTitle from "../utilities/SectionTitle";

const SuperPowers = () => {
    const technologies = [
        { name: "JavaScript", icon: <SiJavascript /> },
        { name: "Flutter", icon: <SiFlutter /> },
        { name: "Prisma", icon: <SiPrisma /> },
        { name: "PostgreSQL", icon: <SiPostgresql /> },
        { name: "Remix", icon: <SiRemix /> },
        { name: "MongoDB", icon: <SiMongodb /> },
    ];

    useEffect(() => {
        AOS.init({
            duration: 1000, 
            easing: 'ease-in-out', 
            once: true, 
        });
    }, []);

    return (
        <section className="text-center py-16">
            <div className="container mx-auto max-w-6xl">
                <header className="mb-16">
                    <SectionTitle title="Our SuperPowers" />
                </header>

                <div className="flex justify-center items-center gap-24 flex-wrap mb-8">
                    {technologies.map((tech, index) => (
                        <article
                            key={index}
                            className="w-24 h-24 relative grayscale hover:grayscale-0 transition-all duration-300 flex items-center justify-center"
                            aria-label={tech.name}
                            data-aos="fade-up"
                            data-aos-delay={index * 100} 
                        >
                            <div className="w-full h-full text-white text-6xl flex items-center justify-center">
                                {tech.icon}
                            </div>
                        </article>
                    ))}
                </div>

                <footer className="flex items-center justify-center gap-4 my-16">
                    <button
                        className="w-10 h-10 rounded-full border border-red-900/20 bg-red-800 flex items-center justify-center hover:bg-red-700 transition-all duration-300"
                        aria-label="Previous">
                        <svg
                            className="w-5 h-5 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 19l-7-7 7-7"
                            />
                        </svg>
                    </button>

                    <span className="text-lg font-semibold text-white tracking-wide">
                        1/16
                    </span>

                    <button
                        className="w-10 h-10 rounded-full border border-red-900/20 bg-red-800 flex items-center justify-center hover:bg-red-700 transition-all duration-300"
                        aria-label="Next">
                        <svg
                            className="w-5 h-5 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                    </button>
                </footer>
            </div>
        </section>
    );
};

export default SuperPowers;
