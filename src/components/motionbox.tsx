/* 
!!!INFO!!!

FRAMER ANIMATIONS DONT SHOW UP BEFORE MANUALLY REFRESHING THE PAGE

BEFORE MAKING CHANGES DUE TO "BUGS" CHECK FIRST IF THATS NOT THE CAUSE OF NOT HAVING REFRESHED!





THANKS
 */


import * as React from "react";
import { useEffect } from "react";
import {
  motion,
  useAnimation
} from "framer-motion";
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
      cursor={hoverAnimation.cursor}
      transition={transition}
      /* onMouseEnter={onMouseEnter} */
      whileHover={{
        opacity: [0, 1, 0],
        transition: { duration: 1, repeat: Infinity },
      }}
      /* onMouseOut={onMouseOut} */
      /* animate={{opacity:1}} */
    >
      <Image
        src={"images/showroom_mark.png"}
        alt={"showroom_mark"}
        w="100%"
        borderRadius={5}
      />
    </MotionB>
  );
}
