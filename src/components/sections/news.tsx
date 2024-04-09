import Image from "next/image";
import Wrapper from "../wrapper/wrapper";
import { Button } from "../ui/button";

const NewSection = () => {
  return (
    <div className="mt-40">
      <Wrapper className="py-20">
        <div className="w-full flex items-center justify-between gap-14 px-20">
          <div className="w-full flex flex-col items-start">
            <div className="w-full h-[500px] relative rounded-xl">
              <Image
                fill
                quality={100}
                src="/news1.png"
                className="rounded-xl object-cover object-center"
                alt="News"
              />
            </div>
            <h3 className=" text-3xl mt-6 font-medium text-[#131E42]">
              College A wins the 21st Colleges Soccer Competition
            </h3>
            <Button className="mt-4">Read More</Button>
          </div>
          <div className="w-full flex flex-col items-start">
            <div className="w-full h-[500px] relative rounded-xl">
              <Image
                fill
                quality={100}
                src="/news2.png"
                className="rounded-xl object-cover object-center"
                alt="News"
              />
            </div>
            <h3 className=" text-3xl mt-6 font-medium text-[#131E42]">
              College A wins the 21st Colleges Soccer Competition
            </h3>
            <Button className="mt-4">Read More</Button>
          </div>
        </div>
        <div className="w-full mt-14 flex items-center justify-between gap-14 px-20">
          <div className="w-full flex flex-col items-start">
            <div className="w-full h-[500px] relative rounded-xl">
              <Image
                fill
                quality={100}
                src="/news1.png"
                className="rounded-xl object-cover object-center"
                alt="News"
              />
            </div>
            <h3 className=" text-3xl mt-6 font-medium text-[#131E42]">
              College A wins the 21st Colleges Soccer Competition
            </h3>
            <Button className="mt-4">Read More</Button>
          </div>
          <div className="w-full flex flex-col items-start">
            <div className="w-full h-[500px] relative rounded-xl">
              <Image
                fill
                quality={100}
                src="/news2.png"
                className="rounded-xl object-cover object-center"
                alt="News"
              />
            </div>
            <h3 className=" text-3xl mt-6 font-medium text-[#131E42]">
              College A wins the 21st Colleges Soccer Competition
            </h3>
            <Button className="mt-4">Read More</Button>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default NewSection;
