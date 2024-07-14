import React, { useRef } from 'react';
import Slider from 'react-slick';
import image1 from './assets/image1.png';
import back from './assets/bg5.jpg';
import image2 from './assets/image2.png';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Home() {
  const el = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000, // Set to 5 seconds
    arrows: false
  };

  const slideStyle = {
    height: '400px', // Set the height for the slides
    backgroundColor: 'rgba(255, 255, 255, 0.5)', // Semi-transparent background
    borderRadius: '10px',
    padding: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '20px'
  };

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        backgroundImage: `url(${back})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <header className="flex justify-center items-center py-4 px-8">
        <h1
          className="text-3xl font-bold"
          style={{ color: '#3a4ba5' }}  // Honorable Blue color code
          ref={el}
        >
          'Contribute to build a sustainable future through efficient waste management.'
        </h1>
      </header>

      <Slider {...settings} className="flex-grow">
        <div style={slideStyle}>
          <div className="flex flex-col md:flex-row justify-center items-center h-full">
            <section className="hero flex flex-col justify-center items-center px-8 py-16">
              <div className="max-w-2xl">
                <h2 className="text-2xl font-semibold text-black">What is waste management and why is it important?</h2>
                <p className="text-lg text-black opacity-75">
                  Waste management is one of the most crucial problems our country is facing right now. India produces 62 million tonnes of waste each year. When we segregate waste, there is not only a reduction of waste that gets landfilled, it also reduces pollution levels by lowering the percentage of garbage exposed to air and water.
                </p>
              </div>
            </section>
            <div className="flex justify-center items-center">
              <img src={image1} alt="Hero" className="w-60 h-62" />
            </div>
          </div>
        </div>

        <div style={slideStyle}>
          <div className="flex flex-col md:flex-row justify-center items-center h-full">
            <section className="about py-16 px-8 md:flex md:flex-row md:items-center">
              <div className="md:w-1/2">
                <img src={image2} alt="Waste Segregation Image" className="w-full rounded-lg object-cover" />
              </div>
              <div className="md:w-1/2 md:pl-8 pt-8 md:pt-0">
                <h1 className="text-4xl font-semibold text-center md:text-left text-black">ABOUT</h1>
                <h1 className="text-4xl font-semibold text-center lg:pt-6 pt-3 md:text-left text-black">Sort it Right, Recycle with Might!</h1>
                <p className="text-gray-700 text-lg leading-relaxed mb-4 text-black">
                  Join us in creating a cleaner and more sustainable environment. Learn how to properly segregate waste for a cleaner and greener environment.
                </p>
                <a href="https://greensutra.in/waste-segregation-all-you-need-to-know/" target="_blank" rel="noopener noreferrer">
                  <button className="bg-orange-500 text-white font-bold py-2 px-4 rounded-full hover:bg-orange-700">
                    Learn More
                  </button>
                </a>
              </div>
            </section>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default Home;
