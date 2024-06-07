import { ContextProvider } from "@/components/Context/context";
import "./globals.css";
import "animate.css";

import { Poppins } from "next/font/google";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "Shippers' Council Bangladesh",
  description: "Generated by create next app",
};

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
       <ContextProvider>
       <Toaster position="top-right" reverseOrder={false} />
        {children}
       </ContextProvider>
      </body>
    </html>
  );
}
