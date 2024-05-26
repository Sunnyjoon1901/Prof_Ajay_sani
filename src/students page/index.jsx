import React from 'react';
import Navbar from './navigationBar';
import KirtiImage from '../assets/kirti.png';
import SunnyImage from '../assets/Sunny.png';
import ParulImage from '../assets/Parul.png';

function Students() {
  return (
    <div>
      <Navbar />
      <div className="mt-20 flex justify-center">
        <p className="text-5xl text-zinc-600 font-Jost">________________   Doctoral Students  _______________</p>
      </div>
      <div className="mt-8 flex justify-center">
        <div className="flex flex-col items-center relative mx-4">
          <img src={KirtiImage} alt="Image 1" className="w-full hover:opacity-80 relative z--10" />
          <div className="absolute bottom-0 left-0 w-full h-full opacity-0 hover:opacity-90 transition-opacity duration-300">
            <div className="w-full h-2/6 bg-zinc-300 solid-opacity-80 absolute bottom-12 left-0 z-20 rounded-2xl">
              <div className="w-full h-4/6 absolute bottom-10 left-0 z-30">
                <p className="text-center text-2xl font-Jost z-40 absolute mb-4">Engineering rhizospheric microbiota through compost amendment for enhanced suppressiveness against pathogens</p>
              </div>
            </div>
          </div>
          <p className="text-center text-4xl mt-2 font-['Jost']">Kirti Singh</p>
        </div>
        <div className="flex flex-col items-center relative mx-4">
          <img src={SunnyImage} alt="Image 2" className="w-full hover:opacity-80 relative z--10" />
          <div className="absolute bottom-0 left-0 w-full h-full opacity-0 hover:opacity-90 transition-opacity duration-300">
            <div className="w-full h-2/6 bg-zinc-300 solid-opacity-80 absolute bottom-12 left-0 z-20 rounded-2xl">
              <div className="w-full h-4/6 absolute bottom-10 left-0 z-30">
                <p className="text-center text-2xl font-Jost z-40 absolute mb-4">Engineering rhizospheric microbiota through compost amendment for enhanced suppressiveness against pathogens</p>
              </div>
            </div>
          </div>
          <p className="text-center text-4xl mt-2 font-['Jost']">Sunny</p>
        </div>
        <div className="flex flex-col items-center relative mx-4">
          <img src={ParulImage} alt="Image 3" className="w-full hover:opacity-80 relative z--10" />
          <div className="absolute bottom-0 left-0 w-full h-full opacity-0 hover:opacity-90 transition-opacity duration-300">
            <div className="w-full h-2/6 bg-zinc-300 solid-opacity-80 absolute bottom-12 left-0 z-20 rounded-2xl">
              <div className="w-full h-4/6 absolute bottom-10 left-0 z-30">
                <p className="text-center text-2xl font-Jost z-40 absolute mb-4">Engineering rhizospheric microbiota through compost amendment for enhanced suppressiveness against pathogens</p>
              </div>
            </div>
          </div>
          <p className="text-center text-4xl mt-2 font-['Jost']">Parul Meel</p>
        </div>
      </div>
    </div>
  );
}

export default Students;