import type { Metadata } from "next";
import googleSans from "next/font/local";
import "../css/globals.css";
import { StickyNavbar } from "@/components/navbar";

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
    <html lang="en" className={googlesans.className}>
      <body>
        <StickyNavbar />
        {children}
      </body>
    </html>
  );
}
