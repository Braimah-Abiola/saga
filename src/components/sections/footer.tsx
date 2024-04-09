import Link from "next/link";
import Wrapper from "../wrapper/wrapper";
import Image from "next/image";
import { Mail, Phone } from "lucide-react";

const FooterSection = () => {
  return (
    <div className="mt-[20rem]">
      <Wrapper className="py-10">
        <div className="flex items-center justify-between">
          <Link href="/" className="w-full">
            <div className="relative w-[135px] h-[55px] md:w-[135px] md:h-[55px] hover:scale-110 transition-all ease-in-out">
              <Image
                quality={100}
                className=" object-contain"
                fill
                src="/logo.png"
                alt="Logo"
              />
            </div>
          </Link>
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <Mail />
              <p>skage@sagascholarships.com</p>
            </div>
            <div className="flex items-center gap-2">
              <Phone />
              <p>skage@sagascholarships.com</p>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default FooterSection;
