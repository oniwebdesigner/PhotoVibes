import React from "react";
import Link from "next/link";
import Background from '../images/background1.jpg';
import UploadPage from "app/pages/api/uploadPage";




const HeroSection = () => {
    return (
   <>
   <div className="bg-cover bg-center h-screen text-center
    backdrop-opacity-10 backdrop-invert bg-white/30 opacity-80 linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 100%)" style={{ 'backgroundImage': `url(${Background.src})` }} >
    <div className="flex justify-start items-center h-screen left-10">
  <h1 className="text-4xl font-bold text-center text-white ml-10">
    Photography is the art of capturing moments <br /> that tell stories without words.
    <p className="text-lg text-center text-white max-w-2xl mt-8 ">
    Through the lens, we preserve the beauty of fleeting moments and transform them into timeless
     memories. Each photograph is a window into a unique world, capturing the essence of our experiences
      and emotions. Explore our gallery and discover the stories behind every shot.
  </p>
 <a href="/uploadPage" className="bg-green text-white text-center uppercase font-semibold px-4 py-2 rounded-md inline-block hover:scale-105 mt-10">
  Get Started
 </a>
  </h1>
 
</div>
</div>

   
   </>
     
  );
    
}

export default HeroSection;