import "../../lib/styles/globals.css";

import React from "react";
import { PayloadAdminBar } from "@payloadcms/admin-bar";
import { Geist, Geist_Mono } from "next/font/google";
import { Metadata } from "next";
import { WrapperWithQuery } from "@/components/wrapper";
import { Wrapper } from "@/components/wrapper";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Payload Better Auth",
  description: "A Payload CMS plugin for Better Auth",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <Wrapper>
            <WrapperWithQuery>{children}</WrapperWithQuery>
          </Wrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
