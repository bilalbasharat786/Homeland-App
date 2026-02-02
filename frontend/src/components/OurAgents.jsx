import React from "react";
import { Facebook, Twitter, Linkedin } from "lucide-react";

import agent1 from "../assets/person_1.jpg";
import agent2 from "../assets/person_2.jpg";
import agent3 from "../assets/person_3.jpg";

const OurAgents = () => {
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

  return (
    <section className="w-full bg-white py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2C3E50] mb-6 uppercase tracking-widest">
            Our Agents
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
  );
};

export default OurAgents;
