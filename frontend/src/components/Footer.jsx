import React from "react";
import { Facebook, Twitter, Instagram, Linkedin, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#333333] text-gray-400 py-16 px-6 md:px-12 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <h4 className="text-white text-sm font-bold uppercase tracking-widest mb-4">
              About Homeland
            </h4>
            <div className="w-8 h-0.5 bg-gray-500 mb-6"></div>
            <p className="text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe
              pariatur reprehenderit vero atque, consequatur id ratione, et non
              dignissimos culpa? Ut veritatis, quos illum totam quis blanditiis,
              minima minus odio!
            </p>
          </div>
          <div className="lg:col-span-2 grid grid-cols-2 gap-4">
            <div>
              <h4 className="text-white text-sm font-bold uppercase tracking-widest mb-4">
                Navigations
              </h4>
              <div className="w-8 h-0.5 bg-gray-500 mb-6"></div>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Buy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Rent
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Properties
                  </a>
                </li>
              </ul>
            </div>
            <div className="pt-12">
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-widest mb-4">
              Follow Us
            </h4>
            <div className="w-8 h-0.5 bg-gray-500 mb-6"></div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center text-sm">
          <p>
            Copyright ©2026 All rights reserved | This template is made with
            <Heart
              size={14}
              className="inline-block mx-1 text-red-500 fill-current"
            />
            by{" "}
            <a href="#" className="hover:text-white">
              Colorlib
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
