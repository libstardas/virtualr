import React from "react";
const destinations = [
  {
    image: "../images/tawang.jpg",
    title: "Tawang Monastery, Arunachal Pradesh",
    description:
      "Tawang Monastery is indeed the largest monastery in India and the second largest in the world. Tawang Monastery is situated at an elevation of approximately 10,000 feet. Tawang Monastery, also known as Gaden Namgyal Lhatse, is the largest monastery in India and the second largest in the world, located in Arunachal Pradesh",
  },
  {
    image: "../images/sangti.webp",
    title: "Dirang, Arunachal Pradesh",
    description:
      "Sangti Valley, near Dirang in Arunachal Pradesh, is a serene and scenic destination known for its green meadows, flowing rivers, pine-covered hills, and rare black-necked cranes. Rich in Monpa culture, it’s perfect for peaceful getaways and nature exploration.",
  },
  {
    image: "../images/selapass.jpg",
    title: "Sela pass, Arunachal Pradesh",
    description:
      "Sela Pass, located at an altitude of around 13,700 feet in Arunachal Pradesh, is a high-altitude mountain pass offering stunning views of snow-clad peaks and the pristine Sela Lake. It’s a vital connection to Tawang and holds spiritual significance in Tibetan Buddhism, making it both a scenic and culturally rich destination.",
  },
  {
    image: "../images/tawanggate.jpg",
    title: "Tawang gate, Arunachal Pradesh",
    description:
      "Tawang Gate, also called the Tawang Arch, is the ceremonial entrance to Tawang town in Arunachal Pradesh. Adorned with traditional Buddhist designs, it symbolizes a warm welcome and cultural richness. Surrounded by scenic hills and forests, it offers stunning valley views and marks the beginning of Tawang’s serene and spiritual journey.",
  },
];
const PopularDestination = () => {
  return (
    <div id="popular" className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          PopularDestination
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {destinations.map((city, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
            >
              <img
                src={city.image}
                alt={city.title}
                className="w-full h-48 object-cover transform transition duration-300 hover:scale-110"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{city.title}</h3>
                <p className="text-gray-600">{city.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularDestination;
