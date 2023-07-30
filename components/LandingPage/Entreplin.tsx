import React from 'react'
import Image from 'next/image';
import Service from "../../assets/png/services.png"
import { YellowBullet } from "./bullet"

const Entreplin = () => {
  return (
    <div className="w-full h-[674px] max-w-[1600px] mx-auto bg-white flex flex-col-reverse lg:flex-row items-center text-baseemd:nter mt-36 mb-8 md:mb-0 lg:my-20">
          <Image src={Service} alt="services image" className="w-full md:w-1/2 h-full" />
        <div className="bg-sectionBg w-full h-full md:w-1/2 flex flex-col space-y-4 md:space-y-6 2xl:pr-[122px] mb-8 md:mb-0">
          <h1 className='text-secondary text-center font-bold text-[26px] lg:text-[50px] mt-12 r-flex'
          >
            Entreplin For <br /> Entrepreneurs
          </h1>
          <YellowBullet name="Entreplin is connecting Entrepreneurs all over the places to buy and sell businesses, partner, give and receive support, learn from the success and trail of other entrepreneurs all over the world, discuss and connect" />

          <YellowBullet name="Built for business owners, seasoned entrepreneurs to partner for business growth, join in management of businesses, co-found businesses, collaborate for development of ideas and share insights" />

          <p className="w-[155px] h-[52px] bg-buttonColor text-white flex items-center justify-center sat-regular rounded-full ml-10">
            Get Started
          </p>
        </div>
    </div>
  );
}

export default Entreplin
