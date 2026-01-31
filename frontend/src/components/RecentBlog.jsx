import React from 'react';
import house4 from '../assets/house4.jpg';
import house2 from '../assets/house2.jpg';
import img2 from '../assets/hero_bg_2.jpg';

const RecentBlog = () => {
  const blogs = [
    {
      id: 1,
      image: house4,
      date: "JAN 20TH, 2019",
      title: "Art Gossip by Mike Charles",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias enim, ipsa exercitationem veniam quae sunt."
    },
    {
      id: 2,
      image: house2, 
      date: "JAN 20TH, 2019",
      title: "Art Gossip by Mike Charles",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias enim, ipsa exercitationem veniam quae sunt."
    },
    {
      id: 3,
      image: img2, 
      date: "JAN 20TH, 2019",
      title: "Art Gossip by Mike Charles",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias enim, ipsa exercitationem veniam quae sunt."
    }
  ];

  return (
    <section className="w-full bg-white py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2C3E50] mb-6 uppercase tracking-widest">
            Recent Blog
          </h2>
          <p className="text-gray-500 text-sm md:text-base leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis maiores quisquam saepe architecto error corporis aliquam. Cum ipsam a consectetur aut sunt sint animi, pariatur corporis, eaque, deleniti cupiditate officia.
          </p>
        </div>

        {/* --- BLOG GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div key={blog.id} className="bg-white overflow-hidden group cursor-pointer">
              
              {/* Image */}
              <div className="relative h-64 overflow-hidden mb-6">
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="px-2">
                <span className="text-gray-400 text-[11px] font-bold tracking-widest uppercase block mb-2">
                  {blog.date}
                </span>
                
                <h3 className="text-xl font-medium text-[#2C3E50] mb-4 hover:text-[#83b735] transition-colors">
                  {blog.title}
                </h3>
                
                <p className="text-gray-500 text-sm leading-relaxed">
                  {blog.desc}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default RecentBlog;