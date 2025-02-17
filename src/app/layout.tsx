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
  other: {
    'facebook-domain-verification': '0468xsdreif63ebqc48q0ksy5gjaye',
  },
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_HOST_URL}/og.png`, 
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <MainProviders>
      <html lang="en">
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
