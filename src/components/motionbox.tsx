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

const MotionB = motion(Box);

const hoverAnimation = {
  start: [{ opacity: [0, 1, 0] }, { repeat: Infinity, duration: 1 }],
  cursor: "pointer",
};

export default function MotionBox() {
  const controls = useAnimation();

  const transition = { duration: 0.2 };

  const initialState = {
    opacity: "0",
  };

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
      cursor={hoverAnimation.cursor}
      transition={transition}
      /* onMouseEnter={onMouseEnter} */

      /* onMouseOut={onMouseOut} */
      /* animate={{opacity:1}} */
      animate={{ opacity: [0.2, 0.7, 0.2],
        /* transition: { duration: 1, repeat: Infinity }, */
        transition: { duration: 1.8, repeat: Infinity }, }}
    >
      <Box 
    as="a"
    href="#webgl-content">
      <Image
        src={"images/showroom_overlay.png"}
        alt={"showroom_mark"}
        w="100%"
        borderRadius={5}
      /></Box>
    </MotionB>
  );
}
