import React from "react";
import { features } from "../constants/index";

const Features = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl text-center font-bold text-gray-700 mb-10">
          Transform Your Productivity with Our <br />
          Innovative To-Do List Features
        </h2>
        <div className="mt-3 grid gap-8 m-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className="relative p-6 bg-[#F7F7F7] rounded-md shadow-md h-72 w-full"
            >
              <div className="flex items-center justify-center mb-4 bg-white w-12 h-12 rounded-md">
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="w-6 h-6 text-red-500"
                />
              </div>

              <span className="absolute top-4 right-4 text-gray-300 text-4xl font-bold">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="text-xl font-semibold text-gray-800">
                {feature.title}
              </h3>
              <hr className="mt-3 bg-red-400 h-1 w-8/12 rounded-full" />
              <p className="mt-7 text-gray-700 font-medium">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
