import type { Metadata } from "next";
import googleSans from "next/font/local";
import "../css/globals.css";
import { StickyNavbar } from "@/components/navbar";
import Footer from "@/components/footer";

const googlesans = googleSans({
  src: "../font/googlesans-regular.woff2",
});

export const metadata: Metadata = {
  title: "Google Developer Student Clubs USeP Obrero",
  description:
    "Official website of Google Developer Student Clubs USeP Obrero chapter.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={googlesans.className + " text-black"}>
      <body>
        <StickyNavbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
