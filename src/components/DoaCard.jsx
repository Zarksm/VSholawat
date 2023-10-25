import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const DoaCard = ({ doa, doanya }) => {
    const [isActive, setIsActive] = useState(false);

    const toggleAccordion = () => {
        setIsActive(!isActive);
    };

    return (
        <>
            <div className="w-full flex justify-center">
                <div className="mb-4 w-[700px]">
                    <div className={`p-4 cursor-pointer flex justify-between items-center transition-colors rounded-lg shadow-xl ${isActive ? "bg-greend text-white" : "bg-primary text-white hover:bg-greend"}`}
                        onClick={toggleAccordion}>
                        <div className="font-Quisand">{doa}</div>
                        <div>
                            {isActive ? <FiChevronUp /> : <FiChevronDown />}
                        </div>
                    </div>
                    <div className={`p-4 bg-primary rounded-lg mt-3 ${isActive ? "block" : "hidden"}`}>

                        {doanya.map((item, index) => (
                            <div key={index}>
                                <p className="text-right font-Sche text-2xl py-4 text-white leading-relaxed">{item.arab}</p>
                                <p className="font-Quisand text-white border-b py-2">{item.latin}</p>
                                <p className="font-Quisand text-sm py-2 text-gray-400">{item.id}</p>
                            </div>
                        ))}

                    </div>
                </div>
            </div >
        </>
    );
};

export default DoaCard;
