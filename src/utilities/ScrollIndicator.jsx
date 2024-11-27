import { useEffect, useState } from 'react';
import { CiDesktopMouse2 } from "react-icons/ci";
import { HiChevronDown } from "react-icons/hi";

const ScrollIndicator = () => {
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        setIsVisible(true);
    }, []);
    return (
        <div className="flex flex-col items-center gap-2 mt-12">
            <div className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                <div className="relative">
                    <CiDesktopMouse2 className="w-6 h-6 text-[#a1a1aa]" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2">
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center">
                <div className="h-24 w-[2px] relative overflow-hidden">
                    <div className={`h-full w-full bg-[#7e7e80] transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                        <div className="h-1/2 w-full bg-[#e6e4e4] absolute animate-lineMove"></div>
                    </div>
                </div>
                <div className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'} relative`}>
                    <HiChevronDown className="w-6 h-6 text-[#7e7e80] absolute left-1/2 transform -translate-x-1/2 bottom-[-10px] " />
                </div>
            </div>

        </div>
    );
};

export default ScrollIndicator;