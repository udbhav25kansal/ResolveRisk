import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Header, Footer } from "@/components/layout";

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ResolveRisk™ - AI-Assisted Human Rights Complaint Resolution",
  description: "AI-powered platform helping BC employers resolve human rights complaints efficiently and fairly. Reduce costs by 20%, get professional guidance for a fraction of legal fees.",
  keywords: ["human rights", "BC", "complaint resolution", "AI", "employers", "legal tech"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="antialiased min-h-screen flex flex-col" style={{ fontFamily: 'var(--font-poppins)' }}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
