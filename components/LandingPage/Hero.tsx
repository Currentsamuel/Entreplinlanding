import React, { useEffect } from "react";
import ContainerLayout from "../../Layouts/ContainerLayout";
import Image from "next/image";
import google from "../../assets/svg/google-logo.svg";
import apple from "../../assets/svg/apple-logo.svg";
import hero from "../../assets/svg/hero.svg";
import { getMobileOperatingSystem } from "../../utils/helper";

const Hero = () => {
  const [mobileOperating, setMobileOperating] = React.useState<string>();

  useEffect(() => {
    setMobileOperating(getMobileOperatingSystem());
  }, []);

  const onNavigate = () => {
    if (mobileOperating === "iOS") {
      window.location.href =
        "https://apps.apple.com/id/app/entreplin/id6463440642";
    } else if (mobileOperating === "Android") {
      window.location.href =
        "https://play.google.com/store/apps/details?id=com.entreplin";
    }
  };

  return (
    <ContainerLayout>
      <div className="w-full flex md:flex-row flex-col md:justify-between mt-32 md:mt-[120px] space-x-6 ">
        <div className="md:w-6/12 flex flex-col lg:mt-20">
          <h1 className="sat-bold text-[30px] tracking-[0.75px] md:text-[50px] text-primary font-bold">
            Entrepreneurs' Platform to Buy, Sell{" "}
            <span className="text-buttonColor">Businesses</span>, Partner and
            Discuss.
          </h1>
          <p className="text-[#6D6D6D] text-base sat-regular mt-5 md:mt-[10px]">
            Connecting entrepreneurs all over the places to buy and sell
            businesses, partner, give and receive support
          </p>
          <div className="flex items-center space-x-4  mt-[22px]">
            {mobileOperating === "iOS" && (
              <button onClick={onNavigate}>
                <Image
                  src={apple}
                  width={apple.width}
                  height={apple.height}
                  alt="apple"
                />
              </button>
            )}
            {mobileOperating === "Android" && (
              <button onClick={onNavigate}>
                <Image
                  src={google}
                  width={google.width}
                  height={google.height}
                  alt="google"
                />
              </button>
            )}
          </div>
        </div>
        <div className="w-full md:w-6/12 mt-8 md:mt-0">
          <Image src={hero} alt="lah" className="w-full h-auto" />
        </div>
      </div>
    </ContainerLayout>
  );
};

export default Hero;
