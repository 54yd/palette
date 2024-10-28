"use client";

import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import React from "react";
/**
 * A React component that renders a list of items with a transition animation.
 *
 * The component uses the `useInView` hook from the `framer-motion` library to detect when the list is in view, and the `useEffect` hook to track the first time the list is viewed. The animation is controlled using the `motion.li` component from `framer-motion`, with a `variants` object defining the hidden and visible states.
 *
 * The list is rendered using an array of 10 items, with each item having a delay in the animation based on its index. The `isAfterFirstView` state is used to ensure the animation only plays once, even if the list goes in and out of view.
 */

const AppTransition = () => {
  const ref = useRef<HTMLUListElement>(null);
  const isInView = useInView(ref, { once: true });
  // [CAUTION] [Framaer-Motion Bug]useInView remove root parameter but still guided from official page *see :https://www.framer.com/motion/use-in-view/

  // const [isAfterFirstView, setIsAfterFirstView] = useState(false);
  // useEffect(() => {
  //   if (isInView && !isAfterFirstView) {
  //     setIsAfterFirstView(true);
  //   }
  // }, [isInView, isAfterFirstView]);

  const variants = {
    hidden: { x: "-50%", opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  return (
    <ul ref={ref}>
      {Array(10)
        .fill(0)
        .map((_, i) => i * 100)
        .map((delay, index) => (
          <motion.li
            key={index}
            initial="hidden"
            exit="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={variants}
            transition={{ delay: delay / 1000 }}
          >
            Item {index + 1}
          </motion.li>
        ))}
    </ul>
  );
};

export default AppTransition;
