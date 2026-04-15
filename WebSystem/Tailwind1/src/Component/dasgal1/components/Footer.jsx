import React from "react";

import { footerLinks } from "../data/data2";

const Footer = () => {
  return (
    <div className="w-full bg-indigo-700 text-white py-8 px-4 mt-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <h2 className="text-2xl font-bold"> FoodHouse</h2>
          <p className="text-sm text-indigo-100 mt-2">
            Menu  Gallery Booking Location
          </p>
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
        </div>
      </div>
    </div>
  );
};

export default Footer;