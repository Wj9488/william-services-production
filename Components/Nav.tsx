"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { captureRejectionSymbol } from "events";

const Clock: React.FC<{ hours: number; minutes: number }> = ({
  hours,
  minutes,
}) => {
  const hourRotation = 30 * hours + 0.5 * minutes; // 30 degrees per hour + 0.5 degrees per minute
  const minuteRotation = 6 * minutes; // 6 degrees per minute

  return (
    <svg width="18" height="18" viewBox="0 0 18 18">
      <circle
        cx="9"
        cy="9"
        r="8.5"
        fill="none"
        stroke="black"
        strokeWidth="0.5"
      />
      <line
        x1="9"
        y1="9"
        x2="9"
        y2="4"
        stroke="black"
        strokeWidth="1"
        transform={`rotate(${hourRotation} 9 9)`}
      />
      <line
        x1="9"
        y1="9"
        x2="9"
        y2="2"
        stroke="black"
        strokeWidth="1"
        transform={`rotate(${minuteRotation} 9 9)`}
      />
    </svg>
  );
};

const Nav = () => {
  const [GBtime, setGBTime] = useState(getCurrentTime("en-GB"));
  const [FRtime, setFRTime] = useState(getCurrentTime("fr-FR"));
  const [visible, setVisible] = useState(true)
  const [lastScrollPosition, setLastScrollPosition] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setGBTime(getCurrentTime("en-GB"));
      setFRTime(getCurrentTime("fr-FR"));
    }, 1000); // Update every second

    // clear the interval when the component is unmounted
    return () => clearInterval(interval);
  }, []);

  function getCurrentTime(locale: string) {
    const date = new Date();
    if (locale === "fr-FR") {
      date.setHours(date.getHours() + 1); // Adjust for French time
    }
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? "pm" : "am";
    const twelveHour = hours > 12 ? hours - 12 : hours;
    const formattedMinutes = minutes.toString().padStart(2, "0");

    return `${twelveHour}:${formattedMinutes}${ampm}`;
  }

  useEffect(()=> {
    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;

      if (currentScrollPosition < lastScrollPosition) {
        setVisible(true)
      } else {
        setVisible(false)
      }
      setLastScrollPosition(currentScrollPosition)
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll)
    };
  }, [lastScrollPosition])

  // const navDropIn = {
  //   visible: { y: 0 },
  //   hidden: {
  //     y: -80,
  //   },
  // };

  const navDropIn = {
    visible: { 
        y: 0,
        // opacity: 1
    },
    hidden: {
    y: -50,
    // opacity: 0
    },
  };



  return (
    <motion.nav
      className="bg-[#D80101] fixed top-0 w-full lg:py-2 py-3 px-[1.25%] flex items-center justify-between z-50 helvetica lg:text-base 2xl:min-h-[5.8vh]"
      variants={navDropIn}
      animate={visible ? "visible" : "hidden"}
      initial="hidden"
      transition={{ delay: 0, duration: .5, type: "easeIn" }}
    >
      <div>
        <Link href={"/"}>
          <p role="Website Name">
            <span className="font-semibold">william</span>.jones {"(EN)"}
          </p>
        </Link>
      </div>
      <div className="flex items-center justify-around lg:gap-3 gap-2">
        <p className="hidden lg:block">Exeter University</p>
        <p className="hidden lg:block">/</p>
        <div className="flex gap-3 items-center justify-center">
          <Clock
            hours={new Date().getHours()}
            minutes={new Date().getMinutes()}
          />
          <p className="">
            <span className="">
            {GBtime} 
            </span>
            <sup>{" "}GB</sup>
          </p>
        </div>
        <p className="hidden lg:block">/</p>
        <div className="hidden lg:flex gap-3 items-center justify-center">
          <Clock
            hours={new Date().getHours() + 1}
            minutes={new Date().getMinutes()}
          />{" "}
          {/* Adjusted for French time */}
          <p className="">
            <span className="">
            {FRtime} 
            </span>
            <sup>{" "}FR</sup>
          </p>
        </div>
        <Link href={"/contact"}>
          <button className="py-1 px-3 bg-[#070707] text-[#A3A3A3] text-sm">
            Contact Me
          </button>
        </Link>
      </div>
    </motion.nav>
  );
};

export default Nav;
