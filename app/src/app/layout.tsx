import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Hialeah Business Connect",
    template: "%s – Hialeah Business Connect",
  },
  description:
    "Discover and connect with local businesses in Hialeah, FL. Powered by BizGen Technologies.",
  manifest: "/manifest.json",
  themeColor: "#002147",
  applicationName: "Hialeah Business Connect",
  keywords: ["Hialeah", "local business", "directory", "Miami-Dade", "Florida"],
  openGraph: {
    type: "website",
    siteName: "Hialeah Business Connect",
    title: "Hialeah Business Connect",
    description:
      "Discover and connect with local businesses in Hialeah, FL.",
    images: [
      {
        url: "/assets/logo.png",
        width: 512,
        height: 512,
        alt: "Hialeah Business Connect logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Hialeah Business Connect",
    description: "Discover local businesses in Hialeah, FL.",
    images: ["/assets/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
