import React, { useState } from "react";
import {
  Card,
  Google,
  pintrest,
  twitch,
  youtube,
  facebook,
} from "../assets/index";
import Modal from "../modals/Modal";

const Hero = ({ formData, setFormData }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section className="py-10 bg-[#F7F7FB] px-6 relative">
      {isModalOpen && (
        <div className="absolute inset-0 bg-gray-600 bg-opacity-50 z-10"></div>
      )}

      <div className="text-center mb-10 mx-auto max-w-7xl">
        <h1 className="font-bold text-5xl text-gray-800">
          Simplify Your Life with Our <br /> Todo App
        </h1>
        <p className="mt-5 text-gray-600">
          Stay organized and boost your productivity with our intuitive todo
          website. <br /> Experience a modern approach to task management that
          fits your lifestyle.
        </p>
        <div className="mt-6 space-x-4">
          <button
            onClick={openModal}
            className="px-8 py-3 text-white bg-red-500 rounded-full hover:bg-red-600"
          >
            Get Started
          </button>
          <button className="px-8 py-3 text-red-500 border border-red-500 rounded-full hover:bg-red-500 hover:text-white">
            Learn More
          </button>
        </div>
      </div>

      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6 max-w-6xl ">
        <div className="bg-[#FF3E54] text-white p-8 rounded-2xl shadow-md flex-1">
          <div className="space-y-2 mb-6 m-3 ">
            <p className="text-white text-8xl opacity-50">Organize.</p>
            <p className="text-white text-7xl opacity-65 mt-2">Achieve.</p>
            <p className="text-white text-6xl opacity-85 mt-2">Relax.</p>
            <p className="text-white text-sm opacity-80 !mt-10 ">
              Turn clutter into clarity, chaos into control, and dreams into
              done. <br />
              bold visions into market success
            </p>
          </div>

          <div className="space-x-4 mt-14 mb-5">
            <button className="px-6 py-3 bg-white text-red-500 rounded-full hover:bg-gray-100">
              Get Started Today
            </button>
            <button className="px-6 py-3 bg-[#ff5166] rounded-full hover:bg-red-700">
              Discover Features
            </button>
          </div>
        </div>

        <div className="min-h-full">
          <img
            src={Card}
            alt="Person"
            className="w-80 h-[75vh] object-cover rounded-2xl"
          />
        </div>
      </div>

      <div className="mt-12 flex justify-center items-center space-x-28">
        <img src={Google} alt="Google" className="w-20 h-8" />
        <img src={facebook} alt="Facebook" className="w-20 h-6" />
        <img src={youtube} alt="YouTube" className="w-20 h-6" />
        <img src={pintrest} alt="Pinterest" className="w-20 h-6" />
        <img src={twitch} alt="Twitch" className="w-20 h-6" />
      </div>

      {isModalOpen && (
        <Modal
          closeModal={closeModal}
          formData={formData}
          setFormData={setFormData}
        />
      )}
    </section>
  );
};

export default Hero;
