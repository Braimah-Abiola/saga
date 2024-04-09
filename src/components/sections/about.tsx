import Image from "next/image";
import Wrapper from "../wrapper/wrapper";
import { Button } from "../ui/button";
import Marquee from "react-fast-marquee";

const AboutSection = () => {
  return (
    <div id="about" className="w-full mt-40">
      <Wrapper>
        <div className="flex items-start justify-between w-full gap-20 px-20">
          <div className="w-full h-[500px] rounded-xl relative">
            <Image
              fill
              className=" object-cover object-center rounded-xl"
              src="/about-img.png"
              alt="About"
              quality={100}
            />
          </div>
          <div className="w-full flex flex-col items-start py-10">
            <h2 className="text-[#131E42] text-5xl font-semibold">About Us</h2>
            <p className=" font-normal text-lg text-[#131E42]/90 mt-4">
              Saga Scholarships is led by an experienced team who have all been
              through this process and graduated as student-athletes. Since
              being founded in 2020, we have helped many students navigate
              through the process of becoming student-athletes by sharing our
              expertise.
            </p>
            <Button className="mt-6" variant="outline">
              Learn More
            </Button>
          </div>
        </div>
      </Wrapper>
      <Wrapper className="mt-40 px-0 2xl:px-0">
        <div className="flex flex-col items-start w-full">
          <div className="w-full flex items-center justify-between px-3 md:px-20 xl:px-10 2xl:px-20">
            <h2 className="text-[#131E42] text-5xl font-semibold">
              Our Student-Athletes
            </h2>
            <Button variant="outline">See our athletes</Button>
          </div>

          <Marquee autoFill speed={200}>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 2xl:gap-8 pb-10 pt-5 md:pt-10 md:pb-5">
              <div className=" w-[300px] h-[400px] rounded-xl ml-4">
                <div className="w-full h-full relative">
                  <Image
                    fill
                    src="/athlete1.png"
                    alt="Athlete"
                    className=" object-cover object-center rounded-xl"
                  />
                  <div className=" absolute bottom-0 p-5">
                    <h3 className=" text-white text-2xl font-medium">
                      Henrik Stenersen
                    </h3>
                    <Button
                      className="mt-4 bg-transparent border border-white text-white"
                      variant="outline"
                    >
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>
              <div className=" w-[300px] h-[400px] rounded-xl">
                <div className="w-full h-full relative">
                  <Image
                    fill
                    src="/athlete2.png"
                    alt="Athlete"
                    className=" object-cover object-center rounded-xl"
                  />
                  <div className=" absolute bottom-0 p-5">
                    <h3 className=" text-white text-2xl font-medium">
                      Erik Olaf Krohnstad
                    </h3>
                    <Button
                      className="mt-4 bg-transparent border border-white text-white"
                      variant="outline"
                    >
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>
              <div className=" w-[300px] h-[400px] rounded-xl">
                <div className="w-full h-full relative">
                  <Image
                    fill
                    src="/athlete3.png"
                    alt="Athlete"
                    className=" object-cover object-center rounded-xl"
                  />
                  <div className=" absolute bottom-0 p-5">
                    <h3 className=" text-white text-2xl font-medium">
                      Ivar Ná Aga
                    </h3>
                    <Button
                      className="mt-4 bg-transparent border border-white text-white"
                      variant="outline"
                    >
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>
              <div className=" w-[300px] h-[400px] rounded-xl">
                <div className="w-full h-full relative">
                  <Image
                    fill
                    src="/athlete4.png"
                    alt="Athlete"
                    className=" object-cover object-center rounded-xl"
                  />
                  <div className=" absolute bottom-0 p-5">
                    <h3 className=" text-white text-2xl font-medium">
                      Julian Jordheim
                    </h3>
                    <Button
                      className="mt-4 bg-transparent border border-white text-white"
                      variant="outline"
                    >
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>
              <div className=" w-[300px] h-[400px] rounded-xl">
                <div className="w-full h-full relative">
                  <Image
                    fill
                    src="/athlete5.png"
                    alt="Athlete"
                    className=" object-cover object-center rounded-xl"
                  />
                  <div className=" absolute bottom-0 p-5">
                    <h3 className=" text-white text-2xl font-medium">
                      Henrik Webb
                    </h3>
                    <Button
                      className="mt-4 bg-transparent border border-white text-white"
                      variant="outline"
                    >
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Marquee>

          <Marquee autoFill speed={150}>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 2xl:gap-8 pb-10 pt-5 md:pt-0 md:pb-5">
              <div className=" w-[300px] h-[400px] rounded-xl ml-4">
                <div className="w-full h-full relative">
                  <Image
                    fill
                    src="/athlete6.png"
                    alt="Athlete"
                    className=" object-cover object-center rounded-xl"
                  />
                  <div className=" absolute bottom-0 p-5">
                    <h3 className=" text-white text-2xl font-medium">
                      Nos Aasheim
                    </h3>
                    <Button
                      className="mt-4 bg-transparent border border-white text-white"
                      variant="outline"
                    >
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>
              <div className=" w-[300px] h-[400px] rounded-xl">
                <div className="w-full h-full relative">
                  <Image
                    fill
                    src="/athlete7.png"
                    alt="Athlete"
                    className=" object-cover object-center rounded-xl"
                  />
                  <div className=" absolute bottom-0 p-5">
                    <h3 className=" text-white text-2xl font-medium">
                      Oskar Ihlen
                    </h3>
                    <Button
                      className="mt-4 bg-transparent border border-white text-white"
                      variant="outline"
                    >
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>
              <div className=" w-[300px] h-[400px] rounded-xl">
                <div className="w-full h-full relative">
                  <Image
                    fill
                    src="/athlete8.png"
                    alt="Athlete"
                    className=" object-cover object-center rounded-xl"
                  />
                  <div className=" absolute bottom-0 p-5">
                    <h3 className=" text-white text-2xl font-medium">
                      Vide Ostensen
                    </h3>
                    <Button
                      className="mt-4 bg-transparent border border-white text-white"
                      variant="outline"
                    >
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>
              <div className=" w-[300px] h-[400px] rounded-xl">
                <div className="w-full h-full relative">
                  <Image
                    fill
                    src="/athlete9.png"
                    alt="Athlete"
                    className=" object-cover object-center rounded-xl"
                  />
                  <div className=" absolute bottom-0 p-5">
                    <h3 className=" text-white text-2xl font-medium">
                      Mads Semb
                    </h3>
                    <Button
                      className="mt-4 bg-transparent border border-white text-white"
                      variant="outline"
                    >
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>
              <div className=" w-[300px] h-[400px] rounded-xl">
                <div className="w-full h-full relative">
                  <Image
                    fill
                    src="/athlete10.png"
                    alt="Athlete"
                    className=" object-cover object-center rounded-xl"
                  />
                  <div className=" absolute bottom-0 p-5">
                    <h3 className=" text-white text-2xl font-medium">
                      Johannes Eftevaag
                    </h3>
                    <Button
                      className="mt-4 bg-transparent border border-white text-white"
                      variant="outline"
                    >
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Marquee>
        </div>
      </Wrapper>
    </div>
  );
};

export default AboutSection;
