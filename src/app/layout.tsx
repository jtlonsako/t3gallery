import "~/styles/globals.css";
import "@uploadthing/react/styles.css";
import { ClerkProvider } from "@clerk/nextjs";
import { TopNav } from "./_components/TopNav";

import { Inter } from "next/font/google";
import { type Metadata } from "next";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";
import { ourFileRouter } from "./api/uploadthing/core";

const inter = Inter({
  subsets:["latin"],
  variable: "--font-sans"
})

export const metadata: Metadata = {
  title: "T3 Gallery",
  description: "It's a gallery",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <NextSSRPlugin
          routerConfig={extractRouterConfig(ourFileRouter)}
        />
        <body className={`font-sans flex flex-col gap-4`}>
          <TopNav />
          {children}
          </body>
      </html>
    </ClerkProvider>
  );
}
