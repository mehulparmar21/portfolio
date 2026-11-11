
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mehulparmar-dev.vercel.app"),
  title: {
    default: "Mehul Parmar | Technical Lead",
    template: "%s | Mehul Parmar",
  },
  description:
    "Technical Lead with 10+ years building backend platforms in Python, Django REST Framework and Node.js, across US healthcare RCM and multi-brand commerce.",
  applicationName: "Mehul Parmar Portfolio",
  keywords: [
    "Mehul Parmar",
    "Technical Lead",
    "Backend Engineering",
    "Python",
    "Django REST Framework",
    "Node.js",
    "PostgreSQL",
    "Healthcare RCM",
    "REST APIs",
  ],
  openGraph: {
    type: "website",
    url: "/",
    title: "Mehul Parmar | Technical Lead",
    description:
      "Technical Lead building backend platforms in Python and Node.js, from US healthcare to multi-brand commerce.",
    siteName: "Mehul Parmar Portfolio",
  },
  robots: {
    index: true,
    follow: true,
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}