import React from "react";

const HeroSection = () => {
    return (
        <div>
        <section className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('/your-image-path.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-4xl font-bold">Welcome to My Photography Website</h1>
          <p className="mt-4 text-lg">Capturing moments, one shot at a time.</p>
          <button className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-700 rounded-md">Explore Gallery</button>
        </div>
      </section>
    </div>
    )
}

export default HeroSection;