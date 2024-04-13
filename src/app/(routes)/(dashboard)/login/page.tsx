import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";

const LoginPage = () => {
  return (
    <div className="w-full h-screen max-h-screen flex justify-between">
      <div className="w-full flex flex-col items-center justify-center">
        <div className="relative w-[180px] h-[65px] md:w-[180px] md:h-[65px] hover:scale-110 transition-all ease-in-out -mt-20">
          <Image
            quality={100}
            className=" object-contain"
            fill
            src="/logo.png"
            alt="Logo"
          />
        </div>
        <h2 className="text-xl text-[#131E42] font-normal text-center max-w-3xl mt-4">
          Welcome to Saga Scholarships. A place made easier for students from
          across the United States of America to get scholarships for becoming
          at Athlete. We help students with the vision of becoming football
          stars achieve their dreams by helping them gain admission to top
          colleges and universities. Gain admission by applying and submitting
          documents needed by us. Scholarships made easier with Saga
          Scholarhips.
        </h2>
      </div>
      <div className="w-full bg-[#131E42] flex flex-col items-center justify-center">
        <h1 className=" text-white font-semibold text-3xl">
          Login to your account
        </h1>
        <div className=" max-w-2xl w-full flex flex-col gap-3 mt-8">
          <Input type="email" placeholder="Email" />

          <Input type="password" placeholder="Password" />
        </div>
        <div className="w-full flex items-center justify-end max-w-2xl mt-6">
          <Link href="/submit-application">
            <Button variant="secondary">Continue</Button>
          </Link>
        </div>

        <Link href="/create-account">
          <p className="text-white/70 hover:underline underline-offset-[6px] hover:text-white transition-all ease-in-out duration-200 text-lg mt-10">
            Don&apos;t have an account? Click here to Create One
          </p>
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;
