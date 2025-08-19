import React from "react";
import PopularDestination from "../Components/PopularDestination";
import Services from "../Components/Services";
import Clients from "../Components/Clients";
import Footer from "../Components/Footer";
import { motion } from "motion/react";
import video from "../assets/video.mp4";
const Home = () => {
  return (
    <>
      <div className="relative h-screen bg-cover bg-center z-0">
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          src={video}
          autoPlay
          muted
          loop
          playsInline
        />
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 1.5 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="absolute inset-0 bg-opacity-50 flex flex-col items-center justify-center z-10"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Explore the World with us
          </h1>
          <p className="text-lg md:text-2xl text-white mb-8">
            Discover amazing places at exclucive deals
          </p>
          <button
            onClick={() => (window.location.href = "#popular")}
            className="border text-white px-6 py-2 rounded-full text-lg md:text-xl hover:bg-blue-500 transform
        transition duration-300 hover:scale-105 "
          >
            Get Started
          </button>
        </motion.div>
      </div>
      <PopularDestination />
      <Services />
      <Clients />
    </>
  );
};

export default Home;
