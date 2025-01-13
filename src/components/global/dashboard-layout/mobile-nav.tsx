import { Link } from "next-view-transitions";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { SidebarMenu } from "./sidebar-itmes";
import SidebarContent from "./sidebar-content";

export interface NavItem {
  id: string | number;
  title: string;
  href: string;
  description?: string;
  count?: number | string;
  isComingSoon?: boolean;
  isNew?: boolean;
  isLab?: boolean;
}

export interface NavSection {
  title: string;
  items: NavItem[];
}

interface MobileNavProps {
  sections: NavSection[];
  pathname: string;
  isExpanded: boolean;
  currentPage?: string;
  totalItems: number;
  onExpandToggle: () => void;
  onItemClick: () => void;
  icon:React.ReactNode;
  page:string;
  slug:string;
}

export function MobileNav({
  sections,
  icon,
  pathname,
  isExpanded,
  currentPage,
  totalItems,
  onExpandToggle,
  onItemClick,
  page,
  slug
}: MobileNavProps) {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 flex justify-center items-end px-4 pb-6">
      {isExpanded && (
        <div
          className="fixed inset-0 bg-black/20 dark:bg-black/40 backdrop-blur-sm transition-opacity duration-200 ease-in-out"
          onClick={onExpandToggle}
        />
      )}

      <div
        className={cn(
          "max-w-lg transition-all duration-200 ease-in-out",
          "bg-gradient-to-b from-white/95 via-gray-50/95 to-white/95",
          "dark:from-zinc-900/90 dark:via-zinc-800/90 dark:to-zinc-900/90",
          "shadow-[0_2px_20px_-2px_rgba(0,0,0,0.15)]",
          "backdrop-blur-md cursor-pointer",
          "border border-[rgba(200,200,200,0.8)] dark:border-[rgba(70,70,70,0.7)]",
          isExpanded
            ? "h-[80vh] rounded-[28px] w-full"
            : "h-12 rounded-[28px] w-1/2"
        )}
        onClick={() => !isExpanded && onExpandToggle()}
      >
        {isExpanded ? (
          <div className="h-full flex flex-col">
            <div className="flex-1 px-4 py-2">
                <SidebarContent page={page} slug={slug}  />
            </div>

            <div className="p-4 border-t border-zinc-200 dark:border-zinc-800">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onExpandToggle();
                }}
                className="w-full flex items-center justify-center p-3 rounded-lg hover:bg-black/5 dark:hover:bg-white/5"
              >
                <X className="w-4 h-4 text-zinc-500 dark:text-zinc-400" />
              </button>
            </div>
          </div>
        ) : (
          <div className="flex items-center  justify-center h-full gap-1 ">
            <span className="text-xs text-zinc-500 dark:text-zinc-400">
              {icon}
            </span>
            <span className="capitalize text-sm font-medium text-zinc-900 dark:text-zinc-100 truncate text-center ">
              {currentPage}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
