"use client";

import { useRef, useEffect } from "react";
// import {
//   Engine,
//   Render,
//   World,
//   Bodies,
//   Mouse,
//   MouseConstraint,
//   Body,
// } from "matter-js"; // type error - will fix soon
import { motion } from "framer-motion";

const Header = () => {
  // const canvasRef = useRef(null);
  // const rectangleWidth = window.innerWidth < 768 ? 108 : 144;
  // const rectangleHeight = window.innerWidth < 768 ? 28 : 37;
  // const rectangleCount = 7;

  // useEffect(() => {
  //   const engine = Engine.create();
  //   if (canvasRef.current) {
  //     const render = Render.create({
  //       element: canvasRef.current,
  //       engine: engine,
  //       options: {
  //         width: window.innerWidth,
  //         height: window.innerHeight * 0.66,
  //         wireframes: false,
  //         background: "transparent",
  //       },
  //     });

  //     // Set canvas style properties
  //     render.canvas.style.position = "absolute";
  //     render.canvas.style.top = "6.5vh";
  //     render.canvas.style.left = "0";
  //     render.canvas.style.width = "100%";
  //     render.canvas.style.height = "66vh";

  //     // Add mouse control
  //     const mouse = Mouse.create(render.canvas);
  //     const mouseConstraint = MouseConstraint.create(engine, {
  //       mouse: mouse,
  //     });
  //     World.add(engine.world, mouseConstraint);
  //     render.mouse = mouse;

  //     // Add rectangles to the world
  //     setTimeout(() => {
  //       for (let i = 0; i < rectangleCount; i++) {
  //         const rectangle = Bodies.rectangle(
  //           Math.random() * window.innerWidth,
  //           Math.random() * -200,
  //           rectangleWidth,
  //           rectangleHeight,
  //           {
  //             render: {
  //               fillStyle: "#070707",
  //               strokeStyle: "#070707",
  //             },
  //           }
  //         );

  //         World.add(engine.world, rectangle);
  //       }
  //     }, 1750);

  //     // Add static ground to the bottom of the header to prevent rectangles from falling
  //     const ground = Bodies.rectangle(
  //       window.innerWidth / 2,
  //       window.innerHeight * 0.66,
  //       window.innerWidth,
  //       10,
  //       {
  //         isStatic: true,
  //         render: {
  //           visible: false,
  //         },
  //       }
  //     );

  //     const leftWall = Bodies.rectangle(
  //       0,
  //       window.innerHeight / 2,
  //       10,
  //       window.innerHeight,
  //       { isStatic: true, render: { visible: false } }
  //     );
  //     const rightWall = Bodies.rectangle(
  //       window.innerWidth,
  //       window.innerHeight / 2,
  //       10,
  //       window.innerHeight,
  //       { isStatic: true, render: { visible: false } }
  //     );

  //     World.add(engine.world, [ground, leftWall, rightWall]);

  //     // Update rectangles based on mouse movement
  //     mouseConstraint.constraint.stiffness = 0.2;
  //     mouseConstraint.mouse.element.removeEventListener(
  //       "mousewheel",
  //       mouseConstraint.mouse.mousewheel
  //     );
  //     mouseConstraint.mouse.element.removeEventListener(
  //       "DOMMouseScroll",
  //       mouseConstraint.mouse.mousewheel
  //     );

  //     // Run the renderer and the engine
  //     Engine.run(engine);
  //     Render.run(render);

  //     // Cleanup on component unmount
  //     return () => {
  //       // Remove all bodies from the world
  //       World.clear(engine.world, true);

  //       // Stop the renderer
  //       Render.stop(render);
  //     };
  //   }
  // }, [rectangleWidth, rectangleHeight]);

  // Framer motion variants

  const headerDropIn = {
    visible: {
      // y: 0,
      opacity: 1,
    },
    hidden: {
      //   y: -800,
      opacity: 0,
    },
  };

  return (
    <motion.header
      className="lg:z-10 mt-[6vh] 2xl:mt-[5.8vh] bg-[#D80101] min-h-[66vh] px-[1.25%] flex items-center justify-center global__section_padding"
      variants={headerDropIn}
      animate="visible"
      initial="hidden"
      transition={{ delay: 0, duration: 0.5, type: "easeIn" }}
    >
      {/* <div ref={canvasRef}></div> The div that will contain the canvas */}
      <div>
        <h1 className="text-5xl xs:text-[3.25rem] leading-[1] lg:text-7xl xl:text-8xl 2xl:text-9xl">
          Bilingual English & French creative front end developer studying
          business management at Exeter University.
        </h1>
        <p className="mt-6 helvetica">Scroll to explore</p>
      </div>
    </motion.header>
  );
};

export default Header;
