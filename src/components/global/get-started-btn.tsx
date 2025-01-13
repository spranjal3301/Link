import { cn } from "@/lib/utils";
import { NextPage } from "next";
import { Link } from "next-view-transitions";

interface Props {
  className?: string;
}

const GetStartedBtn: NextPage<Props> = ({ className }) => {
  return (
    <div
      className={cn(
        "flex flex-col w-full sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 ",
        className
      )}
    >
      <Link
        className="items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary hover:bg-primary/90 h-10 px-4 py-2 w-full sm:w-auto text-background flex gap-2 group"
        href="/dashboard"
      >
        <Icons.getStarted />
        Get started for free
      </Link>
    </div>
  );
};

const Icons = {
  getStarted: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className="h-6 w-6 shrink-0 transition-all duration-300 ease-out group-hover:scale-125"
    >
      <rect width="7" height="7" x="14" y="3" rx="1"></rect>
      <path d="M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3"></path>
    </svg>
  ),
};

export default GetStartedBtn;
