import React from "react";
import { ThemeProvider } from "./theme-provider";
import { Modal } from "../ui/animated-modal";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { ViewTransitions } from "next-view-transitions";

interface Props {
  children: React.ReactNode;
}

const ChildProviders: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex min-h-[100dvh] w-full flex-col justify-center  scroll-smooth bg-background antialiased">
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
      >
        <Modal>{children}</Modal>
      </ThemeProvider>
    </div>
  );
};

const MainProviders: React.FC<Props> = ({ children }) => {
  return (
    <ViewTransitions>
      <ClerkProvider
        appearance={{
          baseTheme: dark,
        }}
      >
        {children}
      </ClerkProvider>
    </ViewTransitions>
  );
};

export { MainProviders, ChildProviders };
