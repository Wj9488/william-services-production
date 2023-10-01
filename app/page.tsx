"use client";

import InitialLoader from "@/Components/InitialLoader";
import Transition from "@/Components/Utils/Transition";
import Nav from "@/Components/Nav";
import Header from "@/Components/Header";
// import LargeImage from "@/Components/LargeImage";
import SkillsSection from "@/Components/SkillsSection";

import Footer from "@/Components/Footer";
import { useState, useEffect } from "react";

export default function Home() {
  const [initialLoading, setInitialLoading] = useState(true);

  useEffect(() => {
    const adjustCanvasZIndex = () => {
      const canvases = document.querySelectorAll("canvas");
      if (window.innerWidth < 600) {
        canvases.forEach((canvas) => {
          // canvas.style.zIndex = window.innerWidth < 600 ? "-999" : "10";
          canvas.style.display = "none"
        });
      }
    };
    adjustCanvasZIndex();
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', adjustCanvasZIndex);

      // Cleanup the event listener if the component is unmounted
      return () => {
          window.removeEventListener('resize', adjustCanvasZIndex);
      };
  }
  }, [])
  useEffect(() => {
    const timer = setTimeout(() => {
      setInitialLoading(false);
    }, 3000);

    // Cleanup the timer if the component is unmounted before the timer finishes
    return () => clearTimeout(timer);
  }, []);

  return (
    <main>
      {initialLoading ? (
        <InitialLoader />
      ) : (
        <>
          <Transition>
          <Nav />
          <Header />
          {/* <LargeImage /> */}
          <SkillsSection />
          <Footer />
          </Transition>
        </>
      )}
    </main>
  );
}
