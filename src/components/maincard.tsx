import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Heading,
  Image,
  Box,
} from "@chakra-ui/react";

export default function MainCard() {
  const boxRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleScroll = () => {
      if (boxRef.current) {
        let value = window.scrollY;
    
        if (value > 2000) {
            boxRef.current.style.position = "absolute";
            boxRef.current.style.top = "2790px";
          } else {
            boxRef.current.style.top = (value/6+500) + 'px';
            boxRef.current.style.position = "fixed";
        }
      }
    };
  
    window.addEventListener("scroll", handleScroll);
  
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box
   ref={boxRef}
    width="100%"
    top="30vh"
    position="fixed"
    alignContent="center"
    zIndex={4}
    >
      <Card size="lg" mx="5">
        <CardHeader>
          <Heading size="xl">Was tun wir?</Heading>
          <Heading size="l" color="grey" >
            Mit unseren 3 Kernkompetenzen lösen wir Ihre Anforderungen, schaffen
            Ihre mediale Erlebniswelt und das mit System
          </Heading>
        </CardHeader>
        <CardBody  mb="25">
          <Image
            src="/grafik-webseite.png"
            margin="auto"
            maxWidth="100%"
            display="block"
          />
        </CardBody>
      </Card>
    </Box>
  );
}
