import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/common/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className=" grid grid-cols-5 gap-5">
          <Navbar />
          <div className=" col-span-4 w-full h-full flex justify-center ">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
