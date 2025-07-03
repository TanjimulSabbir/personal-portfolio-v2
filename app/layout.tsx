import { Inter } from "next/font/google";
import type { Metadata } from "next";
import "./styles/global.css";
import Introduction from "./components/introduction/page";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});
const expo2 = Inter({
  variable: "--font-expo2",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tanjimul Sabbir | Personal Portfolio",
  description:
    "Welcome to my personal website showcasing my projects and skills.",
  keywords: [
    "Tanjimul Islam Sabbir",
    "portfolio",
    "developer",
    "web developer",
    "Next.js",
    "software engineer",
    "JavaScript",
    "React",
    "Node.js",
  ],
  authors: [{ name: "Tanjimul Islam Sabbir", url: "https://your-website.com" }],
  openGraph: {
    title: "Tanjimul Sabbir | Portfolio",
    description: "Showcasing projects and skills in web development.",
    url: "https://your-website.com",
    siteName: "Your Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Your Name | Portfolio",
    description: "Check out my web development projects and skills.",
    creator: "@yourtwitterhandle",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased mt-20 container border max-w-screen-2xl mx-auto flex px-4 md:px-5 lg:px-8 2xl:px-10 justify-between`}
      >
        <div>
          <Introduction />
        </div>
        {children}
      </body>
    </html>
  );
}
