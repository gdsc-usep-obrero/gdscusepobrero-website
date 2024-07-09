"use client";

import React, { useState, useEffect } from 'react';
import Image from "next/image";
import JoinOurCommunity from "public/images/JoinOurCommunity.png";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.css';
import "swiper/css/effect-coverflow";
import { EffectCoverflow } from "swiper/modules";
import { Swiper as SwiperType } from 'swiper/types';
import SectionContainer from '@/containers/SectionContainer';

const events = [
  {
    image: JoinOurCommunity,
    title: 'Info-Session 2023',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    image: JoinOurCommunity,
    title: 'Event 2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    image: JoinOurCommunity,
    title: 'Event 3',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
];



export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper: SwiperType) => {
    setActiveIndex(swiper.activeIndex);
  };

  const [slidesPerView, setSlidesPerView] = useState(1.6);

  const handleResize = () => {
    const width = window.innerWidth;
    if (width >= 1024) {
      setSlidesPerView(2);
    } else if (width >= 768) {
      setSlidesPerView(2.4);
    } else {
      setSlidesPerView(1.6);
    }
  };

  useEffect(() => {
    handleResize(); // Set initial value based on current width
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <main className="flex flex-col items-center justify-center bg-gray bg-opacity-10">

      <SectionContainer className="bg-white w-full pt-8 md: shadow-[0_1px_8px_rgba(0,0,0,0.25)]">
        <div className="px-6 flex flex-col items-end justify-end gap-4 w-full bg-cover bg-no-repeat bg-bottom-right bg-[60%] h-[80vh] md:bg-contain md:bg-[0%]" style={{backgroundImage: 'url(/images/eagle.png)'}}>
          <div className="flex flex-col text-right text-2xl xl:text-3xl  font-extrabold">  
            <span style={{textShadow: "1px 1px #f28b82"}}>Grow.</span>
            <span style={{textShadow: "1px 1px #FDE293"}}>Learn.</span>
            <span style={{textShadow: "1px 1px #81C995"}}>Connect.</span>
          </div>
          
          <p className="w-2/5 md:w-[200px] lg:w-[260px] text-xs xl:text-sm text-right">The GDSC USeP Obrero is part of a global community run by students from USeP Obrero.</p>

          <div className="flex justify-end pb-6">
            <button className="border-2 border-blue bg-blue-mute bg-opacity-25 px-4 py-1 rounded-lg text-blue text-xs">About Us</button>
          </div>
          
        </div>
      </SectionContainer>

      <SectionContainer className="w-full flex flex-col items-center">
        <p className="text-center text-xl font-bold pt-16 pb-6">Previous Events</p>
        <div className="w-full flex flex-col items-center gap-4 max-w-screen-md">
          <Swiper
            className="w-full"
            spaceBetween={20} slidesPerView={slidesPerView}
            centeredSlides={true} 
            effect={'coverflow'}
            coverflowEffect={{
              rotate:0,
              stretch: 0,
              depth: 100,
              modifier: 2.5
            }}
            modules={[EffectCoverflow]}
            onSlideChange={handleSlideChange}
          >
            {events.map((event, index) => (
              <SwiperSlide key={index}>
                <Image src={event.image} alt={`Slide ${index + 1}`}/>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="mt-4 text-center w-4/5 max-w-[400px]">
            <p className='text-lg font-bold'>{events[activeIndex].title}</p>
            <p className='text-xs'>{events[activeIndex].description}</p>
          </div>
        </div>
        <button className="my-20 border-2 border-green bg-green-mute bg-opacity-25 px-4 py-1 rounded-lg text-green text-xs">Meet the Team</button>
      </SectionContainer>

      <SectionContainer className="w-full bg-white shadow-[0_1px_8px_rgba(0,0,0,0.25)] py-10 flex flex-col items-center gap-4">
        <p className="text-xl font-bold">Join our Community</p>
        <div className="w-4/5 md:max-w-[380px] lg:max-w-[500px] flex flex-col gap-8">
          <div className="p-4">
            <Image src={JoinOurCommunity} alt="Join Our Community"/>
          </div>
          <p className="text-center text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <button className="mt-6 border-2 border-yellow bg-yellow-mute bg-opacity-25 px-4 py-1 rounded-lg text-yellow text-xs">Meet the Team</button>
      </SectionContainer>
    </main>
  );
}
