import { NextPage } from "next";
import Logo from "../global/logo";
import { Navbar } from "@/components/global/Landing/navbar";
import { Loginbtn } from "@/components/global/Landing/loginBtn";


interface Props {}

const Header: NextPage<Props> = ({}) => {
  return (
    <header className="fixed top-0 left-0 z-50 w-full backdrop-blur-md animate-fadeindown">
      {" "}
      {/* animate-fadeindown */}
        <div className="container flex h-[3.5rem] items-center justify-between">
          <Logo />
          <Navbar />
          <Loginbtn/>
        </div>
        <hr className="m-0 h-px w-full border-none bg-gradient-to-r from-neutral-200/0 via-neutral-200/30 to-neutral-200/0" />
    </header>
  );
};

export default Header;
