import React from "react";
import { FaBus, FaHotel, FaConciergeBell } from "react-icons/fa";
import { GiCampingTent } from "react-icons/gi";
const services = [
  {
    icon: <FaBus className="text-4xl text-blue-500" />,
    title: "Bus Booking",
    description:
      "Premium service with modern coaches, lounges, electric buses, and strong safety measures",
  },
  {
    icon: <FaHotel className="text-4xl text-blue-500" />,
    title: "Hotel",
    description:
      "Booking hotel at best prices with our exclucive deal and discount.",
  },
  {
    icon: <GiCampingTent className="text-4xl text-blue-500" />,
    title: "camping",
    description:
      "Camping in Arunachal Pradesh is a serene escape—tents set among misty hills, dense forests, and flowing rivers, all under a sky full of stars. Nature at its purest.",
  },
  {
    icon: <FaConciergeBell className="text-4xl text-blue-500" />,
    title: "Concierge Services",
    description:
      "Get personalized concierge services for a seamless travel exprience",
  },
];
const Services = () => {
  return (
    <div className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md flex flex-col p-8 items-center cursor-pointer transform transition duration-300 hover:scale-110"
            >
              <div className=" mb-4">{service.icon}</div>

              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
