"use client";
import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const context = createContext();

const ContextProvider = ({ children }) => {
  const [latestNews, setLatestNews] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // 1 for next, -1 for 
  const [hover, setHover] = useState(false);
  
  useEffect(() => {
    const fetchLatestNews = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/home/latestNews`
        );
        setLatestNews(res.data);
      } catch (err) {
        console.error("Failed to fetch latest news:", err);
      }
    };

    fetchLatestNews();
  }, []);
  const info = {
    latestNews,
    setLatestNews,currentIndex,setCurrentIndex ,direction,setDirection,hover, setHover
  };

  return <context.Provider value={info}>{children}</context.Provider>;
};

export { ContextProvider, context };
