import React from "react";
import Navbar from "../components/Navbar";
import blogHeroImg from "../assets/hero_bg_2.jpg";
import blog1 from "../assets/house2.jpg";
import blog3 from "../assets/house4.jpg";
import blog4 from "../assets/house5.jpg";

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      image: blog1,
      date: "JAN 20TH, 2019",
      title: "Art Gossip by Mike Charles",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias enim, ipsa exercitationem veniam quae sunt.",
    },
    {
      id: 2,
      image: blog4,
      date: "JAN 20TH, 2019",
      title: "Art Gossip by Mike Charles",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
    {
      id: 3,
      image: blog3,
      date: "JAN 20TH, 2019",
      title: "Art Gossip by Mike Charles",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
    {
      id: 4,
      image: blog4,
      date: "JAN 20TH, 2019",
      title: "Art Gossip by Mike Charles",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
    {
      id: 5,
      image: blog3,
      date: "JAN 20TH, 2019",
      title: "Art Gossip by Mike Charles",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
    {
      id: 6,
      image: blog4,
      date: "JAN 20TH, 2019",
      title: "Art Gossip by Mike Charles",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
  ];

  return (
    <div className="w-full">
      <Navbar />
      <div
        className="relative h-[80vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${blogHeroImg})` }}
      >
        <h1 className="text-white text-5xl md:text-6xl font-medium tracking-[0.2em] uppercase">
          Our Blog
        </h1>
      </div>
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {blogPosts.map((post) => (
              <div key={post.id} className="group cursor-pointer">
                <div className="h-64 overflow-hidden mb-6">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="space-y-3">
                  <p className="text-gray-400 text-[11px] font-bold tracking-widest uppercase">
                    {post.date}
                  </p>
                  <h3 className="text-xl font-medium text-[#2C3E50] group-hover:text-[#83b735] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {post.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center items-center gap-2 mt-20">
            <button className="w-10 h-10 rounded-full bg-[#83b735] text-white flex items-center justify-center font-bold">
              1
            </button>
            <button className="w-10 h-10 rounded-full border border-gray-200 text-gray-600 hover:bg-gray-100 flex items-center justify-center transition-colors">
              2
            </button>
            <button className="w-10 h-10 rounded-full border border-gray-200 text-gray-600 hover:bg-gray-100 flex items-center justify-center transition-colors">
              3
            </button>
            <button className="w-10 h-10 rounded-full border border-gray-200 text-gray-600 hover:bg-gray-100 flex items-center justify-center transition-colors">
              4
            </button>
            <button className="w-10 h-10 rounded-full border border-gray-200 text-gray-600 hover:bg-gray-100 flex items-center justify-center transition-colors">
              5
            </button>
            <span className="text-gray-400 mx-1">...</span>
            <button className="w-10 h-10 rounded-full border border-gray-200 text-gray-600 hover:bg-gray-100 flex items-center justify-center transition-colors">
              10
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
