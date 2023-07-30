import React from "react";
import ContainerLayout from "../../Layouts/ContainerLayout";
import { useRouter } from "next/router";
import Image from "next/image";
import logo from "../../assets/png/logo.png"
import Link from "next/link";

const Navbar = () => {
  const router = useRouter();
  return (
    <div className="bg-[#fff] fixed top-0 right-0 left-0 z-high h-[85px] items-center nav-style z-50 shadow hidden md:flex">
      <ContainerLayout>
        <div className="w-full flex justify-between items-center mt-4">
          <div className="w-fit">
            <Image src={logo} width={logo.width} height={logo.height} alt="apple" />
          </div>
          <div className="w-fit space-x-[50px] flex ">
            <Link
              href="#feature"
              className="text-[#020E20] text-base cursor-pointer sat-regular font-[500] "
            >
              Features
            </Link>
            <Link
              href="#faq"
              className="text-[#020E20] text-base cursor-pointer sat-regular font-[500] "
            >
              FAQs
            </Link>
            <Link
              href="#contact"
              className="text-[#020E20] text-base cursor-pointer sat-regular font-[500] "
            >
              Contact Us
            </Link>
          </div>

          <p className="w-[155px] h-[52px] bg-buttonColor text-white flex items-center justify-center circular rounded-[10px] cursor-pointer">
            Get Started
          </p>
        </div>
      </ContainerLayout>
    </div>
  );
};

export default Navbar;
