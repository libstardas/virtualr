import React from "react";

const testimonials = [
  {
    name: "Bhupesh Mech",
    image: "/public/images/img1.jpg",
    text: "this travelling agency provided excellent services and helped us the perfect vacation",
    location: "Arunachal Pradesh, India",
  },
  {
    name: "Riki Nath",
    image: "/public/images/img2.jpg",
    text: "Amazing exprience! the tour guides were knowledgeable and the destination were breathable",
    location: "Tawang, Arunachal Pradesh",
  },
  {
    name: "Diya Rai",

    image: "/public/images/band.jpg",
    text: "Great coustomer service and fantastic travel packages. well definitely book with them",
    location: "Sela pass, Arunachal Pradesh ",
  },
];
const Clients = () => {
  return (
    <div className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          What Our Cients Say
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonials, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 text-center cursor-pointer transform transition duration-300 hover:scale-110"
            >
              <img
                src={testimonials.image}
                alt=""
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />

              <h3 className="text-xl font-bold mb-2">{testimonials.name}</h3>
              <p className="text-gray-600">{testimonials.location}</p>
              <p className="text-gray-600 italic">{testimonials.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;
