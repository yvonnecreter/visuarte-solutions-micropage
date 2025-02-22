/* 
!!!INFO!!!

FRAMER ANIMATIONS DONT SHOW UP BEFORE MANUALLY REFRESHING THE PAGE

BEFORE MAKING CHANGES DUE TO "BUGS" CHECK FIRST IF THATS NOT THE CAUSE OF NOT HAVING REFRESHED!





THANKS
 */

import * as React from "react";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { Box, Image } from "@chakra-ui/react";
import useStore from "./store";

const MotionB = motion(Box);

const hoverAnimation = {
  start: [{ opacity: [0, 1, 0] }, { repeat: Infinity, duration: 1 }],
  cursor: "pointer",
};
const strokeW = "5"

export default function MotionBox() {
  const controls = useAnimation();
  const [colors] = useStore((state) => [state.colors]);
  useEffect(() => {
    controls.start({ opacity: "1" });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /*  OPTIONAL    
 const onMouseOut = (e) => {
    controls.start(initialState).then(() => {
      controls.stop();
    });
  };

  const onMouseEnter = (e) => {
    controls.start(hoverAnimation);
  }; */

  return (
    <MotionB
      position="absolute"
      top={0}
      left={0}
      right={0}
      bottom={0}
      initial={{ opacity: 0 }}
      height="100%"
      width="100%"
      cursor={hoverAnimation.cursor}
      transition={{duration: 0.2}}
      /* onMouseEnter={onMouseEnter} */
      /* onMouseOut={onMouseOut} */
      /* animate={{opacity:1}} */
      animate={{
        opacity: [0.2, 0.7, 0.2],
        /* transition: { duration: 1, repeat: Infinity }, */
        transition: { duration: 1.8, repeat: Infinity },
      }}
    >
      <Box
        as="a"
        href="#werte"
        position="relative"
        width="100%"
        height="100%"
      >
        {/* <Image
        src={"images/showroom_overlay.png"}
        alt={"showroom_mark"}
        w="100%"
        borderRadius={5}
      /> */}
        <svg
          id="Layer_2"
          data-name="Layer 2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1021.46 1021.46"
        >
          <g id="Layer_2-2" data-name="Layer 2">
            <g>
              <path
                d="m0,0v1021.46h1021.46V0H0Zm224.45,469.5v.09l-5.53,105.61c-.3,5.82-5.1,10.36-10.88,10.39-.13,0-.26-.01-.39-.01l-172.48-5.2h-.05c-6.26-.22-11.07-5.64-10.53-11.88l12.08-141.45c.57-6.7,6.99-11.31,13.52-9.71,0,0,.02,0,.03,0l165.92,41.03c5.07,1.25,8.54,5.91,8.31,11.12Zm86.99,168.65l.16-.02.25.02c-.13-.01-.27-.01-.41,0Zm15.96,106.68l-.43-.04c.28.03.54,0,.81-.06l-.38.1Zm38.42-149.58l-13.38,26.89c-1.22,2.44-3.72,3.96-6.44,3.91l-58.75-1.05c-2.14-.04-3.5-2.31-2.51-4.22l13.49-25.91c1.21-2.33,3.62-3.79,6.25-3.79h58.75c2.14,0,3.54,2.25,2.59,4.17Zm76.78-246.93c-.25,9.99-7.89,18.24-17.84,19.23l-162.54,15.99c-3.48.35-6.99-.12-10.26-1.36l-121.25-44.91c-3.39-1.29-5.52-4.67-5.24-8.29l6.66-100.35c.78-9.79,8.04-17.84,17.7-19.62l278.79-51.42c9.66-1.78,18.51,5.77,18.27,15.59l-4.29,175.14Zm12.27,3.14l4.16-170.88c.23-9.44,12.17-13.39,17.99-5.96l84.46,107.94c3.53,4.51,5.45,10.07,5.45,15.8l-2.47,125.5c-.22,6.52-7.48,10.29-12.94,6.72l-85.32-57.55c-7.25-4.74-11.54-12.9-11.33-21.57Zm168.99,370.55l-68.18-3.39c-2.24-.11-4-1.95-4.02-4.19l-.09-12.22h0s-1.15-155.47-1.15-155.47v-.03c.01-2.32,1.84-4.22,4.16-4.3,12.54-.46,50.38-1.22,65.94-1.53,3.75-.07,6.84,2.91,6.9,6.67l2.08,157.16c.04,4.83.07,8.84.1,11.81.02,3.14-2.6,5.65-5.74,5.49Zm111.97,125.52c-.02-.21-.02-.39,0-.61v.61Zm93.99-88.95c-7.93.33-16.25.5-24.87.49-6.84,0-13.87-.11-21.04-.35-12.57-.4-24.7-1.14-36.11-2.16-4.1-.36-8.11-.76-12.02-1.19-44.43-4.93-75.42-14.09-75.11-23.58.41-12.65,56.25-21.11,124.72-18.89,68.48,2.23,123.65,14.29,123.24,26.94-.32,9.66-32.93,16.86-78.81,18.74Zm87.56-155.76h-142.17c-7.24,0-13.18-5.72-13.47-12.95l-2.92-73.6c-.3-7.48,5.55-13.76,13.02-14.01l139.85-4.67c7.27-.25,13.42,5.32,13.9,12.57l5.25,78.27c.52,7.79-5.65,14.39-13.46,14.39Z"
                fill="transparent"
              />
              <g>
                {/* screens oben */}
                <path
                  d="m566.93,298.36l-2.47,125.5c-.22,6.52-7.48,10.29-12.94,6.72l-85.32-57.55c-7.25-4.74-11.54-12.9-11.33-21.57l4.16-170.88c.23-9.44,12.17-13.39,17.99-5.96l84.46,107.94c3.53,4.51,5.45,10.07,5.45,15.8Z"
                  stroke={colors[0]} stroke-width={strokeW}
                  fill="transparent"
                />
                <path
                  d="m446.89,173.18l-4.29,175.14c-.25,9.99-7.89,18.24-17.84,19.23l-162.54,15.99c-3.48.35-6.99-.12-10.26-1.36l-121.25-44.91c-3.39-1.29-5.52-4.67-5.24-8.29l6.66-100.35c.78-9.79,8.04-17.84,17.7-19.62l278.79-51.42c9.66-1.78,18.51,5.77,18.27,15.59Z"
                  stroke={colors[0]} stroke-width={strokeW}
                  fill="transparent"
                />
                {/* table */}
                <path
                  d="m908.63,739.84c-.32,9.66-32.93,16.86-78.81,18.74-7.93.33-16.25.5-24.87.49-6.84,0-13.87-.11-21.04-.35-12.57-.4-24.7-1.14-36.11-2.16-4.1-.36-8.11-.76-12.02-1.19-44.43-4.93-75.42-14.09-75.11-23.58.41-12.65,56.25-21.11,124.72-18.89,68.48,2.23,123.65,14.29,123.24,26.94Z"
                  stroke={colors[2]} stroke-width={strokeW}
                  fill="transparent"
                />
                {/* screen links */}
                <path
                  d="m224.45,469.5v.09l-5.53,105.61c-.3,5.82-5.1,10.36-10.88,10.39-.13,0-.26-.01-.39-.01l-172.48-5.2h-.05c-6.26-.22-11.07-5.64-10.53-11.88l12.08-141.45c.57-6.7,6.99-11.31,13.52-9.71,0,0,.02,0,.03,0l165.92,41.03c5.07,1.25,8.54,5.91,8.31,11.12Z"
                  stroke={colors[1]} stroke-width={strokeW}
                  fill="transparent"
                />
                {/* touchscreen */}
                <path
                  d="m365.82,595.25l-13.38,26.89c-1.22,2.44-3.72,3.96-6.44,3.91l-58.75-1.05c-2.14-.04-3.5-2.31-2.51-4.22l13.49-25.91c1.21-2.33,3.62-3.79,6.25-3.79h58.75c2.14,0,3.54,2.25,2.59,4.17Z"
                  stroke={colors[1]} stroke-width={strokeW}
                  fill="transparent"
                />
                {/* screen rechts */}
                <path
                  d="m917.38,602.82h-142.17c-7.24,0-13.18-5.72-13.47-12.95l-2.92-73.6c-.3-7.48,5.55-13.76,13.02-14.01l139.85-4.67c7.27-.25,13.42,5.32,13.9,12.57l5.25,78.27c.52,7.79-5.65,14.39-13.46,14.39Z"
                  stroke={colors[2]} stroke-width={strokeW}
                  fill="transparent"
                />
                {/* schiebescreen */}
                <path
                  d="m629.6,716.52c.02,3.14-2.6,5.65-5.74,5.49l-68.18-3.39c-2.24-.11-4-1.95-4.02-4.19l-.09-12.22h0s-1.15-155.47-1.15-155.47v-.03c.01-2.32,1.84-4.22,4.16-4.3,12.54-.46,50.38-1.22,65.94-1.53,3.75-.07,6.84,2.91,6.9,6.67l2.08,157.16c.04,4.83.07,8.84.1,11.81Z"
                  stroke={colors[2]} stroke-width={strokeW}
                  fill="transparent"
                />
              </g>
            </g>
          </g>
        </svg>
      </Box>
    </MotionB>
  );
}
