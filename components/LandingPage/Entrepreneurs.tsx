import Image from "next/image";
import ContainerLayout from "../../Layouts/ContainerLayout";
import Sales from "../../assets/png/sales.png"
import Vector from "../../assets/svg/vector.svg"

const Entrepreneurs = () => {
    return ( 
        <div className="text-black w-full mt-10 md:mt-40">
            <ContainerLayout>
                <div className="flex flex-col-reverse lg:flex-row justify-between">
                    <Image src={Sales} alt="buss image" className="lg:h-[30rem]" />
                    <div className="w-full md:w-1/2 relative pb-12">
                        <h1 className="text-secondary text-[26px] md:text-[50px] font-semibold not-italic md:font-bold mt-10 mb-5 r-flex">Entrepreneurs Open Forum</h1>
                        <p className="text-neutral text-base font-normal mt-5 mb-10 lg:mt-10 lg:mb-10">Join other entrepreneurs on the forum to share business ideas, insights, business success tips, discuss hobbies and network.</p>
                        <button className="w-[155px] h-[52px] bg-buttonColor text-white flex items-center justify-center sat-regular rounded-full mb-5">
                            Get Started
                        </button>
                        <Image src={Vector} alt="vector icon" className="absolute bottom-[1px] right-[84%] hidden lg:block" />
                    </div>
                </div>

            </ContainerLayout>
        </div>
     );
}
 
export default Entrepreneurs;