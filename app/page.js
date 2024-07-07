"use client";
import HomeLayout from "@/components/home/HomeLayout";
import Aos from "aos";
import { useEffect, useState } from "react";
import Loading from "./loading";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading(false);
      Aos.init({
        duration: 1500, // You can adjust the duration here
      });
    }, 1500); // Adjust the loading time here (in milliseconds)

    return () => clearTimeout(timeoutId); // Cleanup the timeout on unmount
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  return (
    <main>
      <HomeLayout />
    </main>
  );
}
