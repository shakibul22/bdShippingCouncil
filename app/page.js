import Image from "next/image";
import { Inter, Poppins } from "next/font/google";
import HomeLayout from "@/components/home/HomeLayout";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <HomeLayout />
    </main>
  );
}
