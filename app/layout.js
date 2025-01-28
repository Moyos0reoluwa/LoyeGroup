import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Head from 'next/head'; 

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Loye Group",
  description: "Loye Group delivers top-tier IT services, innovative software solutions, and professional expertise in accounting, auditing, marketing, and financial analysis. We empower businesses to excel.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/loyeLogo.png" type="image/png" /> 
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
