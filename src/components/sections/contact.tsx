import Image from "next/image";
import Wrapper from "../wrapper/wrapper";

const ContactSection = () => {
  return (
    <div className="mt-20">
      <Wrapper>
        <div className="flex items-center justify-between w-full gap-20">
          <div className="w-full flex flex-col items-start">
            <div className="h-fit border border-[#131E42] rounded-xl px-8 w-full py-12">
              <div className=" w-fit px-4 py-2 rounded-full border border-[#131E42] flex items-center justify-center">
                <p className=" text-lg font-normal text-[#131E42]">
                  Fill The Form
                </p>
              </div>
              <h2 className=" font-semibold text-4xl mt-6 text-[#131E42]">
                Contact Us
              </h2>
              <p className=" font-normal text-xl mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor
              </p>
            </div>
            <div className="h-fit border border-[#131E42] rounded-xl px-8 w-full py-12">
              
            </div>
          </div>
          <div className="w-full relative h-full">
            <Image fill alt="Contact us" src="/contact-img.png" quality={100} />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default ContactSection;
