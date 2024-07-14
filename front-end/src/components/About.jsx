import React from 'react';
import image2 from './assets/image2.png';

function About() {
  return (
    <section className="about py-16 px-8 md:flex md:flex-row md:items-center"> {/* Section styles */}
      <div className="md:w-1/2"> {/* Left-hand image container */}
        <img src={image2} alt="Waste Segregation Image" className="w-full rounded-lg object-cover" />
      </div>
      <div className="md:w-1/2 md:pl-8 pt-8 md:pt-0"> {/* Right-hand text container */}
        <h1 className="text-4xl font-semibold text-center md:text-left text-black">ABOUT</h1>
        <h1 className="text-4xl font-semibold text-center lg:pt-8 pt-4 md:text-left text-white">Sort it Right, Recycle with Might!</h1>
        <p className="text-gray-700 text-lg leading-relaxed mb-4 text-white">
          Join us in creating a cleaner and more sustainable environment. Learn how to properly segregate waste for a cleaner and greener environment.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed text-white">
          {/* Add more content here as needed */}
        </p>
        <button className="bg-orange-500 text-white font-bold py-2 px-4 rounded-full hover:bg-orange-700">
          Learn More
        </button>
      </div>
    </section>
  );
}

export default About;
