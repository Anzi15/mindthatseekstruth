"use client"
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ToastProvider from "./components/ToastProvider";
import Head from "next/head";
import { usePathname } from "next/navigation";
import { Suspense, useEffect } from "react";

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const hideHeaderFooter =
    pathname === "/checkout" || pathname.startsWith("/admin");

    
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
      <title>Mind that seeks truth | Mehran Dadbeh</title>
        <meta
          name="description"
          content="Mind That Seeks Truth is a dynamic space for curious minds eager to explore life’s most profound questions..."
        />
        <link rel="icon" href="/logo.png" type="image/gif" sizes="16x16" />
        <script
          src="//code.tidio.co/qdooksfizp0t2mpcla797raduz6rnty3.js"
          async
        ></script>
      </head>
      <body
        className={` antialiased`}
      >
        <Suspense>

        {
          <ToastProvider>
            <Header />
            {children}
            <Footer />
          </ToastProvider>
        }
        </Suspense>
      </body>
    </html>
  );
}
