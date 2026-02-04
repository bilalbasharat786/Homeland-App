import React from "react";
import Navbar from "../components/Navbar";
import OurAgents from "../components/OurAgents";

const Contact = () => {
  return (
    <div className="w-full bg-white">
      <Navbar />
      <div
        className="relative h-[80vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop')`,
        }}
      >
        <h1 className="text-white text-5xl md:text-7xl font-medium tracking-[0.2em] uppercase">
          Contact Us
        </h1>
      </div>

      <section className="w-full bg-gray-50 py-20 px-6 md:px-12">
        <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 shadow-sm">
          <h2 className="text-2xl font-bold text-[#2C3E50] uppercase mb-8">
            Get In Touch
          </h2>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-xs font-bold text-gray-400 uppercase block mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 p-3 outline-none focus:border-[#83b735] transition-colors"
                />
              </div>
              <div>
                <label className="text-xs font-bold text-gray-400 uppercase block mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full border border-gray-300 p-3 outline-none focus:border-[#83b735] transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-gray-400 uppercase block mb-2">
                Subject
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 p-3 outline-none focus:border-[#83b735] transition-colors"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-gray-400 uppercase block mb-2">
                Message
              </label>
              <textarea
                rows="6"
                className="w-full border border-gray-300 p-3 outline-none focus:border-[#83b735] transition-colors resize-none"
              ></textarea>
            </div>

            <button className="bg-[#83b735] text-white px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-black transition-colors">
              Send Message
            </button>
          </form>
        </div>
      </section>
      <OurAgents />
    </div>
  );
};

export default Contact;
