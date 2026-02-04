import React from "react";
import Navbar from "../components/Navbar";
import bgImageSrc from "../assets/hero_bg_2.jpg";
import teamImageSrc from "../assets/about.jpg";
import { Facebook, Twitter, Linkedin } from "lucide-react";

import agent1 from "../assets/person_1.jpg";
import agent2 from "../assets/person_2.jpg";
import agent3 from "../assets/person_3.jpg";
import agent4 from "../assets/aboutperson4.jpg";
import agent5 from "../assets/aboutperson5.jpg";

const AboutPage = () => {
  const agents = [
    {
      id: 1,
      name: "Megan Smith",
      role: "Real Estate Agent",
      image: agent1,
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi dolorem totam non quis facere blanditiis praesentium est.",
    },
    {
      id: 2,
      name: "Brooke Cagle",
      role: "Real Estate Agent",
      image: agent2,
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, cumque vitae voluptates culpa earum similique corrupti.",
    },
    {
      id: 3,
      name: "Philip Martin",
      role: "Real Estate Agent",
      image: agent3,
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores illo iusto, inventore, iure dolorum officiis modi.",
    },
  ];
  const agents2 = [
    {
      id: 4,
      name: "John Doe",
      role: "Real Estate Agent",
      image: agent4,
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi dolorem totam non quis facere blanditiis praesentium est.",
    },
    {
      id: 5,
      name: "Jane Smith",
      role: "Real Estate Agent",
      image: agent5,
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi dolorem totam non quis facere blanditiis praesentium est.",
    },
    {
      id: 6,
      name: "Emily Johnson",
      role: "Real Estate Agent",
      image: agent2,
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi dolorem totam non quis facere blanditiis praesentium est.",
    },
  ];
  return (
    <div className="w-full font-sans">
      <Navbar />
      <div className="relative w-full h-[60vh] md:h-[70vh]">
        <img
          src={bgImageSrc}
          alt="Homeland House"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold uppercase tracking-widest">
            About Homeland
          </h1>
        </div>
      </div>
      <div className="py-16 md:py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="w-full">
            <img
              src={teamImageSrc}
              alt="Our Company Team"
              className="w-full h-auto object-cover rounded shadow-sm"
            />
          </div>
          <div className="flex flex-col text-left">
            <h2 className="text-3xl font-bold text-black uppercase mb-4 tracking-wide">
              Our Company
            </h2>

            <p className="text-gray-500 mb-6 italic text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus in
              cum odio.
            </p>

            <p className="text-gray-500 mb-8 leading-relaxed">
              Illum repudiandae ratione facere explicabo. Consequatur dolor
              optio iusto, quos autem voluptate ea? Sunt laudantium fugiat,
              mollitia voluptate? Modi blanditiis veniam nesciunt architecto
              odit voluptatum impedit magnam itaque natus!
            </p>

            <div>
              <button className="border border-gray-400 text-gray-600 px-8 py-3 uppercase text-sm tracking-wider hover:bg-gray-800 hover:text-white transition duration-300 rounded-sm">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
      <section className="w-full bg-white py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2C3E50] mb-6 uppercase tracking-widest">
              LEADERSHIP
            </h2>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero
              magnam officiis ipsa eum pariatur labore fugit amet eaque iure
              vitae, repellendus laborum in modi reiciendis quis! Optio minima
              quibusdam, laboriosam.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {agents.map((agent) => (
              <div key={agent.id} className="group">
                <div className="mb-8 overflow-hidden rounded-sm">
                  <img
                    src={agent.image}
                    alt={agent.name}
                    className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="text-left">
                  <h3 className="text-2xl font-light text-[#2C3E50] mb-1">
                    {agent.name}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">{agent.role}</p>

                  <p className="text-gray-500 text-sm leading-relaxed mb-6">
                    {agent.desc}
                  </p>

                  <div className="flex gap-4 text-black">
                    <a
                      href="#"
                      className="hover:text-[#83b735] transition-colors"
                    >
                      <Facebook size={18} />
                    </a>
                    <a
                      href="#"
                      className="hover:text-[#83b735] transition-colors"
                    >
                      <Twitter size={18} />
                    </a>
                    <a
                      href="#"
                      className="hover:text-[#83b735] transition-colors"
                    >
                      <Linkedin size={18} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="w-full bg-gray-100 py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2C3E50] mb-6 uppercase tracking-widest">
              OUR AGENTS
            </h2>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero
              magnam officiis ipsa eum pariatur labore fugit amet eaque iure
              vitae, repellendus laborum in modi reiciendis quis! Optio minima
              quibusdam, laboriosam.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {agents2.map((agent) => (
              <div key={agent.id} className="group">
                <div className="mb-8 overflow-hidden rounded-sm">
                  <img
                    src={agent.image}
                    alt={agent.name}
                    className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="text-left">
                  <h3 className="text-2xl font-light text-[#2C3E50] mb-1">
                    {agent.name}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">{agent.role}</p>

                  <p className="text-gray-500 text-sm leading-relaxed mb-6">
                    {agent.desc}
                  </p>

                  <div className="flex gap-4 text-black">
                    <a
                      href="#"
                      className="hover:text-[#83b735] transition-colors"
                    >
                      <Facebook size={18} />
                    </a>
                    <a
                      href="#"
                      className="hover:text-[#83b735] transition-colors"
                    >
                      <Twitter size={18} />
                    </a>
                    <a
                      href="#"
                      className="hover:text-[#83b735] transition-colors"
                    >
                      <Linkedin size={18} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="py-20 px-6 md:px-12 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black uppercase tracking-widest mb-4">
            Frequently Ask Questions
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-16 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis
            maiores quisquam saepe architecto error corporis aliquam. Cum ipsam
            a consectetur aut sunt sint animi, pariatur corporis, eaque,
            deleniti cupiditate officia.
          </p>
          <div className="text-left space-y-6 max-w-2xl mx-auto">
            <div className="flex items-start gap-4 group cursor-pointer">
              <div className="mt-1 bg-gray-100 p-1 rounded-sm group-hover:bg-gray-200 transition-colors">
                <svg
                  className="w-4 h-4 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
              <span className="text-lg text-gray-800 font-medium">
                What is the name of your company
              </span>
            </div>
            <div className="flex items-start gap-4 group cursor-pointer border-t border-gray-50 pt-6">
              <div className="mt-1 bg-gray-100 p-1 rounded-sm group-hover:bg-gray-200 transition-colors">
                <svg
                  className="w-4 h-4 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
              <span className="text-lg text-gray-800 font-medium">
                How much pay for 3 months?
              </span>
            </div>
            <div className="flex items-start gap-4 group cursor-pointer border-t border-gray-50 pt-6">
              <div className="mt-1 bg-gray-100 p-1 rounded-sm group-hover:bg-gray-200 transition-colors">
                <svg
                  className="w-4 h-4 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
              <span className="text-lg text-gray-800 font-medium">
                Do I need to register?
              </span>
            </div>
            <div className="flex items-start gap-4 group cursor-pointer border-t border-gray-50 pt-6">
              <div className="mt-1 bg-gray-100 p-1 rounded-sm group-hover:bg-gray-200 transition-colors">
                <svg
                  className="w-4 h-4 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
              <span className="text-lg text-gray-800 font-medium">
                Who should I contact in case of support.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
