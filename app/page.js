"use client";
import HomeLayout from "@/components/home/HomeLayout";
import Aos from "aos";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    Aos.init({
      duration: 2000, // You can adjust the duration here
    });
  }, []);
  return (
    <main>
      <HomeLayout />
    </main>
  );
}
