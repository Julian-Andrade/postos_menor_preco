import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "./_components/header/header";
import { Toaster } from "./_components/ui/toaster";
import { Footer } from "./_components/footer/footer";
import { BackToTop } from "./_components/back-to-top";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Postos Menor Preço",
  description: "Preço e qualidade sempre próximos a você!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Toaster />
        <BackToTop />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
