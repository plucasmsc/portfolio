{/*PEDRO LUCAS MS CUNHA - ID 301.376.268 2024-01-28   */}
import React from 'react';
import backgroundImage from '../assets/dogbackground.jpg'; // Adjust the path based on your folder structure

const About = () => {
  const backgroundImageUrl = `url(${backgroundImage})`;

  return (
    <div
      name='about'
      className='w-full h-screen bg-gray-800 text-white'
      style={{ backgroundImage: backgroundImageUrl, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className='max-w-[1000px]  px-8 flex flex-col justify-center h-full'>
        <div className='max-w-[1000px] '>
          <div className=' pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4  border-red-500'> About </p>
          </div>
        </div>

        <div className='max-w-[600px] max-h-[-300px] w-full grid sm:text-left '>
          <div className=' font-bold'>
            <p>
              Hi, with some years of gameplay as my foundation, I'm now diving into the realms of game development,
              armed with a love for coding, graphic design skills, and a commitment to crafting engaging and innovative
              gaming experiences. Let's build worlds that players will love to explore!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;