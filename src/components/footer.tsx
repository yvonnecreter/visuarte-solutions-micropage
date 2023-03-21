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
};