"use client";

import HomeLayout from "@/components/home/HomeLayout";
import Aos from "aos";
import { useEffect, useState } from "react";
import Loading from "./loading";

export default function Home() {
  const [isDomLoaded, setIsDomLoaded] = useState(false);
  const [areResourcesLoaded, setAreResourcesLoaded] = useState(false);

  useEffect(() => {
    // Function to handle the DOMContentLoaded event
    const handleDomLoaded = () => {
      Aos.init({
        duration: 1500, // Adjust the duration for AOS animations
      });
      setIsDomLoaded(true); // Set state to true when DOM is fully loaded
    };

    // Check if the DOM is already loaded
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', handleDomLoaded);
    } else {
      // DOM is already loaded, handle immediately
      handleDomLoaded();
    }

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener('DOMContentLoaded', handleDomLoaded);
    };
  }, []);

  useEffect(() => {
    // Function to handle loading all images and videos
    const handleAllResourcesLoaded = () => {
      const images = document.querySelectorAll('img');
      const videos = document.querySelectorAll('video');
      const totalResources = images.length + videos.length;
      let loadedResources = 0;

      const handleLoad = () => {
        loadedResources += 1;
        if (loadedResources === totalResources) {
          setAreResourcesLoaded(true);
        }
      };

      images.forEach(img => {
        if (img.complete) {
          handleLoad(); // Already loaded
        } else {
          img.addEventListener('load', handleLoad);
        }
      });

      videos.forEach(video => {
        if (video.readyState >= 3) { // HAVE_FUTURE_DATA
          handleLoad(); // Already loaded
        } else {
          video.addEventListener('loadeddata', handleLoad);
        }
      });

      // Cleanup listeners on component unmount
      return () => {
        images.forEach(img => img.removeEventListener('load', handleLoad));
        videos.forEach(video => video.removeEventListener('loadeddata', handleLoad));
      };
    };

    // Only run if DOM is loaded
    if (isDomLoaded) {
      handleAllResourcesLoaded();
    }
  }, [isDomLoaded]);

  if (!isDomLoaded || !areResourcesLoaded) {
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
