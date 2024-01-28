import React from 'react';
import img2 from '../assets/img2.png';
import img1 from '../assets/img1.png';
import img3 from '../assets/img3.png';

const ImageGallery = () => {
  const images = [
    {
      src: img1,
      text: '3D Table tennis project',
    },
    {
      src: img2,
      text: 'Concept art and creation',
    },
    {
      src: img3,
      text: 'Assets and objects development',
    },
  ];

  return (
    <div className='w-full h-screen bg-gray-800 text-white flex flex-col items-center justify-center'>
      <p className='text-4xl font-bold inline border-b-4 border-red-500 mb-4'>
        Services
      </p>
      <div className='flex'>
        {images.map((image, index) => (
          <div key={index} className='mx-4'>
            <img src={image.src} alt={image.alt} style={{ width: '250px', height: '250px' }} />
            <p className='mt-2'>{image.text}</p> 
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;