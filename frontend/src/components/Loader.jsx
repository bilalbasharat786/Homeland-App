import React from "react";
import loaderGif from "../assets/loader.gif";

const Loader = () => {
  return (
    <div className="fixed inset-0 z-[9999] bg-white flex items-center justify-center">
      <img src={loaderGif} alt="Loading..." className="w-20 h-20" />
    </div>
  );
};

export default Loader;
