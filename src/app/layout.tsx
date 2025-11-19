import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CartProvider } from "@/context/CartContext";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "FirstAidPro - Professional First Aid Products & Medical Supplies",
  description:
    "Your trusted source for professional first aid kits, medical supplies, and safety equipment. High-quality products for businesses, schools, and organizations. Request a quote today.",
  keywords:
    "first aid kits, medical supplies, emergency equipment, safety products, AED, trauma kits, professional first aid, workplace safety",
  openGraph: {
    title: "FirstAidPro - Professional First Aid Solutions",
    description:
      "Professional first aid products and medical supplies for businesses and organizations.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="antialiased">
        <CartProvider>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
