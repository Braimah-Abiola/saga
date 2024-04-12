import Image from "next/image";
import Wrapper from "../wrapper/wrapper";
import { Button } from "../ui/button";
import Link from "next/link";

const NewSection = () => {
  return (
    <div id="news" className="mt-20 md:mt-40">
      <Wrapper className="py-20">
        <h2 className="text-[#131E42] text-4xl md:text-5xl font-semibold md:px-20 mb-10">
          News
        </h2>
        <div className="w-full flex flex-col md:flex-row items-center md:justify-between gap-14 md:px-20">
          <div className="w-full flex flex-col items-start mb-12 md:mb-0">
            <div className="w-full h-[500px] relative rounded-xl overflow-hidden group">
              <Image
                fill
                quality={100}
                src="/news1.png"
                className="rounded-xl object-cover object-center group-hover:scale-110 ease-in-out duration-500 transition-all"
                alt="News"
              />
            </div>
            <h3 className=" text-2xl md:text-3xl mt-6 font-medium text-[#131E42]">
              College A wins the 21st Colleges Soccer Competition
            </h3>
            <Link href="/all-news">
              <Button className="mt-4">Read More</Button>
            </Link>
          </div>
          <div className="w-full flex flex-col items-start">
            <div className="w-full h-[500px] relative rounded-xl group overflow-hidden">
              <Image
                fill
                quality={100}
                src="/news2.png"
                className="rounded-xl object-cover object-center group-hover:scale-110 ease-in-out duration-500 transition-all"
                alt="News"
              />
            </div>
            <h3 className=" text-2xl md:text-3xl mt-6 font-medium text-[#131E42]">
              Two players selected by Inter Miami U20 Team
            </h3>
            <Link href="/all-news">
              <Button className="mt-4">Read More</Button>
            </Link>
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row items-center md:justify-between gap-14 md:px-20 md:mt-20">
          <div className="w-full flex flex-col items-start mt-12 md:mt-0 mb-12 md:mb-0">
            <div className="w-full h-[500px] relative rounded-xl group overflow-hidden">
              <Image
                fill
                quality={100}
                src="/news3.png"
                className="rounded-xl object-cover object-center group-hover:scale-110 ease-in-out duration-500 transition-all"
                alt="News"
              />
            </div>
            <h3 className=" text-3xl mt-6 font-medium text-[#131E42]">
              College C to face College F in the finals
            </h3>
            <Link href="/all-news">
              <Button className="mt-4">Read More</Button>
            </Link>
          </div>
          <div className="w-full flex flex-col items-start">
            <div className="w-full h-[500px] relative rounded-xl group overflow-hidden">
              <Image
                fill
                quality={100}
                src="/news4.png"
                className="rounded-xl object-cover object-center group-hover:scale-110 ease-in-out duration-500 transition-all"
                alt="News"
              />
            </div>
            <h3 className=" text-3xl mt-6 font-medium text-[#131E42]">
              College Scouting started
            </h3>
            <Link href="/all-news">
              <Button className="mt-4">Read More</Button>
            </Link>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default NewSection;
