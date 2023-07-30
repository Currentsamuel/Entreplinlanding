import ContainerLayout from "../../Layouts/ContainerLayout";
import { Frame, Icons } from "./SVG";

const Section = () => {
    return ( 
        <div className="my-20">
            <ContainerLayout>
                <h1 className="text-secondary text-[20px] lg:text-[50px] text-center font-semibold md:font-bold r-flex">Amazing Features that awaits you<br /> on Entreplin</h1>

                {/* Start of Upper section */}
                <div className="w-full mt-10 flex flex-col lg:flex-row justify-between">
                    <div className="w-full lg:w-[30%] h-auto rounded-[15px] bg-[#E1E1D9] bg-opacity-50 mb-10 md:mb-0">
                        <div className="ml-5 mt-5">
                            <Frame />
                            <p className="text-secondary text-[20px] font-bold mt-5">Sale to or Partner With Experts in Your Industry</p>
                            <p className="text-[#363636] my-5 text-[16px] font-normal">Do you have an idea that is viable, do you need a partner/co-founders, meet other entrepreneurs on Entreplin to develop the idea</p>
                        </div>
                    </div>

                    <div className="w-full lg:w-[30%] h-auto rounded-[15px] bg-secondary text-[#fff] mb-10 md:mb-0">
                        <div className="ml-5 mt-5">
                            <Icons />
                            <p className="text-[20px] font-bold mt-5">Join Seasoned Entrepreneurs for Open Discussion.</p>
                            <p className="my-5 text-[16px] font-normal">Join other entrepreneurs on the forum to share business ideas, insights, business success tips, discuss hobbies and network.</p>
                        </div>
                    </div>

                    <div className="w-full lg:w-[30%] h-auto rounded-[15px] bg-[#E1E1D9] bg-opacity-50 mb-10 md:mb-0">
                        <div className="ml-5 mt-5">
                            <Frame />
                            <p className="text-secondary text-[20px] font-bold mt-5">For your Business Needs Find Help Here.</p>
                            <p className="text-[#363636] my-5 text-[16px] font-normal">Entreplin is giving you an opportunity as an entrepreneur to meet well wishers who are willing to support your business to grow for free.</p>
                        </div>
                    </div>
                </div>
                {/* End of Upper section */}

                {/* Start of Lower section */}
                <div className="w-11/12 lg:w-3/5 m-auto lg:mt-14 flex flex-col lg:flex-row justify-between">
                    <div className="w-full lg:w-[45%] h-auto rounded-[15px] bg-[#E1E1D9] bg-opacity-50 mb-10 md:mb-0">
                        <div className="ml-5 mt-5">
                            <Frame />
                            <p className="text-secondary text-[20px] font-bold mt-5">Make Friends with Other Entrepreneurs & Stay Connected</p>
                            <p className="text-[#363636] my-5 text-[16px] font-normal">Connect and welcome a fellow who is visiting your city for the first time, host and stay connected as friends</p>
                        </div>
                    </div>

                    <div className="w-full lg:w-[45%] h-auto rounded-[15px] bg-secondary text-[#fff] mb-10 md:mb-0">
                        <div className="ml-5 mt-5">
                            <Icons />
                            <p className="text-[20px] font-bold mt-5">Offer Support to Fellow Entrepreneurs.</p>
                            <p className="my-5 text-[16px] font-normal">Offer your support to entrepreneurs who are finding it difficult to secure all they need for their businesses.</p>
                        </div>
                    </div>
                </div>
                {/* End of Lower section */}
            </ContainerLayout>
        </div>
     );
}
 
export default Section;