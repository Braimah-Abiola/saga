import { Button } from "@/components/ui/button";
import Wrapper from "@/components/wrapper/wrapper";
import Image from "next/image";

const AllNews = () => {
  return (
    <div className="w-full">
      <Wrapper>
        <div className="md:px-20 flex flex-col w-full items-start">
          <div className="flex items-center w-full justify-center mt-8 md:mt-12">
            <h1 className="text-[#131E42] font-medium text-center 2xl:font-semibold text-4xl xl:text-6xl 2xl:text-4xl md:-mt-0">
              Keep in touch in our latest news
            </h1>
          </div>

          <div className="w-full flex-col md:flex-row items-center justify-between gap-10 mt-8 md:mt-20">
            <div className=" w-full md:w-[80%] h-[320px] md:h-[500px] relative rounded-xl overflow-hidden group">
              <Image
                fill
                quality={100}
                src="/news1.png"
                className="rounded-xl object-cover object-center group-hover:scale-110 ease-in-out duration-500 transition-all"
                alt="News"
              />
            </div>
            <div className="flex flex-col items-start w-full">
              <h1 className="text-[#131E42] font-medium 2xl:font-semibold text-3xl mt-2 xl:text-6xl 2xl:text-4xl md:-mt-0">
                College A wins the 21st Colleges Soccer Competition
              </h1>
              <p className="mt-4 text-lg font-normal">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas deleniti at nesciunt delectus voluptates. Ipsum est
                dolores aliquid reiciendis ab id aspernatur exercitationem
                voluptatem maxime eveniet adipisci, quibusdam atque ex? Lorem
                ipsum dolor sit amet, consectetur adipisicing elit. Distinctio
                aspernatur delectus aliquam facere ex dolore. Nihil perferendis
                veritatis dolorum sequi incidunt animi excepturi provident,
                magnam doloremque facere minus illo nam?
              </p>
              <p className="mt-4 text-lg font-normal">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas deleniti at nesciunt delectus voluptates. Ipsum est
                dolores aliquid reiciendis ab id aspernatur exercitationem
                voluptatem maxime eveniet adipisci, quibusdam atque ex? Lorem
                ipsum dolor sit amet, consectetur adipisicing elit. Distinctio
                aspernatur delectus aliquam facere ex dolore. Nihil perferendis
                veritatis dolorum sequi incidunt animi excepturi provident,
                magnam doloremque facere minus illo nam?
              </p>
            </div>
          </div>

          <div className="w-full flex-col md:flex-row items-center justify-between gap-10 mt-8 md:mt-20">
            <div className=" w-full md:w-[80%] h-[320px] md:h-[500px] relative rounded-xl overflow-hidden group">
              <Image
                fill
                quality={100}
                src="/news2.png"
                className="rounded-xl object-cover object-center group-hover:scale-110 ease-in-out duration-500 transition-all"
                alt="News"
              />
            </div>
            <div className="flex flex-col items-start w-full">
              <h1 className="text-[#131E42] font-medium 2xl:font-semibold text-3xl mt-2 xl:text-6xl 2xl:text-4xl md:-mt-0">
                Two players selected by Inter Miami U20 Team
              </h1>
              <p className="mt-4 text-lg font-normal">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas deleniti at nesciunt delectus voluptates. Ipsum est
                dolores aliquid reiciendis ab id aspernatur exercitationem
                voluptatem maxime eveniet adipisci, quibusdam atque ex? Lorem
                ipsum dolor sit amet, consectetur adipisicing elit. Distinctio
                aspernatur delectus aliquam facere ex dolore. Nihil perferendis
                veritatis dolorum sequi incidunt animi excepturi provident,
                magnam doloremque facere minus illo nam?
              </p>
              <p className="mt-4 text-lg font-normal">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas deleniti at nesciunt delectus voluptates. Ipsum est
                dolores aliquid reiciendis ab id aspernatur exercitationem
                voluptatem maxime eveniet adipisci, quibusdam atque ex? Lorem
                ipsum dolor sit amet, consectetur adipisicing elit. Distinctio
                aspernatur delectus aliquam facere ex dolore. Nihil perferendis
                veritatis dolorum sequi incidunt animi excepturi provident,
                magnam doloremque facere minus illo nam?
              </p>
            </div>
          </div>

          <div className="w-full flex-col md:flex-row items-center justify-between gap-10 mt-8 md:mt-20">
            <div className=" w-full md:w-[80%] h-[320px] md:h-[500px] relative rounded-xl overflow-hidden group">
              <Image
                fill
                quality={100}
                src="/news3.png"
                className="rounded-xl object-cover object-center group-hover:scale-110 ease-in-out duration-500 transition-all"
                alt="News"
              />
            </div>
            <div className="flex flex-col items-start w-full">
              <h1 className="text-[#131E42] font-medium 2xl:font-semibold text-3xl mt-2 xl:text-6xl 2xl:text-4xl md:-mt-0">
                College C to face College F in the finals
              </h1>
              <p className="mt-4 text-lg font-normal">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas deleniti at nesciunt delectus voluptates. Ipsum est
                dolores aliquid reiciendis ab id aspernatur exercitationem
                voluptatem maxime eveniet adipisci, quibusdam atque ex? Lorem
                ipsum dolor sit amet, consectetur adipisicing elit. Distinctio
                aspernatur delectus aliquam facere ex dolore. Nihil perferendis
                veritatis dolorum sequi incidunt animi excepturi provident,
                magnam doloremque facere minus illo nam?
              </p>
              <p className="mt-4 text-lg font-normal">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas deleniti at nesciunt delectus voluptates. Ipsum est
                dolores aliquid reiciendis ab id aspernatur exercitationem
                voluptatem maxime eveniet adipisci, quibusdam atque ex? Lorem
                ipsum dolor sit amet, consectetur adipisicing elit. Distinctio
                aspernatur delectus aliquam facere ex dolore. Nihil perferendis
                veritatis dolorum sequi incidunt animi excepturi provident,
                magnam doloremque facere minus illo nam?
              </p>
            </div>
          </div>

          <div className="w-full flex-col md:flex-row items-center justify-between gap-10 mt-8 md:mt-20">
            <div className=" w-full md:w-[80%] h-[320px] md:h-[500px] relative rounded-xl overflow-hidden group">
              <Image
                fill
                quality={100}
                src="/news4.png"
                className="rounded-xl object-cover object-center group-hover:scale-110 ease-in-out duration-500 transition-all"
                alt="News"
              />
            </div>
            <div className="flex flex-col items-start w-full">
              <h1 className="text-[#131E42] font-medium 2xl:font-semibold text-3xl mt-2 xl:text-6xl 2xl:text-4xl md:-mt-0">
                College Scouting started
              </h1>
              <p className="mt-4 text-lg font-normal">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas deleniti at nesciunt delectus voluptates. Ipsum est
                dolores aliquid reiciendis ab id aspernatur exercitationem
                voluptatem maxime eveniet adipisci, quibusdam atque ex? Lorem
                ipsum dolor sit amet, consectetur adipisicing elit. Distinctio
                aspernatur delectus aliquam facere ex dolore. Nihil perferendis
                veritatis dolorum sequi incidunt animi excepturi provident,
                magnam doloremque facere minus illo nam?
              </p>
              <p className="mt-4 text-lg font-normal">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas deleniti at nesciunt delectus voluptates. Ipsum est
                dolores aliquid reiciendis ab id aspernatur exercitationem
                voluptatem maxime eveniet adipisci, quibusdam atque ex? Lorem
                ipsum dolor sit amet, consectetur adipisicing elit. Distinctio
                aspernatur delectus aliquam facere ex dolore. Nihil perferendis
                veritatis dolorum sequi incidunt animi excepturi provident,
                magnam doloremque facere minus illo nam?
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center w-full justify-center mt-40">
            <h1 className="text-[#131E42] text-center font-medium 2xl:font-semibold text-4xl xl:text-6xl 2xl:text-4xl md:-mt-0 mb-5">
              Become a student-athlete
            </h1>
            <Button>Create account</Button>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default AllNews;
