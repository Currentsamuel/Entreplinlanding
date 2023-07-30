import React from 'react'
import Image from 'next/image';
import Joins from "../../assets/png/join.png"
import { Bullet } from "./bullet"
import Green from "../../assets/svg/green.svg"
import Blue from "../../assets/svg/blue.svg"

const Join = () => {
  return (
    <div className="w-full h-[674px] max-w-[1600px] mx-auto bg-white flex flex-col lg:flex-row items-center text-baseemd:nter mt-10 mb-8 md:mb-0 lg:my-20">
          <Image src={Joins} alt="Join image" className="w-full md:w-1/2 h-full" />
        <div className="bg-sectionBg w-full h-full md:w-1/2 flex flex-col space-y-4 md:space-y-6 2xl:pr-[122px] mb-8 md:mb-0">
          <div className="w-full mb-10 lg:mb-20">
          <h1 className='text-secondary text-center font-bold text-[26px] lg:text-[50px] mt-12 r-flex'
          >
            Why Join Entreplin
          </h1>
          <p className='text-[#363636] ml-8 font-normal text-[16px] my-5'>It’s been proved that 90 percent of businesses fail along the way due to several reasons which include</p>
          <Bullet name="Operation funds running out" />
          <Bullet name="Lack of research" />
          <Bullet name="Non/Bad Partnership" />
          <Bullet name="Being in the wrong Market" />
          </div>

          {/* start of a sessiom */}
          <div className="w-11/12 2xl:w-8/12 flex space-x-2 text-[#363636] ml-3 lg:ml-8 items-center">
            <Image
              src={Green}
              alt="sdhsjd"
              className="min-w-[30px] md:min-w-[40px] min-h-[40px]"
            />
            <p className="sta-regular text-base lg:pl-5">
            Do not allow your business fail because of these reasons
            </p>
          </div>
          {/* end of a session */}

          {/* start of a sessiom */}
          <div className="w-11/12 2xl:w-8/12 flex space-x-2 text-[#363636] ml-3 lg:ml-8 items-center">
            <Image
              src={Blue}
              alt="sdhsjd"
              className="min-w-[30px] md:min-w-[40px] min-h-[40px]"
            />
            <p className="sta-regular text-base lg:pl-5">
            Use Entreplin to sell percentage/shares in your business and raise enough fund to run a successful business
            </p>
          </div>
          {/* end of a session */}

          {/* start of a sessiom */}
          <div className="w-11/12 2xl:w-8/12 flex space-x-2 text-[#363636] ml-3 lg:ml-8 items-center">
            <Image
              src={Green}
              alt="sdhsjd"
              className="min-w-[30px] md:min-w-[40px] min-h-[40px]"
            />
            <p className="sta-regular text-base lg:pl-5">
            Do not stand by and watch the business fail, sell it here or get a partner who is experienced in your industry.
            </p>
          </div>
          {/* end of a session */}
        </div>
    </div>
  );
}

export default Join
