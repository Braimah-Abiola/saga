import { Button } from "./button";

const NavActions = () => {
  return (
    <div className="flex items-center justify-end gap-4">
      <Button>Create account</Button>
      <Button className=" bg-transparent" variant="outline">Login</Button>
    </div>
  );
};

export default NavActions;
