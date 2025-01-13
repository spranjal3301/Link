import { NextPage } from "next";
import Image from "next/image";

interface Props {}

const TechStack: NextPage<Props> = ({}) => {
  const entries = [
    {
      url: "https://nextjs.org/",
      component: (
        <div key="nextjs">
          <Image src={"/next2.svg"} width={90} height={30} alt="Next.JS" />
        </div>
      ),
    },
    {
      url: "https://vercel.com/",
      component: (
        <div key="texts">
          <div className="flex items-center gap-3 text-xl font-semibold">
            <Image src={"/vercel.svg"} width={90} height={30} alt="Vercel" />
            {/* text */}
          </div>
        </div>
      ),
    },
    {
      url: "https://www.prisma.io/",
      component: (
        <div key="prisma">
          <div className="flex font-mono items-center gap-1 text-xl font-extrabold">
            <Image src={"/prisma.svg"} width={32} height={15} alt="Prisma" />
            Prisma
          </div>
        </div>
      ),
    },
    {
      url: "https://razorpay.com/",
      component: (
        <div key="razorpay">
          <div className="flex font-mono items-center gap-3 text-xl font-semibold">
            <Image
              src={"/razorpay.svg"}
              width={135}
              height={45}
              alt="razorpay"
            />{" "}
          </div>
        </div>
      ),
    },
    {
      url: "https://tailwindcss.com/",
      component: (
        <div key="tailwindcss">
          <div className="flex font-mono items-center gap-1 text-xl font-extrabold mt-6 md:mt-auto">
            <Image
              src={"/tailwindcss.svg"}
              width={40}
              height={15}
              alt="tailwindcss"
            />
            TailwindCSS
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="companies" className="text-center mx-auto  md:px-8 ">
      <div className="py-14">
        <div className="mx-auto max-w-screen-xl px-4 md:px-8">
          <h2 className="text-center text-sm font-semibold text-gray-600">
            Powered By ⚡
          </h2>
          <div className="mt-6">
            <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 md:gap-x-16 [&amp;_path]:fill-white">
              {[...entries].map(({ component, url }, i) => (
                <li
                  className="relative grayscale opacity-60 hover:opacity-100 transition duration-200 hover:grayscale-0"
                  key={i}
                >
                  <a
                    href={url}
                    target="_blank"
                    className="flex justify-center w-full"
                  >
                    {component}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );

  return (
    <section
      id="companies"
      className="text-center mx-auto max-w-4xl px-6 md:px-8 mt-20"
    >
      <div className="py-14">
        <div className="uppercase text-sm font-semibold tracking-wider text-zinc-600 dark:text-zinc-400">
          Powered By ⚡
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-6 md:gap-x-16 [&amp;_path]:fill-white">
          {[...entries].map(({ component, url }, i) => (
            <div
              className="relative grayscale opacity-60 hover:opacity-100 transition duration-200 hover:grayscale-0"
              key={i}
            >
              <a
                href={url}
                target="_blank"
                className="flex justify-center w-full"
              >
                {component}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* 



*/

export default TechStack;
