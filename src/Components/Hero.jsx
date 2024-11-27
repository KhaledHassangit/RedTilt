import { FaPhoneAlt, FaLinode } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { TbBrandCloudflare } from "react-icons/tb";
import { SiGooglecloud, SiDigitalocean } from "react-icons/si";
import { TbBrandAzure } from "react-icons/tb";
import ScrollIndicator from "../utilities/ScrollIndicator";
import DecorativeRings from "../utilities/DecorativeRings";

const Hero = () => {
    const partners = [
        { name: 'DigitalOcean', logo: <SiDigitalocean /> },
        { name: 'Azure', logo: <TbBrandAzure /> },
        { name: 'GitHub', logo: <BsGithub /> },
        { name: 'Google Cloud', logo: <SiGooglecloud /> },
        { name: 'Linode', logo: <FaLinode /> },
        { name: 'Cloudflare', logo: <TbBrandCloudflare /> },
    ];

    return (
        <>
            <div className="hidden lg:block">
                <DecorativeRings dir="left" />
                <DecorativeRings dir="right" />
            </div>
            <main className="flex-grow flex flex-col items-center justify-center text-center pt-24">
                <section className="px-4 animate__animated animate__fadeIn animate__delay-1s">
                    <h1 className="text-3xl md:text-5xl font-bold" style={{ lineHeight: '3.5rem' }}>
                        From Concept to Code <br />
                        <span className="text-[#E72026]">We Make IT Happen</span>
                    </h1>
                    <p className="mt-4 text-lg max-w-2xl mx-auto animate__animated animate__fadeIn animate__delay-2s">
                        We help brands and B2B enterprises build amazing websites that
                        convert their visitors to paying customers.
                    </p>
                    <div className="flex justify-center items-center mt-6">
                        <button className="bg-gradient-to-b from-[#E21111] to-[#2D0A0A] px-6 py-3 text-lg font-semibold rounded-full shadow-[0_8px_12px_rgba(226,17,17,0.5)] hover:shadow-[0_15px_30px_5px_rgba(226,17,17,0.7)] transition-all transform hover:scale-105 flex items-center justify-center space-x-2">
                            <FaPhoneAlt className="text-white" />
                            <span className="text-white">Let’s have a call</span>
                        </button>
                    </div>
                </section>
                <ScrollIndicator className="opacity-0 animate__animated animate__fadeIn animate__delay-3s" />

                <section className="w-full">
                    <div className="py-16">
                        <h2 className="text-center text-md font-medium text-gray-400 mb-12">
                            TRUSTED BY OUR PARTNERS
                        </h2>
                        <div className="px-20 grid grid-cols-2  md:grid-cols-3 lg:grid-cols-6">
                            {partners.map((partner) => (
                                <div
                                    key={partner.name}
                                    className="flex flex-col items-center justify-center text-[#a1a1aa] text-3xl grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all transform hover:scale-110"
                                >
                                    <span>{partner.logo}</span>
                                    <p className="text-sm text-gray-400 mt-2">{partner.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default Hero;
