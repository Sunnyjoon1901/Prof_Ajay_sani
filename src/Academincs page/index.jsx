import React from 'react';
import Navbar from './navigationBar';
import project1 from'../assets/project 1.jpeg'
import project2 from'../assets/project2.jpeg'
import project3 from'../assets/project3.jpeg'


function Academics() {

    return (
        <div>
          <Navbar />
            <div className="mt-20 flex justify-center">
                <p className="text-5xl text-zinc-600 font-Jost">__________________   Academics  __________________</p>
            </div>
            <div className='flex mt-8 ml-52 pb-4 mr-52 border-b-2 border-black boder-px'>
                <div className=''>
                    <img src={project1} alt="logo Icon" className=" w-96 h-72" />
                </div>
                <div className='bg-zinc-300 w-full ml-4 justify-center p-4'>
                    <p className='text-5xl text-center'> Unmasking the true nature of the empire </p>
                    <p className='text-3xl ml-24 mt-4 mr-20'>
                        <a
                            href="https://frontline.thehindu.com/books/book-review-david-grann-the-wager-a-tale-of-shipwreck-mutiny-and-murder/article67887322.ece" // Replace with the actual URL
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline"
                        >
                            David Grann’s book, which delves deeper into the “Wager affair”, distinguishes itself with a broad thematic scope.
                        </a>
                    </p>
                </div>
            </div>
            <div className='flex mt-4 ml-52 pb-4 mr-52 border-b-2 border-black boder-px'>
                <div className=''>
                    <img src={project2} alt="logo Icon" className=" w-96 h-72" />
                </div>
                <div className='bg-zinc-300 w-full ml-4 justify-center p-4'>
                    <p className='text-5xl text-center'> Behind evangelist Chau’s fatal mission to the Sentinelese </p>
                    <p className='text-3xl ml-24 mt-4 mr-20 '>
                        <a
                            href="https://frontline.thehindu.com/arts-and-culture/a-national-geographic-documentary-examines-the-life-and-death-of-john-allen-chau/article67807254.ece" // Replace with the actual URL
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline"
                        >
                            Examining the life of evangelist John Allen Chau, a new documentary raises questions about faith, colonialism, and the right to remain uncontacted. 
                        </a>
                    </p>
                </div>
            </div>
            <div className='flex mt-4 ml-52 pb-4 mr-52 border-b-2 border-black boder-px'>
                <div className=''>
                    <img src={project3} alt="logo Icon" className=" w-96 h-72" />
                </div>
                <div className='bg-zinc-300 w-full ml-4 justify-center p-4'>
                    <p className='text-5xl text-center'> Unmasking the true nature of the empire </p>
                    <p className='text-3xl ml-24 mt-4 mr-20 '>
                        <a
                            href="https://frontline.thehindu.com/books/book-review-david-grann-the-wager-a-tale-of-shipwreck-mutiny-and-murder/article67887322.ece" // Replace with the actual URL
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline"
                        >
                            David Grann’s book, which delves deeper into the “Wager affair”, distinguishes itself with a broad thematic scope.
                        </a>
                    </p>
                </div>
            </div>
        </div>
        

        );
    }

export default Academics;
