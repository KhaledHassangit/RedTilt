import { FaUsers } from 'react-icons/fa';
import { FiEye, FiTrendingUp } from 'react-icons/fi';
import { BiDollar } from 'react-icons/bi';

// eslint-disable-next-line react/prop-types
const DecorativeRings = ({ dir }) => {
    const isLeft = dir === "left";
    const maskDirection = isLeft ? "to right" : "to left";

    const insets = isLeft ? [60, 64, 68, 72] : [46, 50, 54, 58]; 

    return (
        <div
            className={`absolute ${isLeft ? "left-36" : "right-36"} top-44 flex items-center justify-center`}
            style={{ width: "256px", height: "256px" }}
        >
            <div className="relative">
                {insets.map((inset, index) => (
                    <div
                        key={index}
                        className="absolute rounded-full border border-dashed border-red-900/60 animate-pulse"
                        style={{
                            inset: `-${inset}px`,
                            maskImage: `linear-gradient(${maskDirection}, black 50%, transparent 100%)`,
                            WebkitMaskImage: `linear-gradient(${maskDirection}, black 50%, transparent 100%)`,
                        }}
                    />
                ))}

                {isLeft ? (
                    <div className="bg-red-900/20 p-4 rounded-full backdrop-blur-sm hidden lg:block">
                        <FaUsers className="h-8 w-8" />
                    </div>
                ) : (
                    <div className="flex items-center justify-center">
                        <div className="relative grid grid-cols-2 gap-4">
                            <div className="bg-red-900/20 p-2 rounded-full backdrop-blur-sm col-span-2 justify-self-center hidden lg:flex">
                                <FiEye className="h-4 w-4 text-[#a1a1aa] font-bold" />
                            </div>
                            <div className="bg-red-900/20 p-2 w-10 h-10 rounded-full backdrop-blur-sm flex items-center justify-center  ">
                                <FiTrendingUp className="h-10 w-10 text-white font-bold" />
                            </div>
                            <div className="bg-red-900/20 p-0 w-6 h-6 rounded-full backdrop-blur-sm flex items-center justify-center ">
                                <BiDollar className="h-3 w-3 text-[#a1a1aa] font-bold" />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default DecorativeRings;
