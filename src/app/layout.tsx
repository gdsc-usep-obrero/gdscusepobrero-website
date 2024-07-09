import Footer from "@/components/footer";
import { StickyNavbar } from "@/components/navbar";
import type { Metadata } from "next";
import googleSans from "next/font/local";
import "../css/globals.css";
import { ThemeProvider } from "@/components/client-wrapper";

const googlesans = googleSans({
  src: "../../public/fonts/googlesans-regular.woff2",
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
    <ThemeProvider>
      <html
        lang="en"
        className={`${googlesans.className} text-black min-h-full`}
      >
        <body className="flex flex-col min-h-screen">
          <StickyNavbar />
          <div className="flex-grow my-8">{children}</div>
          <Footer />
        </body>
      </html>
    </ThemeProvider>
  );
}
