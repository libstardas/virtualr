import React from "react";
import { FaContao, FaEnvelope, FaMapMarkedAlt, FaPhone } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import { motion } from "motion/react";
const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "9fa62623-4081-48e5-a722-57abac1d7ffe");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("form submitted successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message);
      setResult("");
    }
  };

  return (
    <div className="bg-gray-100">
      <div
        className="relative h-screen bg-cover bg-center "
        style={{ backgroundImage: "url('../images/selapass.jpg')" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 1.5 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="absolute inset-0 bg-opacity-50 flex flex-col items-center justify-center"
        >
          <h4 className="text-4xl md:text-6xl font-bold text-blue-100 mb-4">
            Contact
          </h4>
        </motion.div>
      </div>
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-4">Contact Details</h3>
            <div className="flex items-center mb-4">
              <FaEnvelope className=" text-blue-500 mr-2" />
              <p>Ojaantricjajabor@gmail.com</p>
            </div>
            <div className="flex items-center mb-4">
              <FaPhone className="text-blue-500 mr-2" />
              <p>6002769757</p>
            </div>
            <div className="flex text-center mb-4">
              <FaMapMarkedAlt className="text-blue-500 mr-2" />
              <p>123 Travel St, city, Country</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className=" text-xl font-bold mb-4">Get in touch</h3>
            <form onSubmit={onSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="Enter Name"
                  name="name"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full border border-gray-300 p-2 rounded"
                  placeholder="Enter Email"
                  name="email"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Message</label>
                <textarea
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="Write message"
                  name="message"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="py-2 px-4 bg-blue-500 text-white rounded "
              >
                {result ? result : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
