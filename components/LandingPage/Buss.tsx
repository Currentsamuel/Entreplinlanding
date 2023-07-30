import Image from "next/image";
import ContainerLayout from "../../Layouts/ContainerLayout";
import Bussiness from "../../assets/png/buss.png"

const Buss = () => {
    return ( 
        <div className="text-black w-full">
            <ContainerLayout>
                <div className="flex flex-col lg:flex-row justify-between">
                    <div className="w-full md:w-1/2">
                        <h1 className="text-secondary text-[26px] md:text-[50px] font-semibold md:font-bold mt-10 mb-5 r-flex">For your Business Needs Find Help Here.</h1>
                        <p className="text-neutral text-base font-normal mb-5">Do you need to have or you have something you may wish to lend to an entrepreneur? Request or offer your assistance</p>
                        <button className="w-[155px] h-[52px] bg-buttonColor text-white flex items-center justify-center sat-regular rounded-full mb-10">
                            Get Started
                        </button>
                    </div>

                    <Image src={Bussiness} alt="buss image" className="" />

                </div>
            </ContainerLayout>
            
        </div>
     );
}
 
export default Buss;