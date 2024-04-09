import Image from "next/image";
import Wrapper from "../wrapper/wrapper";

const ServiceSection = () => {
  return (
    <div className="mt-40">
      <Wrapper className="py-20">
        <div className="flex items-center justify-between w-full h-[50rem] gap-10">
          <div className="w-[50%] h-full">
            <div className="w-full h-full relative rounded-2xl">
              <Image
                fill
                quality={100}
                className=" object-cover object-top rounded-2xl"
                src="/service-img.png"
                alt="Services"
              />
            </div>
          </div>
          <div className="w-full h-full flex flex-col justify-between gap-6">
            <div className="w-full flex items-center justify-between h-full gap-6">
              <div className="w-full h-full border border-[#131E42] rounded-xl flex flex-col items-center">
                <div className=" flex items-center justify-center bg-[#E9E9E9] rounded-full aspect-square h-28 w-28 mt-20">
                  <Image width={52} height={52} src="/home.png" alt="Home" />
                </div>
                <h3 className="text-3xl font-medium text-center mt-4 text-[#131E42]">
                  Admission to college/ High School
                </h3>
              </div>
              <div className="w-full h-full border border-[#131E42] rounded-xl flex flex-col items-center">
                <div className=" flex items-center justify-center bg-[#E9E9E9] rounded-full aspect-square mt-20 h-28 w-28">
                  <Image width={52} height={52} src="/books.png" alt="Books" />
                </div>
                <h3 className="text-3xl font-medium text-center mt-4 text-[#131E42]">
                  Preparation for SAT/TOFL
                </h3>
              </div>
              <div className="w-full h-full border border-[#131E42] rounded-xl flex flex-col items-center">
                <div className=" flex items-center justify-center bg-[#E9E9E9] rounded-full aspect-square mt-20 h-28 w-28">
                  <Image width={36} height={36} src="/doc.png" alt="Document" />
                </div>
                <h3 className="text-3xl font-medium text-center mt-4 text-[#131E42]">
                  Visa Application
                </h3>
              </div>
            </div>
            <div className="w-full flex items-center h-full gap-6">
              <div className="w-full h-full border border-[#131E42] rounded-xl flex flex-col items-center">
                <div className=" flex items-center justify-center bg-[#E9E9E9] rounded-full aspect-square h-28 w-28 mt-20">
                  <Image
                    width={52}
                    height={52}
                    src="/group.png"
                    alt="Registration"
                  />
                </div>
                <h3 className="text-3xl font-medium text-center mt-4 text-[#131E42]">
                  NCAA/NAIA <br />
                  Registration and Guidance
                </h3>
              </div>
              <div className="w-full h-full border border-[#131E42] rounded-xl flex flex-col items-center">
                <div className=" flex items-center justify-center bg-[#E9E9E9] rounded-full aspect-square mt-20 h-28 w-28">
                  <Image width={52} height={52} src="/dollar.png" alt="Money" />
                </div>
                <h3 className="text-3xl font-medium text-center mt-4 text-[#131E42]">
                  Scholarship <br /> Negotiation
                </h3>
              </div>
              <div className="w-full h-full border border-[#131E42] rounded-xl flex flex-col items-center">
                <div className=" flex items-center justify-center bg-[#E9E9E9] rounded-full aspect-square mt-20 h-28 w-28">
                  <Image
                    width={36}
                    height={36}
                    src="/megaphone.png"
                    alt="Promotion"
                  />
                </div>
                <h3 className="text-3xl font-medium text-center mt-4 text-[#131E42]">
                  Promotion
                </h3>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default ServiceSection;
