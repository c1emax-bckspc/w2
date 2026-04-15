import React from "react";
import { chefInfo } from "../data/data2";

const WhyChooseUs = () => {
    return (
        <div className="w-full py-12 px-4">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-3">Why Choose Us</h2>
                <p className="text-center text-gray-600 mb-10">
                    We help students learn with confidence
                </p>

                <div className="flex flex-col md:flex-row gap-6">
                    
                        <div
                            
                            className="flex-1 bg-indigo-50 rounded-2xl p-6 text-center"
                        >
                            <div className="text-5xl mb-4">{chefInfo.title}</div>
                            <h3 className="text-2xl font-semibold mb-3">{chefInfo.description}</h3>
                            <p className="text-gray-600">{chefInfo.image}</p>
                        </div>
                    
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;