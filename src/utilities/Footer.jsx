import { FaFacebookF, FaInstagram, FaGithub } from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons/ai';
import { useEffect } from "react";
import AOS from 'aos';

const Footer = () => {
    const footerLinks = {
        Company: ['About', 'Services', 'Works', 'Career'],
        Help: ['Customer support', 'Terms & Conditions', 'Privacy Policy'],
        Resources: ['Free ebooks', 'Development Tutorial', 'How to - Blog', 'Career']
    };

    useEffect(() => {
        AOS.init({
            duration: 1000, 
            easing: 'ease-in-out', 
            once: true, 
        });
    }, []);

    return (
        <footer className="py-16 px-16">
            <div className=" mx-auto max-w-6xl">
                
                {/* Newsletter */}
                <div 
                    className="backdrop-blur-md bg-red-950/30 rounded-2xl p-6 border border-red-800/20 mb-16"
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                >
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <div>
                            <h3 className="font-semibold text-white">Newsletter</h3>
                            <p className="text-gray-400">Be the first one to know about insights, technologies and innovations.</p>
                        </div>
                        <button className="bg-red-700 hover:bg-red-600 text-white px-6 py-2 rounded-lg transition-colors">
                            Subscribe
                        </button>
                    </div>
                </div>

                {/* Footer Links */}
                <div 
                    className="grid md:grid-cols-3 gap-12 mb-12 justify-items-center"
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                >
                    {Object.entries(footerLinks).map(([category, links]) => (
                        <div key={category} className="text-center md:text-left">
                        <h3 className="font-semibold text-white mb-4 ">{category}</h3>
                            <ul className="space-y-2">
                                {links.map((link) => (
                                    <li key={link}>
                                        <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* CopyRight Text */}
                <div 
                    className="flex flex-col md:flex-row justify-between items-center pt-8"
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                >
                    <p className="text-gray-400 text-sm  whitespace-nowrap">
                        © Copyright 2024. All Rights Reserved By Redift
                    </p>
                    <div className="flex gap-4 mt-4 md:mt-0">
                        <a href="#" className="bg-red-700 text-white w-8 h-8 flex justify-center items-center rounded-full hover:bg-red-600 transition-colors">
                            <AiOutlineTwitter size={20} />
                        </a>
                        <a href="#" className="bg-red-700 text-white w-8 h-8 flex justify-center items-center rounded-full hover:bg-red-600 transition-colors">
                            <FaFacebookF size={20} />
                        </a>
                        <a href="#" className="bg-red-700 text-white w-8 h-8 flex justify-center items-center rounded-full hover:bg-red-600 transition-colors">
                            <FaInstagram size={20} />
                        </a>
                        <a href="#" className="bg-red-700 text-white w-8 h-8 flex justify-center items-center rounded-full hover:bg-red-600 transition-colors">
                            <FaGithub size={20} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
