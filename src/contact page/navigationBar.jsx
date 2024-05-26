import React, { useState } from 'react';

const Navbar = () => {

  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <nav className="fixed top-0 w-60% z-10 bg-white  py-4">
      <div className="max-w-7xl mx-auto px-4 flex justify-center">
        <a href="home" className="font-serif text-3xl text-black ease-in-out mr-6 ">
          Home
        </a>
        <a className="font-serif text-3xl  text-black  ease-in-out ml-6  mr-6" onClick={togglePopup}>
          Writings
        </a>
        <a href="contact" className="font-serif  text-black  ease-in-out ml-6  mr-6">
          <span className="text-3xl underline">Contact</span>
        </a>
        <a href="projects" className="font-serif text-3xl text-black   ease-in-out mx-6  mr-6">
          Projects
        </a>
        <a href="students" className="font-serif text-3xl  text-black  ease-in-out ml-6  mr-6">
          Students
        </a>
        <a href="" className="font-serif text-3xl text-black ease-in-out ml-6 mr-6">
          People’s Lab
        </a>
      </div>
      {showPopup && (
        <div className="  absolute top-16 flex justify-center">
          <div className="bg-zinc-300 border rounded shadow-lg p-2 ml-20">
            <a href="popular-media" className=" block text-black text-2xl mb-2 p-2 rounded hover:bg-white">Popular Media</a>
            <a href="academic" className="block text-black text-2xl mb-2 p-2 rounded hover:bg-white">Academic</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
