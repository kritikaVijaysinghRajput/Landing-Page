import React, { useState } from "react";
import Navbar from "../component/Navbar";
import Hero from "../component/Hero";
import Features from "../component/Features";
import Testimonials from "../component/Testimonials";
import CallToAction from "../component/CallToAction";
import Footer from "../component/Footer";
import DataTable from "../component/DataTable";

const LandingPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [formData, setFormData] = useState([]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <div>
      <Navbar />
      <Hero
        openModal={openModal}
        formData={formData}
        setFormData={setFormData}
      />
      <Features />
      <Testimonials />
      <CallToAction />
      <DataTable formData={formData} />
      <Footer />

      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
          <div
            className="relative bg-white p-8 rounded-lg shadow-md w-full max-w-md"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-red-500 text-xl font-bold"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Welcome!</h2>
            <p className="text-gray-600">
              Start your journey with our todo app to stay organized and
              productive!
            </p>
            <button
              onClick={closeModal}
              className="mt-6 px-6 py-2 bg-red-500 text-white rounded-full hover:bg-red-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LandingPage;
