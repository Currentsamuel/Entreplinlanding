import React from 'react'
import ContainerLayout from '../../Layouts/ContainerLayout'
const Support = () => {
    return (
      <div className="w-full bg-buttonColor pt-[50px] pb-[87px] mt-10 text-white" id='contact'>
        <ContainerLayout>
          <div className="bg-contact">
            <div className="w-full flex flex-col items-center">
              <div className="mx-auto md:w-10/12 2xl:w-9/12 flex flex-col mt-5">
                <p className='text-[22px] md:text-[50px] text-[#fff] r-flex font-bold text-center'>You can send us a message for more information</p>
              </div>
              {/* Contact Us Form */}
              <div className="w-full lg:w-6/12 mx-auto mt-20">
                <form className="w-full flex flex-col ">
                  <label className="sta-light text-lg text-neutral-600 ">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="user_name"
                    className="h-[52px] border-[#cfcfcf] text-[#000] border rounded-[10px] bg-white outline-none text-neutral-700 flex items-center px-3 mb-6"
                  />
                  <label className="sta-light text-lg text-neutral-600">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="user_email"
                    className="h-[52px] border-[#cfcfcf] text-[#000] border rounded-[10px] bg-white outline-none text-neutral-700 flex items-center px-3 mb-6"
                  />
                  <label className="sta-light text-lg text-neutral-600">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    className="h-[137px] border-[#cfcfcf] text-[#000] border rounded-[10px] bg-white outline-none text-neutral-700 flex items-center px-3 "
                  />
                  <button className='bg-[#fff] w-full md:w-3/5 m-auto mt-8 h-12 rounded-lg text-buttonColor'>Submit</button>
                </form>
              </div>
              {/* end of contact us */}
            </div>
          </div>
        </ContainerLayout>
      </div>
    );
}

export default Support
