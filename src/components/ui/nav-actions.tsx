import { ArrowRight } from "lucide-react";
import { Button } from "./button";

const NavActions = () => {
  return (
    <div className="flex items-center justify-end gap-4">
      <Button className=" group">
        Create account{" "}
        <div className="h-6 w-6 ml-4 aspect-square rounded-full bg-white flex items-center justify-center">
          <ArrowRight className="h-4 w-4 text-black group-hover:-rotate-45 transition-all ease-in-out duration-300" />
        </div>
      </Button>
      <Button className=" bg-transparent" variant="outline">
        Login
      </Button>
    </div>
  );
};

export default NavActions;
