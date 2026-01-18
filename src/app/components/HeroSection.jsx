"use client";
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'

const HeroSection = () => {

  // Function untuk scroll ke section contact
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <section>
      <div className='grid grid-cols-1 sm:grid-cols-12'>
        <div className='col-span-7 place-self-center text-center sm:text-left'>
          <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold'>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-orange-600'>Hello, I'm {" "}</span>
            <br />
            <TypeAnimation
              sequence={[
                'Rayhan MA',
                1000,
                'Web Developer',
                1000,
                'ML Engineer',
                1000,
                'Traveler',
                1000
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className='text-[#ADB7BE] mb-6 text-base sm:text-lg lg:text-xl md:text-justify '>
            An undergraduate Informatics student at the University of Bengkulu, passionate about Web Development, AI, and Machine Learning. I create web applications using React, Node.js, Laravel, and MySQL, and I enjoy turning ideas into functional digital experiences.
          </p>
          <div>
            {/* Scroll ke Contact Section */}
            <button
              onClick={scrollToContact}
              className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 cursor-pointer bg-orange-400 hover:bg-orange-500 text-white transition '
            >
              Hire Me
            </button>

            {/* Download CV */}
            <a
              href='/files/cv.pdf' 
              download
              className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-black cursor-pointer hover:bg-white hover:text-black transition-all hover:border-black border border-white text-white mt-3 inline-block text-center'
            >
              Download CV
            </a>
          </div>
        </div>

        <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
          <div className='rounded-full w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative'>
            <Image 
              className='absolute transform rounded-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
              src='/images/saya.jpeg' 
              alt='Hero Image'
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
