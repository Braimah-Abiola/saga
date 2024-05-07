import Wrapper from "@/components/wrapper/wrapper";
import Image from "next/image";

const NewsFour = () => {
  return (
    <div className="w-full">
      <Wrapper>
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-10 mt-8 md:mt-20 md:px-20">
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              deleniti at nesciunt delectus voluptates. Ipsum est dolores
              aliquid reiciendis ab id aspernatur exercitationem voluptatem
              maxime eveniet adipisci, quibusdam atque ex? Lorem ipsum dolor sit
              amet, consectetur adipisicing elit. Distinctio aspernatur delectus
              aliquam facere ex dolore. Nihil perferendis veritatis dolorum
              sequi incidunt animi excepturi provident, magnam doloremque facere
              minus illo nam?
            </p>
            <p className="mt-4 text-lg font-normal">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              deleniti at nesciunt delectus voluptates. Ipsum est dolores
              aliquid reiciendis ab id aspernatur exercitationem voluptatem
              maxime eveniet adipisci, quibusdam atque ex? Lorem ipsum dolor sit
              amet, consectetur adipisicing elit. Distinctio aspernatur delectus
              aliquam facere ex dolore. Nihil perferendis veritatis dolorum
              sequi incidunt animi excepturi provident, magnam doloremque facere
              minus illo nam?
            </p>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default NewsFour;
