import React, { useState } from "react";

const Modal = ({ closeModal }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    language: [],
    email: "",
    termsAccepted: false,
  });

  const [showThankYouModal, setShowThankYouModal] = useState(false); // State to control Thank You Modal visibility
  const [showFormModal, setShowFormModal] = useState(true); // State to control Form Modal visibility

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox" && name === "language") {
      setFormData((prevData) => ({
        ...prevData,
        [name]: checked
          ? [...prevData[name], value]
          : prevData[name].filter((lang) => lang !== value),
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: type === "checkbox" ? checked : value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    //setData([...data, formData]);
    setShowFormModal(false); // Close the form modal
    setShowThankYouModal(true); // Show the "Thank You" modal
  };

  const closeThankYouModal = () => {
    setShowThankYouModal(false); // Close the Thank You modal
    closeModal(); // Close the original form modal
  };

  return (
    <div>
      {/* Main Form Modal */}
      {showFormModal && (
        <div className="fixed inset-0 z-20 flex items-center justify-center p-6 bg-gray-600 bg-opacity-50">
          <div className="bg-white p-6 sm:p-8 md:p-10 rounded-lg shadow-lg w-full sm:w-4/5 md:w-3/5 lg:w-2/5 relative">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-xl"
            >
              &times;
            </button>
            <h2 className="text-2xl md:text-3xl font-medium mb-2">
              Get Started Today!
            </h2>
            <p className="mb-6 text-sm sm:text-xs font-light text-gray-800">
              Fill in your details and take control of your tasks.
            </p>
            <form onSubmit={handleSubmit}>
              <div className="grid gap-4 sm:gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div>
                    <label
                      className="block mb-2 text-md font-medium sm:text-xs md:text-sm"
                      htmlFor="firstName"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      placeholder="Enter your first name"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full sm:w-3/4 md:w-3/4 lg:w-full border rounded-md p-2 bg-[#FFDEE287] text-sm sm:text-xs md:text-sm"
                      required
                    />
                  </div>
                  <div>
                    <label
                      className="block mb-2 text-md font-medium sm:text-xs md:text-sm"
                      htmlFor="lastName"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      placeholder="Enter your last name"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full sm:w-3/4 md:w-3/4 lg:w-full border rounded-md p-2 bg-[#FFDEE287] text-sm sm:text-xs md:text-sm"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block mb-2 text-md font-medium sm:text-xs md:text-sm">
                    Gender
                  </label>
                  <div className="flex items-center space-x-4">
                    <label className="flex items-center text-sm sm:text-xs md:text-sm">
                      <input
                        type="radio"
                        name="gender"
                        value="male"
                        checked={formData.gender === "male"}
                        onChange={handleChange}
                        className="mr-2 w-4 h-4"
                      />
                      Male
                    </label>
                    <label className="flex items-center text-sm sm:text-xs md:text-sm">
                      <input
                        type="radio"
                        name="gender"
                        value="female"
                        checked={formData.gender === "female"}
                        onChange={handleChange}
                        className="mr-2 w-4 h-4"
                      />
                      Female
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block mb-2 text-md font-medium sm:text-xs md:text-sm">
                    Language
                  </label>
                  <div className="flex flex-col space-y-2">
                    <label className="flex items-center text-sm sm:text-xs md:text-sm">
                      <input
                        type="checkbox"
                        name="language"
                        value="english"
                        checked={formData.language.includes("english")}
                        onChange={handleChange}
                        className="mr-2 w-4 h-4"
                      />
                      English
                    </label>
                    <label className="flex items-center text-sm sm:text-xs md:text-sm">
                      <input
                        type="checkbox"
                        name="language"
                        value="hindi"
                        checked={formData.language.includes("hindi")}
                        onChange={handleChange}
                        className="mr-2 w-4 h-4"
                      />
                      Hindi
                    </label>
                    <label className="flex items-center text-sm sm:text-xs md:text-sm">
                      <input
                        type="checkbox"
                        name="language"
                        value="marathi"
                        checked={formData.language.includes("marathi")}
                        onChange={handleChange}
                        className="mr-2 w-4 h-4"
                      />
                      Marathi
                    </label>
                  </div>
                </div>

                <div>
                  <label
                    className="block mb-2 text-md font-medium sm:text-xs md:text-sm"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full sm:w-3/4 md:w-3/4 lg:w-full border rounded-md p-2 bg-[#FFDEE287] text-sm sm:text-xs md:text-sm"
                    required
                  />
                </div>

                <div>
                  <label className="flex items-center text-sm sm:text-xs md:text-sm">
                    <input
                      type="checkbox"
                      name="termsAccepted"
                      checked={formData.termsAccepted}
                      onChange={handleChange}
                      className="mr-2 w-4 h-4"
                    />
                    I agree to the
                    <span className="text-[#FF3E54] ml-1">
                      terms and conditions
                    </span>
                  </label>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full px-6 py-3 text-lg sm:text-base md:text-lg text-white bg-red-500 rounded-xl hover:bg-red-600"
                  >
                    Done
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Thank You Modal */}
      {showThankYouModal && (
        <div className="fixed inset-0 z-30 flex items-center justify-center p-6 bg-gray-600 bg-opacity-50">
          <div className="bg-white p-6 sm:p-8 md:p-10 rounded-lg shadow-lg w-full sm:w-2/5 md:w-2/5 lg:w-1/4 relative text-center">
            <div className="w-12 h-12 rounded-full flex items-center justify-center text-white text-2xl bg-red-500 mx-auto mb-4">
              ❤️
            </div>
            <h2 className="text-2xl md:text-3xl font-medium mb-2">
              Thank You for Connecting with Us!
            </h2>
            <p className="text-lg sm:text-base md:text-lg text-gray-800 mb-4">
              Our team will contact you shortly.
            </p>
            <button
              onClick={closeThankYouModal}
              className="w-full px-6 py-3 text-lg sm:text-base md:text-lg text-white bg-red-500 rounded-xl hover:bg-red-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
