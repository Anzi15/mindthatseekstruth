"use client"
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ToastProvider from "./components/ToastProvider";
import Head from "next/head";
import { usePathname } from "next/navigation";
import { useEffect } from "react";


// export const metadata = {
//   title: "Mind that seeks truth | Mehran Dadbeh",
//   description:
//     "Mind That Seeks Truth is a dynamic space for curious minds eager to explore life’s most profound questions. Our platform brings together insightful articles, thought-provoking discussions, and inspiring resources designed to ignite intellectual curiosity. Whether you're passionate about philosophy, science, or personal growth, we provide a space to challenge your perspectives, spark new ideas, and connect with others on a journey of discovery. Join us in the pursuit of deeper understanding and the quest for truth in an ever-evolving world.",
// };

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const hideHeaderFooter =
    pathname === "/checkout" || pathname.startsWith("/admin");

    
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/logo.png" type="image/gif" sizes="16x16" />
        <script
          src="//code.tidio.co/qdooksfizp0t2mpcla797raduz6rnty3.js"
          async
        ></script>
      </head>
      <body
        className={` antialiased`}
      >
        {hideHeaderFooter ? (
          { children }
        ) : (
          <ToastProvider>
            <Header />
            {children}
            <Footer />
          </ToastProvider>
        )}
      </body>
    </html>
  );
}
