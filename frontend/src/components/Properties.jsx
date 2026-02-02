import React from "react";
import { MapPin, Heart, LayoutGrid, List, ChevronDown } from "lucide-react";
import img1 from "../assets/hero_bg_1.jpg";
import house2 from "../assets/house2.jpg";
import img2 from "../assets/hero_bg_2.jpg";
import house4 from "../assets/house4.jpg";
import house5 from "../assets/house5.jpg";
import house6 from "../assets/house6.jpg";
import house7 from "../assets/house7.jpg";
import house8 from "../assets/house8.jpg";

const Properties = () => {
  const properties = [
    {
      id: 1,
      image: img1,
      tags: [
        { text: "SALE", color: "bg-red-500" },
        { text: "RENT", color: "bg-green-500" },
      ],
      price: "$2,265,500",
      address: "625 S. Berendo St",
      location: "625 S. Berendo St Unit 607 Los Angeles, CA 90005",
      beds: "2+",
      baths: "2",
      sqft: "7,000",
      type: "Condo",
    },
    {
      id: 2,
      image: house2,
      tags: [
        { text: "SALE", color: "bg-red-500" },
        { text: "RENT", color: "bg-green-500" },
      ],
      price: "$2,265,500",
      address: "871 Crenshaw Blvd",
      location: "1 New York Ave, Warners Bay, NSW 2282",
      beds: "2+",
      baths: "2",
      sqft: "1,620",
      type: "House",
    },
    {
      id: 3,
      image: img2,
      tags: [{ text: "LEASE", color: "bg-blue-400" }],
      price: "$2,265,500",
      address: "853 S Lucerne Blvd",
      location: "853 S Lucerne Blvd Unit 101 Los Angeles, CA 90005",
      beds: "2+",
      baths: "2",
      sqft: "5,500",
      type: "Villa",
    },
    {
      id: 1,
      image: house4,
      tags: [
        { text: "SALE", color: "bg-red-500" },
        { text: "RENT", color: "bg-green-500" },
      ],
      price: "$2,265,500",
      address: "625 S. Berendo St",
      location: "625 S. Berendo St Unit 607 Los Angeles, CA 90005",
      beds: "2+",
      baths: "2",
      sqft: "7,000",
      type: "Condo",
    },
    {
      id: 2,
      image: house5,
      tags: [
        { text: "SALE", color: "bg-red-500" },
        { text: "RENT", color: "bg-green-500" },
      ],
      price: "$2,265,500",
      address: "871 Crenshaw Blvd",
      location: "1 New York Ave, Warners Bay, NSW 2282",
      beds: "2+",
      baths: "2",
      sqft: "1,620",
      type: "House",
    },
    {
      id: 3,
      image: house6,
      tags: [{ text: "LEASE", color: "bg-blue-400" }],
      price: "$2,265,500",
      address: "853 S Lucerne Blvd",
      location: "853 S Lucerne Blvd Unit 101 Los Angeles, CA 90005",
      beds: "2+",
      baths: "2",
      sqft: "5,500",
      type: "Villa",
    },
    {
      id: 1,
      image: house7,
      tags: [
        { text: "SALE", color: "bg-red-500" },
        { text: "RENT", color: "bg-green-500" },
      ],
      price: "$2,265,500",
      address: "625 S. Berendo St",
      location: "625 S. Berendo St Unit 607 Los Angeles, CA 90005",
      beds: "2+",
      baths: "2",
      sqft: "7,000",
      type: "Condo",
    },
    {
      id: 2,
      image: house8,
      tags: [
        { text: "SALE", color: "bg-red-500" },
        { text: "RENT", color: "bg-green-500" },
      ],
      price: "$2,265,500",
      address: "871 Crenshaw Blvd",
      location: "1 New York Ave, Warners Bay, NSW 2282",
      beds: "2+",
      baths: "2",
      sqft: "1,620",
      type: "House",
    },
    {
      id: 3,
      image: img1,
      tags: [{ text: "LEASE", color: "bg-blue-400" }],
      price: "$2,265,500",
      address: "853 S Lucerne Blvd",
      location: "853 S Lucerne Blvd Unit 101 Los Angeles, CA 90005",
      beds: "2+",
      baths: "2",
      sqft: "5,500",
      type: "Villa",
    },
  ];

  return (
    <section className="w-full bg-gray-50 py-16 px-4 md:px-12">
      <div className="max-w-7xl mx-auto -mt-24 relative z-20 mb-12">
        <div className="bg-[#2C3E50] p-6 rounded-md shadow-lg flex flex-col md:flex-row gap-4 items-end">
          <div className="w-full">
            <label className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-2 block">
              Listing Types
            </label>
            <div className="relative">
              <select className="w-full p-3 text-gray-700 bg-white rounded-sm outline-none appearance-none cursor-pointer">
                <option>Condo</option>
                <option>Commercial</option>
                <option>Land</option>
              </select>
              <ChevronDown
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                size={16}
              />
            </div>
          </div>
          <div className="w-full">
            <label className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-2 block">
              Offer Type
            </label>
            <div className="relative">
              <select className="w-full p-3 text-gray-700 bg-white rounded-sm outline-none appearance-none cursor-pointer">
                <option>For Sale</option>
                <option>For Rent</option>
                <option>Lease</option>
              </select>
              <ChevronDown
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                size={16}
              />
            </div>
          </div>
          <div className="w-full">
            <label className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-2 block">
              Select City
            </label>
            <div className="relative">
              <select className="w-full p-3 text-gray-700 bg-white rounded-sm outline-none appearance-none cursor-pointer">
                <option>New York</option>
                <option>Los Angeles</option>
                <option>Chicago</option>
              </select>
              <ChevronDown
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                size={16}
              />
            </div>
          </div>
          <div className="w-full">
            <button className="w-full bg-[#83b735] hover:bg-[#7dae32] text-white font-medium py-3 rounded-sm transition-colors duration-300">
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <div className="flex gap-2">
          <button className="p-2 text-gray-800 hover:text-green-600">
            <LayoutGrid size={24} />
          </button>
          <button className="p-2 text-gray-400 hover:text-green-600">
            <List size={24} />
          </button>
        </div>
        <div className="flex gap-4 text-sm text-gray-500">
          <span>All</span>
          <span>Rent</span>
          <span>Sale</span>
        </div>
        <div>
          <select className="border border-gray-300 rounded-sm p-2 text-sm text-gray-600 outline-none">
            <option>Sort by</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
        </div>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {properties.map((property) => (
          <div
            key={property.id}
            className="bg-white rounded-md shadow-sm hover:shadow-xl transition-shadow duration-300 group overflow-hidden"
          >
            <div className="relative h-64 overflow-hidden">
              <img
                src={property.image}
                alt={property.address}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute top-4 left-4 flex flex-col gap-1">
                {property.tags.map((tag, index) => (
                  <span
                    key={index}
                    className={`${tag.color} text-white text-[10px] font-bold px-2 py-1 rounded-sm uppercase`}
                  >
                    {tag.text}
                  </span>
                ))}
              </div>
              <div className="absolute bottom-4 right-4 bg-white p-2 rounded-full shadow-md cursor-pointer hover:bg-green-500 hover:text-white transition-colors">
                <Heart size={18} />
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-medium text-gray-800 mb-2">
                {property.address}
              </h3>
              <div className="flex items-start gap-1 text-gray-400 text-sm mb-4">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <p>{property.location}</p>
              </div>
              <p className="text-2xl font-bold text-[#83b735] mb-4">
                {property.price}
              </p>
              <div className="flex items-center justify-between border-t border-gray-100 pt-4 text-gray-500 text-sm">
                <div>
                  <span className="block font-bold text-gray-800 text-lg">
                    {property.beds}
                  </span>
                  <span className="text-xs uppercase tracking-wide">Beds</span>
                </div>
                <div>
                  <span className="block font-bold text-gray-800 text-lg">
                    {property.baths}
                  </span>
                  <span className="text-xs uppercase tracking-wide">Baths</span>
                </div>
                <div>
                  <span className="block font-bold text-gray-800 text-lg">
                    {property.sqft}
                  </span>
                  <span className="text-xs uppercase tracking-wide">Sq Ft</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="max-w-7xl mx-auto flex justify-center items-center mt-16 gap-2">
        <button className="w-10 h-10 flex items-center justify-center rounded-full bg-[#83b735] text-white font-medium shadow-sm transition-colors">
          1
        </button>
        <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-gray-600 border border-gray-200 hover:bg-gray-50 transition-colors">
          2
        </button>
        <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-gray-600 border border-gray-200 hover:bg-gray-50 transition-colors">
          3
        </button>
        <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-gray-600 border border-gray-200 hover:bg-gray-50 transition-colors">
          4
        </button>
        <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-gray-600 border border-gray-200 hover:bg-gray-50 transition-colors">
          5
        </button>
        <span className="text-gray-400 px-2">...</span>
        <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-gray-600 border border-gray-200 hover:bg-gray-50 transition-colors">
          10
        </button>
      </div>
    </section>
  );
};

export default Properties;
