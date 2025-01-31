import React from "react";
import { ThemeProvider } from "./theme-provider";
import { Modal } from "../ui/animated-modal";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { ViewTransitions } from "next-view-transitions";
import QueryProviders from "./query-provider";
import { Toaster } from "@/components/ui/sonner";
import ReduxProvider from "./redux-provider";
import Script from "next/script";

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
        <ReduxProvider>
          <QueryProviders>
           <Script src="https://checkout.razorpay.com/v1/checkout.js" />
            <Modal>{children}</Modal>
            <Toaster />
          </QueryProviders>
        </ReduxProvider>
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
