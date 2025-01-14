
import { Link } from "next-view-transitions";
import { cn } from "@/lib/utils";
import useSidebar from "@/hooks/use-sidebar";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { SidebarMenu } from "@/config/sidebar";



interface Props {
  page: string;
  slug: string;
  onItemClick?: () => void;
}

const Itmes: React.FC<Props> = ({ page, slug ,onItemClick}) => { 
  const {isSidebarOpen} = useSidebar(); 
  return SidebarMenu.map((item) => (
    <Link
      key={item.id}
      href={`/dashboard/${slug}/${item.label === "home" ? "" : item.label}`}
      className={cn(
        "capitalize flex transition ease-in-out delay-100 hover:text-[#d4d5db]",
        page === item.label && "bg-main2",
        page === slug && item.label === 'home' ? 'bg-main2' : 'text-[#9B9CA0]',
        isSidebarOpen ? "rounded-full gap-x-2 p-3" : "rounded-xl size-full py-3 justify-center +",
      )}
      onClick={onItemClick}
    > 
    {isSidebarOpen ? (
      <>
        {item.icon}
        {item.label}
      </>
    ) : (
      <Tooltip delayDuration={100}>
      <TooltipTrigger className="w-full">
        <div className="w-full flex justify-center items-center">
        {item.icon}
        </div>
      </TooltipTrigger>
      <TooltipContent side="right">
        <p className="capitalize ">{item.label}</p>
      </TooltipContent>
    </Tooltip>
    )}

  
    </Link>    
  ));
};

export default Itmes;
