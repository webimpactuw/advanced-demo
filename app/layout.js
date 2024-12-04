import "./globals.css";
import Navbar from "./components/navbar";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Web Impact Demo",
  description: "A demo site for Advanced Coding Workshops",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-purple-100 text-purple-900 antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
