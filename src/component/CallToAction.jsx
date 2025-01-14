import React from "react";
import { mobileimg } from "../assets/index";

const CallToAction = () => {
  return (
    <div className="py-10">
      <div className="flex flex-row justify-center">
        <div className="">
          <img className="h-72 w-96" src={mobileimg} alt="" />
        </div>
        <div className="p-5">
          <p className="font-bold text-4xl w-96 mt-3">
            Start Organizing Your Life Today
          </p>
          <p className="text-gray-500 mt-5 ">
            Join us now and transform your productivity with our intuitive to-do
            <br />
            list platform!
          </p>

          <div className="flex my-5  gap-2">
            <button className="px-6 py-3 bg-[#ff5166]  rounded-sm text-white">
              Sign Up
            </button>
            <button className="px-6 py-3 bg-white text-red-500 border border-[#FF3E54] rounded-sm hover:bg-gray-100">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
