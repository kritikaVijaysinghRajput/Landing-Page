import React from "react";
import { testimonials } from "../assets/index";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const Testimonials = () => {
  return (
    <div className=" flex gap-2 md:ps-80  ">
      <div>
        <div className="flex flex-col gap-4 py-8">
          <p className="font-bold text-4xl ">Customer Testimonials</p>
          <p className="text-gray-400 text-md">
            This tool has transformed my productivity and organization!
          </p>
        </div>
        <div className="border-8 w-[20rem] overflow-x-visible p-4 flex flex-col relative gap-4 border-[#FF3E54]  ">
          <div className="bg-white items-center py-10 w-[70rem] p-8 flex  gap-4 ps-10">
            <div className="flex flex-col gap-4">
              <div>
                <p className="text-2xl  font-bold w-[25rem]">
                  Using this website has made my tasks so much easier! I can't
                  imagine my day without it."
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <div className="h-4 w-4 bg-[#FF3E54]"></div>
                <div className="bg-gray-700 w-8 h-[1px] -ms-2 "></div>
                <div className="flex flex-col">
                  <p className="font-bold">Sherri Cronin</p>
                  <p>Project Manager, TechCorp</p>
                </div>
              </div>
              <div className="flex gap-2 ">
                <button className="rounded-full border border-[#FF3E54] p-2">
                  <IoIosArrowBack />
                </button>
                <button className="rounded-full bg-[#FF3E54] p-2">
                  <IoIosArrowForward />
                </button>
              </div>
            </div>
            <div>
              <div className="border-8 border-[#FF3E54] border-l-0 p-2">
                <img
                  className="w-full h-full"
                  src={testimonials}
                  alt="testimonials"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
