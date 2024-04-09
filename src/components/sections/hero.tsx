import Image from "next/image";
import { Button } from "../ui/button";
import Wrapper from "../wrapper/wrapper";

const HeroSection = () => {
  return (
    <div className="w-full relative">
      <Wrapper className="flex flex-col items-center pt-20 relative">
        <Image
          width={100}
          height={100}
          src="/hero-arrow.png"
          quality={100}
          className=" left-[35%] top-56 object-contain object-center absolute"
          alt="Arrow"
        />

        <Image
          width={50}
          height={50}
          src="/1.png"
          quality={100}
          className=" left-[20%] top-14 object-contain object-center absolute"
          alt="Happy students"
        />
        <Image
          width={50}
          height={50}
          src="/2.png"
          quality={100}
          className=" left-80 top-48 object-contain object-center absolute"
          alt="Happy students"
        />
        <Image
          width={50}
          height={50}
          src="/3.png"
          quality={100}
          className=" left-[25%] top-[25%] object-contain object-center absolute"
          alt="Happy students"
        />

        {/* Right */}
        <Image
          width={50}
          height={50}
          src="/1.png"
          quality={100}
          className=" right-[20%] top-14 object-contain object-center absolute"
          alt="Happy students"
        />
        <Image
          width={50}
          height={50}
          src="/2.png"
          quality={100}
          className=" right-80 top-48 object-contain object-center absolute"
          alt="Happy students"
        />
        <Image
          width={50}
          height={50}
          src="/3.png"
          quality={100}
          className=" right-[25%] top-[25%] object-contain object-center absolute"
          alt="Happy students"
        />

        <h1 className="text-[#131E42] font-semibold 2xl:font-semibold text-5xl xl:text-6xl 2xl:text-[4.8rem]">
          Saga Scholarship
        </h1>
        <p className="text-lg font-normal text-[#131E42]/90 max-w-lg text-center mt-4">
          Receive an American degree. Play the sport you love. Create
          unforgettable memories.
        </p>
        <div className="flex items-center gap-4 mt-8">
          <Button>Contact Us</Button>
          <Button variant="outline">Learn More</Button>
        </div>

        <div className="flex items-center justify-between w-full gap-14 py-20 px-20">
          <div className="w-full rounded-xl h-[35rem] relative">
            <Image
              fill
              src="/hero-img-1.png"
              quality={100}
              className=" left-[35%] top-56 object-cover object-center absolute rounded-xl"
              alt="Basketball athelete"
            />
          </div>
          <div className="w-full border border-[#131E42] text-[#131E42] flex flex-col items-start rounded-xl h-[35rem]">
            <div className="flex flex-col px-10 mt-20">
              <h3 className="text-5xl font-semibold">34K+</h3>
              <h4 className=" text-3xl mt-2 font-medium">
                Success <br /> Stories
              </h4>
            </div>
            <div className=" w-full h-60 relative">
              <Image
                fill
                src="/hero-bg.png"
                quality={100}
                className="object-contain object-center rounded-xl"
                alt="Gradient pattern"
              />
            </div>
            <div className="flex flex-col px-10">
              <Button variant="outline">Learn more</Button>
            </div>
          </div>
          <div className="w-full rounded-xl h-[35rem] relative">
            <Image
              fill
              src="/hero-img-2.png"
              quality={100}
              className=" left-[35%] top-56 object-cover object-center absolute rounded-xl"
              alt="Track athelete"
            />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default HeroSection;
