import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Navbar, Footer } from "../components";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-blue-100 font-sans dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-500">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="flex flex-col lg:flex-row items-center justify-between pt-28 pb-16 px-6 lg:px-20 text-center lg:text-left">
        <div className="lg:w-1/2" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 dark:text-gray-100 leading-tight">
            Manage Accounts Effortlessly & Securely
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            A powerful account management system built for speed, security, and
            simplicity. Handle user access, permissions, and data with
            confidence.
          </p>
          <div className="mt-8 space-x-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
              Get Started
            </button>
            <button className="border-2 border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400 px-6 py-3 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 transition">
              Learn More
            </button>
          </div>
        </div>

        <img
          src="https://cdn-icons-png.flaticon.com/512/942/942748.png"
          alt="Account management illustration"
          className="lg:w-1/2 w-3/4 mx-auto mt-10 lg:mt-0"
          data-aos="fade-left"
        />
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="py-20 px-6 lg:px-20 bg-white dark:bg-gray-900 text-center transition-colors duration-500"
      >
        <h3
          className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-12"
          data-aos="zoom-in"
        >
          Key Features
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            className="p-8 shadow-md rounded-2xl hover:shadow-xl transition bg-white dark:bg-gray-800"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="text-blue-600 dark:text-blue-400 text-4xl mb-4">
              👤
            </div>
            <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
              User Management
            </h4>
            <p className="text-gray-600 dark:text-gray-300">
              Users can easily view and edit their account information.
            </p>
          </div>
          <div
            className="p-8 shadow-md rounded-2xl hover:shadow-xl transition bg-white dark:bg-gray-800"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="text-blue-600 dark:text-blue-400 text-4xl mb-4">
              🔒
            </div>
            <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
              Secure Authentication
            </h4>
            <p className="text-gray-600 dark:text-gray-300">
              Only authorized users will able to access their account
              information.
            </p>
          </div>
          <div
            className="p-8 shadow-md rounded-2xl hover:shadow-xl transition bg-white dark:bg-gray-800"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="text-blue-600 dark:text-blue-400 text-4xl mb-4">
              ⚙️
            </div>
            <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
              Local Storage
            </h4>
            <p className="text-gray-600 dark:text-gray-300">
              All users data are stored in the local storage.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
