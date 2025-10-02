import type { Metadata } from "next";
import { Exo_2, Inter } from "next/font/google";
import Introduction from "./components/introduction/page";
import "./styles/global.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const exo2 = Exo_2({
  variable: "--font-exo2",
  subsets: ["cyrillic-ext", "latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tanjimul Islam Sabbir | Front-End Software Developer Portfolio",
  description:
    "Portfolio of Tanjimul Islam Sabbir, a Front-End Software Developer skilled in React, Next.js, JavaScript, and modern web technologies. Explore projects, skills, and experience.",
  keywords: [
    "Tanjimul Islam Sabbir",
    "Tanjimul Sabbir portfolio",
    "Front-End Developer",
    "React developer",
    "Next.js developer",
    "JavaScript developer",
    "Web developer Bangladesh",
    "Software engineer",
    "UI developer",
    "personal portfolio",
  ],
  authors: [
    {
      name: "Tanjimul Islam Sabbir",
      url: "https://tanjimulsabbir.vercel.app/",
    },
  ],
  openGraph: {
    title: "Tanjimul Islam Sabbir | Front-End Software Developer Portfolio",
    description:
      "Explore the portfolio of Tanjimul Sabbir — Front-End Software Developer specializing in React, Next.js, and modern web applications.",
    url: "https://tanjimulsabbir.vercel.app/",
    siteName: "Tanjimul Sabbir Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://i.ibb.co.com/gbQXJ24T/Tanjimul-Sabbir.jpg",
        width: 1200,
        height: 630,
        alt: "Tanjimul Islam Sabbir - Front-End Software Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tanjimul Islam Sabbir | Front-End Developer Portfolio",
    description:
      "Check out projects and skills of Tanjimul Sabbir, a React & Next.js developer passionate about modern web applications.",
    creator: "@TanjimulSabbbir",
    images: ["https://i.ibb.co.com/gbQXJ24T/Tanjimul-Sabbir.jpg"],
  },
  verification: {
    google: 'UKeit_BXTlI3YB22GxKHIaExEvcjq-GIQ2JCCEsUrek',
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${exo2.variable} w-full antialiased  mt-20 container max-w-screen-2xl mx-auto lg:flex px-5 md:px-5 lg:px-8 2xl:px-10 justify-between`}
      >
        <div>
          <Introduction />
        </div>
      
          {children}
   
      </body>
    </html>
  );
}
