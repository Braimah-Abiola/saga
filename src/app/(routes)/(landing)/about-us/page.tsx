import Wrapper from "@/components/wrapper/wrapper";
import Image from "next/image";

const AboutPage = () => {
  return (
    <div className="w-full">
      <Wrapper>
        <div className="md:px-40 flex flex-col w-full items-start">
          <div className="flex items-center w-full justify-center mt-12">
            <h1 className="text-[#131E42] font-medium 2xl:font-semibold text-3xl xl:text-6xl 2xl:text-4xl md:-mt-0 text-center">
              Saga Scholarship create opportunities for{" "}
              <br className="hidden md:block" />
              talented athletes to combine top level sports{" "}
              <br className="hidden md:block" />
              while studying at American universities.
            </h1>
          </div>

          <div className="relative w-full h-[38rem] md:h-[45rem] overflow-hidden group rounded-3xl mt-12">
            <Image
              fill
              quality={100}
              className=" object-cover object-center group-hover:scale-110 ease-in-out duration-500 rounded-3xl"
              src="/about-img-hero.png"
              alt="About image"
            />
          </div>

          <div className="flex flex-col items-center w-full justify-center mt-20">
            <h1 className="text-[#131E42] font-medium 2xl:font-semibold text-3xl xl:text-6xl 2xl:text-4xl md:-mt-0 text-center">
              About Us
            </h1>
            <p className="text-lg text-black text-center w-full md:w-[85%] mt-4">
              Saga Scholarship is led by an experienced team who have all been
              through this process and graduated as student-athletes. Since
              being founded in 2020, we have helped many students navigate
              through the process of becoming student-athletes by sharing our
              expertise. Our team consist of former college players and college
              coaches. Our team members have all had huge success in the States
              from different sides of the country, receiving several awards for
              athletic and academic performances, and one member also ended up
              being drafted to MLS - currently playing at the professional level
              in the States. With the broad network achieved throughout the past
              8-10 years, Athlete Aspire is in a great position to help talented
              and ambitious athletes.
            </p>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default AboutPage;
