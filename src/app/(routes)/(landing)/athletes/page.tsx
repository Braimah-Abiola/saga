import Wrapper from "@/components/wrapper/wrapper";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { athletes2024 } from "@/constants/data";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const AthletesPage = () => {
  return (
    <div className="w-full">
      <Wrapper>
        <div className="flex flex-col items-center w-full justify-center mt-12">
          <h1 className="text-[#131E42] font-medium 2xl:font-semibold text-3xl xl:text-6xl 2xl:text-4xl md:-mt-0 text-center w-full md:max-w-3xl mb-5 md:mb-10">
            Student-athletes who received our Management and search for
            scholarships in American universities
          </h1>
          <Select>
            <SelectTrigger className="w-[240px]">
              <SelectValue placeholder="Select year" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Years</SelectLabel>
                <SelectItem value="2024">2024</SelectItem>
                <SelectItem value="2023">2023</SelectItem>
                <SelectItem value="2022">2022</SelectItem>
                <SelectItem value="2021">2021</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 2xl:gap-8 pb-10 pt-12 md:pt-10 md:pb-5 md:px-20">
          {athletes2024.map((athlete, i) => {
            return (
              <div
                className=" w-full md:w-[300px] h-[520px] md:h-[400px] rounded-xl relative"
                key={`p_${i}`}
              >
                <div className="w-full h-full relative">
                  <Image
                    quality={100}
                    className=" rounded-2xl object-cover object-center"
                    fill
                    src={`${athlete.img}.png`}
                    alt={athlete.name}
                  />
                </div>

                <div className="w-full h-full absolute bg-black/40 top-0 rounded-2xl" />

                <div className=" absolute bottom-0 flex flex-col items-start px-4 py-4">
                  <p className="text-white font-semibold text-lg mb-2">{`${athlete.name}`}</p>
                  <p className="text-white">{`Year: ${athlete.year}`}</p>
                  <p className="text-white">{`Sport: ${athlete.sport}`}</p>
                  <p className="text-white">{`Race: ${athlete.race}`}</p>
                  <p className="text-white">{`Country: ${athlete.country}`}</p>
                  <p className="text-white">{`University: ${athlete.university}`}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex flex-col items-center w-full justify-center mt-40">
          <h1 className="text-[#131E42] text-center font-medium 2xl:font-semibold text-4xl xl:text-6xl 2xl:text-4xl md:-mt-0 mb-5">
            Become a student-athlete
          </h1>
          <Button>Create account</Button>
        </div>
      </Wrapper>
    </div>
  );
};

export default AthletesPage;
