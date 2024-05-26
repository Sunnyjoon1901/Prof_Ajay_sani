import React from 'react';
import Navbar from './navigationBar';
import ProfImage from '../assets/profimage.png'
import AboutMe from "../assets/aboutme.png"
import contact from "../assets/contact.png"


function Contact() {

    return (
        <div>

            <div className="flex">
                <div className="w-50% flex">
                    {/* Image */}
                    <img src={ProfImage} alt="logo Icon" className="w-full h-auto"/>
                    <img src={AboutMe} alt="logo Icon" className="w-full h-auto"/>
                </div>
                <div className="w-60%">
                    <Navbar/>
                    <div className="mt-20">
                        <p className="text-2xl text-gray-700 ml-28">Welcome to the realm of Professor Ajai Sini, where academia converges</p>
                        <p className="text-2xl text-gray-700 ml-28">with activism and the pursuit of knowledge transcends boundaries. Armed</p>
                        <p className="text-2xl text-gray-700 ml-28">with a master’s degree in social work from the University of Delhi and a</p>
                        <p className="text-2xl text-gray-700 ml-28">Ph.D. from the Tata Institute of Social Sciences, Mumbai, my scholarly</p>
                        <p className="text-2xl text-gray-700 ml-28">endeavors focus on unraveling Michel Foucault's theories concerning</p>
                        <p className="text-2xl text-gray-700 ml-28">power dynamics, governance, and social exclusion. My research traverses</p>
                        <p className="text-2xl text-gray-700 ml-28">diverse terrains, from the bustling streets of Mumbai to the remote</p>
                        <p className="text-2xl text-gray-700 ml-28">communities</p>
                    </div>
                    <div className="mt-20">
                    <img src={contact} alt="logo Icon" className="w-full h-auto ml-24" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
