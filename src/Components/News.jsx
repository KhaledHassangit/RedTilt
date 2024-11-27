import news from "../assets/news.png";
import { FaArrowRight } from "react-icons/fa";
import { useEffect } from "react";
import AOS from 'aos';

const News = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, 
            easing: 'ease-in-out', 
            once: true, 
        });
    }, []);

    return (
        <section className="py-16 px-2">
            <div className=" mx-auto max-w-6xl">
                <header className="text-center mb-12">
                    <h3
                        className="text-gray-400 mb-2"
                        data-aos="fade-down"
                    >
                        Read Our Blog
                    </h3>
                    <h2
                        className="text-3xl font-bold text-white"
                        data-aos="fade-down"
                        data-aos-delay="200"
                    >
                        Read Daily News About<br />Startup Companies
                    </h2>
                </header>

                <article className="backdrop-blur-md bg-red-950/30 rounded-2xl border border-red-800/20 overflow-hidden">
                    <div className="grid md:grid-cols-2 items-center gap-0">
                        <figure
                            className="relative ms-6 my-8"
                            data-aos="fade-down"
                            data-aos-delay="400"
                        >
                            <img
                                src={news}
                                alt="Blog post"
                                className="object-cover rounded-lg"
                                style={{ width: "90%", height: "280px" }}
                            />
                        </figure>

                        <div className="p-6 space-y-4 lg:ps-0 me-0">
                            <header>
                                <h3
                                    className="text-2xl font-bold text-white"
                                    data-aos="fade-down"
                                    data-aos-delay="600"
                                >
                                    Not Another Framework
                                </h3>
                            </header>
                            <p
                                className="text-gray-300"
                                data-aos="fade-down"
                                data-aos-delay="800"
                            >
                                We brought all the Remix goodies over to React Router and made improvements in the process.
                                Now it&apos;s time to bring those improved APIs back over to Remix where they started!
                            </p>
                            <footer className="flex justify-between items-center pt-12">
                                <ul className="space-y-2">
                                    {["Collaboration Tools", "Collaboration Tools"].map((item, index) => (
                                        <li key={index} className="flex items-center gap-1 text-gray-300">
                                            <span className="h-2 w-2 rounded-full bg-red-500" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="text-red-500 flex items-center justify-center w-10 h-10 rounded-full bg-white border border-red-500 hover:bg-red-900/50 transition-all">
                                    <FaArrowRight className="w-6 h-6 -rotate-45" />
                                </div>
                            </footer>
                        </div>
                    </div>
                </article>
            </div>

            <div className="flex justify-center items-center pt-4">
                <button
                    className="px-4 py-2 border border-slate-100 rounded-lg text-white hover:bg-red-900/50 transition-colors"
                    data-aos="fade-down"
                    data-aos-delay="1000"
                >
                    Read more
                </button>
            </div>
        </section>
    );
};

export default News;


