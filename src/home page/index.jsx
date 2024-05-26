import React from 'react';
import Navbar from './navigationBar';
import HomeImage from '../assets/homepageimage.png';

function Home() {
  return (
    <div>
      <Navbar />
      <div className="flex mt-20">
        <div className="w-60%">
          {/* Image */}
          <img src={HomeImage} alt="logo Icon" className="w-full h-auto ml-24" />
        </div>
        <div className="w-40% ml-60">
        <div className="mt-2">
            <p className="text-7xl font-extrabold font-['Chau Philomene One']">Ajay Saini</p>
            <p className="mt-4 text-4xl font-['Jost']">Professor & Writer</p>
            <p className="mt-20 text-2xl font-jost">Welcome to the realm of Professor Ajay Saini, where academia converges </p>
            <p className="text-2xl font-jost">with activism and the pursuit of knowledge transcends boundaries. Armed</p>
            <p className="text-2xl font-jost">with a master’s degree in social work from the University of Delhi and a</p>
            <p className="text-2xl font-jost">Ph.D. from the Tata Institute of Social Sciences, Mumbai, my scholarly</p>
            <p className="text-2xl font-jost">endeavors focus on unraveling Michel Foucault's theories concerning</p>
            <p className="text-2xl font-jost">power dynamics, governance, and social exclusion. My research traverses</p>
            <p className="text-2xl font-jost">diverse terrains, from the bustling streets of Mumbai to the remote</p>
            <p className="text-2xl font-jost">communities of the Andaman and Nicobar Islands, illuminating the </p>
            <p className="text-2xl font-jost">intricacies of societal structures and amplifying marginalized voices. As a </p>
            <p className="text-2xl font-jost">TEDx speaker and esteemed contributor to publications such as The</p>
            <p className="text-2xl font-jost">Guardian and The Hindu, I am committed to unearthing concealed </p>
            <p className="text-2xl font-jost">narratives and catalyzing substantive change.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
