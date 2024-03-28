import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Converter",
  description: "Code to confuse you",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-slate-400">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
