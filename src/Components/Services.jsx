import { MdOutlineDeveloperBoard } from "react-icons/md";
import { TfiCloudUp } from "react-icons/tfi";
import { IoShieldCheckmark } from "react-icons/io5";
import { ImSphere } from "react-icons/im";
import { TiInputChecked } from "react-icons/ti";
import SectionTitle from "../utilities/SectionTitle";
import SuperPowers from "./SuperPowers";


const Services = () => {
    const services = [
        {
            id: '01',
            title: 'Development',
            icon: <MdOutlineDeveloperBoard className="w-6 h-6 text-white" />,
            items: [
                'UI/UX',
                'DevOps',
                'Web design',
                'Frontend dev',
                'Backend dev'
            ]
        },
        {
            id: '02',
            title: 'MSP',
            icon: <ImSphere className="w-6 h-6 text-white" />,
            items: [
                'Infrastructure management',
                'Managed Monitoring',
                'Business Continuity',
                'Managed Cyber'
            ]
        },
        {
            id: '03',
            title: 'Cloud',
            icon: <TfiCloudUp className="w-6 h-6 text-white" />,
            items: [
                'AWS',
                'AZURE',
                'Multi-Cloud',
                'SRE Strategy',
                'Server less',
                'Hybrid Strategy',
                'Containerisation'
            ]
        },
        {
            id: '04',
            title: 'Cyber',
            icon: <IoShieldCheckmark className="w-6 h-6 text-white" />,
            items: [
                'Cyber Audit',
                'Cyber governance',
                'Security as a service',
                'Penetration Testing'
            ]
        }
    ];



    return (
        <section className="min-h-screen  py-20">
            <div className="max-w-7xl mx-auto px-4">
                {/* What we offer section */}
                <div className="text-center mb-16">
                    <SectionTitle title="What we offer"/>
                    <div className="inline-block px-6 py-2 rounded-full bg-red-950/30 backdrop-blur-sm border border-red-900/20">
                        <p className="text-gray-300">Our Experts Will Help You In Following Fields</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32 ">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="relative p-6 rounded-2xl bg-gradient-to-br from-[#E21111]/80 to-[#2D0A0A]/60 backdrop-blur-sm border border-red-900/20 overflow-hidden group transition-all duration-500 hover:scale-105 hover:shadow-lg">
                            <span className="absolute -top-14 -left-4 text-[150px] font-bold text-stone-200 opacity-20 select-none">
                                {service.id}
                            </span>

                            <div className="relative z-10">
                                <div className="flex items-center gap-3 mb-6">
                                    {service.icon}
                                    <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                                </div>

                                <div className="relative mt-12 ml-10">
                                    <ul className="space-y-4  p-4 rounded-lg bg-gradient-to-br from-[#E21111]/40 to-[#2D0A0A]/40 backdrop-blur-sm border-l border-t border-red-900/20 shadow-[inset_1px_1px_1px_rgba(255,255,255,0.1)]">
                                        {service.items.map((item, index) => (
                                            <li key={index} className="flex items-center   font-bold" >
                                            <TiInputChecked  className="w-4 h-4 " />
                                                <span className=" text-gray-300  text-nowrap"style={{fontSize:"12px"}}>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/*  Superpowers section */}
                <SuperPowers/>
            </div>
        </section>
    );
};

export default Services;