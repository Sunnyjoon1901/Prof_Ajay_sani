import React, { useState } from 'react';
import Navbar from './navigationBar';
import project1 from'../assets/project 1.jpeg'
import project2 from'../assets/project2.jpeg'
import project3 from'../assets/project3.jpeg'
import { useActionData } from 'react-router-dom';


function PopularMedia() {
    const [isTextVisible, setIsTextVisible] = useState(false);
    const [projectNumber, setProjectNumber] = useState()

    const handleClick = (projectNum) => {
        setIsTextVisible(!isTextVisible);
        setProjectNumber(projectNum);
      };

    return (
        <div>
          <Navbar />
            <div className="mt-20 flex justify-center">
                <p className="text-5xl text-zinc-600 font-Jost">__________________   Popular Media  __________________</p>
            </div>
            <div className='flex mt-8 ml-52 pb-4 mr-52 border-b-2 border-black boder-px' onClick={() => handleClick(1)}>
                <div className=''>
                    <img src={project1} alt="logo Icon" className=" w-96 h-72" />
                </div>
                <div className='bg-zinc-300 w-full ml-4 justify-center p-4'>
                    <p className='text-5xl text-center'> Unmasking the true nature of the empire </p>
                    {(isTextVisible && projectNumber === 1) ? (
            <p className='text-3xl z-10'>
              In January 1742, a rickety boat drifted into the port of Rio Grande, Brazil. It brought 30 half-naked, emaciated, and nearly dead men back to the shores of “civilization”. Some eight months earlier, their ill-fated man-of-war—the H.M.S. Wager—had wrecked on a remote “uninhabited” island off the coast of western Patagonia. These remnants of the crew had battled an unforgiving sea and worse in a ragtag boat for over a hundred days—voyaging nearly 4,800 km—to reach the port. They had pulled off the impossible. Their tale was fascinating, and it surely had everyone’s attention. Their tale was fascinating, and it surely had everyone’s attention. Their tale was fascinating, and it surely had everyone’s attention.
            </p>
          ) : (
            <p className='text-3xl ml-24 mr-20 z-10'>
              <a
                href="https://frontline.thehindu.com/books/book-review-david-grann-the-wager-a-tale-of-shipwreck-mutiny-and-murder/article67887322.ece"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                David Grann’s book, which delves deeper into the “Wager affair”, distinguishes itself with a broad thematic scope.
              </a>
            </p>
          )}
                </div>
            </div>
            <div className='flex mt-4 ml-52 pb-4 mr-52 border-b-2 border-black boder-px'>
                <div className=''>
                    <img src={project2} alt="logo Icon" className=" w-96 h-72" />
                </div>
                <div className='bg-zinc-300 w-full ml-4 justify-center p-4'>
                    <p className='text-5xl text-center'> Behind evangelist Chau’s fatal mission to the Sentinelese </p>
                    <p className='text-3xl ml-24 mt-4 mr-20 z-10'>
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
                    <p className='text-3xl ml-24 mt-4 mr-20 z-10'>
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

export default PopularMedia;
