import React from "react";
import { Box, Flex, Heading, Image, Link } from "@chakra-ui/react";

export default function Footer() {
  const list = ["Impressum", "Datenschutz"];

  return (
      <Flex w="100vw" bottom={0} color="white" alignItems="center">
        <Box w="100%" h="50px" textAlign="center" lineHeight="50px">
          {list.map((item) => (
            <Link href={"https://www.visuarte.com/" + item} key={item} mx={4}>
              {item}
            </Link>
          ))}
        </Box>
      </Flex>
  );
}

function FooterOld() {
    return (
        <Flex w="100vw" position="fixed" bottom={0} bg="black" color="white" alignItems="center">
          <Flex w="20vw" textAlign="left" height={50} lineHeight="50px" ml={4} alignItems="center">
            <Image src="/logo.png" alt="Logo" height="50%"/>
          </Flex>
          <Box w="80vw" h="50px" textAlign="right" lineHeight="50px" mr={4}>
            {list.map((item) => (
              <Link href={"/" + item} key={item} mx={4}>
                {item}
              </Link>
            ))}
          </Box>
        </Flex>
    );
} 