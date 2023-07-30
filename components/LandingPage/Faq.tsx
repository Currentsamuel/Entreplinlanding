import React, { useState } from 'react'
import ContainerLayout from '../../Layouts/ContainerLayout'
import { Title } from './Text'
import add from "../../assets/svg/arrow-down.svg"
import minus from "../../assets/svg/minus.svg"
import Image from 'next/image'
import { faqData } from '../../utils/faqdata'
import { SecondFaqData } from '../../utils/secondfaqdata'
const Faq = () => {
  return (
    <div className="w-full bg-[#fff] h-auto md:py-[100px]" id='faq'>
      <ContainerLayout>
        <div className="w-full flex flex-col">
          <Title name="Frequently Asked Questions" className='mx-auto r-flex' />
          <div className="flex flex-col md:mt-5">
            {
              faqData.map((item: any, index: number) => {
                return <SingleFaq item={item} key={index} />
              })
            }
          </div>

          <div className="flex flex-col mt-20 md:mt-40">
            {
              SecondFaqData.map((item: any, index: number) => {
                return <SingleFaq item={item} key={index} />
              })
            }
          </div>
        </div>
      </ContainerLayout>
    </div>
  );
}

export default Faq


const SingleFaq = ({item} : any) => {
  const [isOpen, setIsOpen] = useState(false);
  const { title, story, list,isLast } = item;

  return (
    <div
      className={`flex flex-col  w-full py-5 ${
        isLast ? "border-none" : "border border-[#28C24E] rounded-lg mb-5"
      }`}
    >
      <div className="flex space-x-5 items-center justify-between px-2 md:px-5" onClick={() => setIsOpen(!isOpen)}>
        <p className="md:text-[22px] text-[#0E0E0E] font-bold sat-bold">
          {title}
        </p>
        <Image src={isOpen ? minus : add} alt="add " />
      </div>
      {isOpen && <div className="flex flex-col mt-3 pl-[44px]">
        <p className='text-[#0E0E0E] md:text-lg '>{story}</p>
        {list.length !== 0  && <ul className='list-disc '>
          {
            list.map((item: any, index: number) => {
              return (
                <li
                className="text-[#0E0E0E] md:text-lg"
                key={index}
                >
                  {item}
                </li>
              );
            })
          }
        </ul>}
      </div>}
    </div>
  );
}
