import * as React from "react";
import { Box, Heading, Image, Text } from "@chakra-ui/react";

export default function Anim() {
    
  const boxRef = React.useRef<HTMLDivElement>(null);
  const imageRef = React.useRef<HTMLImageElement>(null);
  const gradientBoxRef = React.useRef<HTMLDivElement>(null);
  const textHeadingRef = React.useRef<HTMLDivElement>(null);


  React.useEffect(() => {
    const handleScroll = () => {
      if (boxRef.current && imageRef.current && gradientBoxRef.current && textHeadingRef.current) {
        let value = window.scrollY;
        textHeadingRef.current.style.transform = `translateX(${value / 2}px)`;
        boxRef.current.style.opacity = `${1 - value / 500}`;
        imageRef.current.style.transform = `translateX(${-value/3}px) translateY(${value/3}px) scale(${1 + value / 500})`;
        gradientBoxRef.current.style.transform = `translateY(${value / 1.4}px)`;
    }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Box
        ref={boxRef}
        height="100vh"
        width="100vw"
        top="0"
        position="fixed"
        bg="#000000"
        zIndex={1}
      />
      <Image
        ref={imageRef}
        src={"BG-SVG.svg"}
        position="fixed"
        top="-1vh"
        w="100%"
        zIndex={1}
        alt="Background"
      />
      <Box
        ref={gradientBoxRef}
        height="100vh"
        width="100vw"
        top="50vw"
        bgGradient="linear(to-b, #484848, #2c2c2c)"
        position="fixed"
        zIndex={1}
      />
      <Heading
       ref={textHeadingRef}
               position="fixed"
        top="20vh"
        right={50}
        width="40vw"
        size={"4xl"}
        color={"white"}
        textAlign={"right"}
        zIndex={1}
        lineHeight={"1.2"}
        >Visuarte Solutions</Heading>
    </>
  );
};