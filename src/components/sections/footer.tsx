import { NextPage } from "next";
import Logo from "../global/logo";
import { siteConfig,footer } from "@/config/site";

interface Props {}

const Footer: NextPage<Props> = ({}) => {
  return (
    <footer>
      <hr className="m-0 h-px w-full border-none bg-gradient-to-r from-neutral-200/0 via-neutral-200/30 to-neutral-200/0" />
      <div className="relative">
        <div className=" px-8 pt-20 pb-32 relative z-0">
          <div className="absolute inset-0 z-999999999 flex items-end md:items-center justify-center overflow-hidden pointer-events-none bg-transparent">
            <p className="text-center text-8xl z-999999999 md:text-9xl lg:text-[18rem] font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-950 via-neutral-800 to-main1/30 select-none">
              {siteConfig.name.toUpperCase()}
            </p>
          </div>
          <div className="max-w-7xl mx-auto text-sm text-neutral-400 flex sm:flex-row flex-col justify-between items-start z-0">
            <div>
              <div className="mr-4 md:flex mb-4 z-0">
                <span className="theme-gradient">
                  <Logo />
                </span>
              </div>
              <div className="relative z-10">
                A product by{" "}
                <a
                  href="https://pranjalonline.vercel.app/"
                  className="text-blue-400 underline underline-offset-4"
                >
                  {siteConfig.creater}
                </a>
              </div>
              <div className="mt-2 relative z-10">
                Brought to you by{" "}
                <a
                  href="https://pranjalonline.vercel.app/"
                  className="text-blue-400 underline underline-offset-4"
                >
                  {siteConfig.createrID}
                </a>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-10 items-start mt-10 md:mt-0">
              {footer.map(({ title, itmes }) => (
                <div
                key={title} 
                className="flex justify-center space-y-4 flex-col mt-4 relative z-10">
                  <span className="text-white">{title}</span>
                  {itmes.map(({ name, herf }) => (
                    <a
                      key={name} 
                      className="transition-colors text-muted-dark hover:text-neutral-400 text-xs sm:text-sm"
                      href={herf}
                    >
                      {name}
                    </a>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};




export default Footer;
