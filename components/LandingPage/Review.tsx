import Image from "next/image";
import ContainerLayout from "../../Layouts/ContainerLayout";
import { DownQuote, UpQuote, Emptydot, Fulldot, Arrowleft, Arrowright } from "./SVG";
import Daniel from "../../assets/png/avatart.png"
import Emma from "../../assets/png/emma.png"
import Lucas from "../../assets/png/lucas.png"

const Review = () => {
    return (
      <div className="mt-52 md:mt-20 mb-10">
        <ContainerLayout>
          <h1 className="text-secondary text-[20px] lg:text-[50px] text-center font-semibold md:font-bold r-flex mt-20 md:mt-0">
            What users says about us
          </h1>
          <div className="w-full mt-10 flex flex-col lg:flex-row justify-between">
            <div className="w-full lg:w-[30%]">
              <div className="w-full h-[19rem] rounded-[15px] bg-[#F2FBF4] mb-10 md:mb-0 pt-2">
                <div className="ml-5 my-5 relative">
                  <DownQuote />
                  <p className="text-[#5E5E5E] my-5 text-[16px] font-normal">
                    I now use entreplin to find businesses that are for sale in
                    my location. There are some benefits of buying an already
                    established business one which is a goodwill. It's easier
                    with entreplin to find business that are up for sale.
                  </p>
                  <UpQuote />
                </div>
              </div>
              <div className="flex mt-8 items-center">
                <Image src={Daniel} alt="daniel image" />
                <h1 className="text-[#020E20] text-base font-bold ml-5">
                  Emmanuel Nweke
                </h1>
              </div>
            </div>

            <div className="w-full lg:w-[30%] hidden lg:block">
              <div className="flex mb-8 items-center">
                <Image src={Emma} alt="emma image" className="w-12 h-12" />
                <h1 className="text-[#020E20] text-base font-bold ml-5">
                  Ogunyemi Titilope
                </h1>
              </div>

              <div className="w-full h-[19rem] rounded-[15px] bg-[#F2FBF4] mb-10 md:mb-0 pt-2">
                <div className="ml-5 my-5 relative">
                  <DownQuote />
                  <p className="text-[#5E5E5E] my-5 text-[16px] font-normal">
                    Even though I have seen a lot of people say they now find it
                    easier selling their businesses using entreplin, what I
                    enjoy most is the forum, I learn from exepert, and I make
                    friends with other entrepreneurs.
                  </p>
                  <UpQuote />
                </div>
              </div>
            </div>

            <div className="w-full lg:w-[30%] hidden lg:block">
              <div className="w-full h-[19rem] rounded-[15px] bg-[#F2FBF4] mb-10 md:mb-0 pt-2">
                <div className="ml-5 my-5 relative">
                  <DownQuote />
                  <p className="text-[#5E5E5E] my-5 text-[16px] font-normal">
                    Entreplin is a game-changer! Finding businesses for sale was
                    a breeze with its user-friendly interface. Detailed listings
                    and a supportive community make it a must-have for
                    entrepreneurs. Highly recommend.
                  </p>
                  <UpQuote />
                </div>
              </div>
              <div className="flex mt-8 items-center">
                <Image src={Lucas} alt="lucas image" className="w-12 h-12" />

                <h1 className="text-[#020E20] text-base font-bold ml-5">
                  Lucas Barnatt
                </h1>
              </div>
            </div>
          </div>

          <div className="mt-10 lg:mt-20 flex m-auto w-5 justify-between">
            <Emptydot />
            <Fulldot />
          </div>

          <div className="flex justify-between w-28 m-auto mt-8">
            <Arrowleft />
            <Arrowright />
          </div>
        </ContainerLayout>
      </div>
    );
}
 
export default Review;
