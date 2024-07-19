import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import SessionWrapper from "./components/SessionWrapper";
import { useSession } from "next-auth/react";
// import {session} from '../components/session'
// import { getSession } from "next-auth/react";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "GetMeACoffee",
  description: "this is a donation app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <SessionWrapper >
      <body className={inter.className}>
        <Navbar/>
        <div className="md:min-h-[96.9vh] min-h-[97.6vh] relative h-full w-full bg-slate-950 overflow-x-hidden">
          <div className="fixed bottom-0 left-[-18%] right-0 top-[5%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]">
          </div><div className="fixed bottom-0 right-[-18%] top-[5%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
          <div className="relative z-10 mt-[4%] text-white">
          {children}
          </div>
         
        </div>


        

       
        <Footer/>
        </body>
        </SessionWrapper>
    </html>
  );
}
