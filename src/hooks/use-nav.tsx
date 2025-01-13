import { usePathname } from "next/navigation";
import React from "react";

export default function usePaths() {
  const pathNames = usePathname();
  const paths = pathNames.split("/");
  const page = paths[paths.length-1];
 
  return { page, pathNames }; 
}
