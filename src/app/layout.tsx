import type { Metadata } from "next";
import "./globals.css";
import {
  ChildProviders,
  MainProviders,
} from "@/components/providers/providers";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Plus_Jakarta_Sans } from "next/font/google";
import { siteConfig } from "@/config/site";
import Head from "next/head";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <MainProviders>
      <html lang="en">
        <Head>
          <meta
            name="facebook-domain-verification"
            content="0468xsdreif63ebqc48q0ksy5gjaye"
          />
        </Head>
        <body
          suppressHydrationWarning
          className={`${GeistSans.className} scroll-smooth`}
        >
          <ChildProviders>{children}</ChildProviders>
        </body>
      </html>
    </MainProviders>
  );
}
