import React from "react";
import { Box, Flex, Heading, Image, Link } from "@chakra-ui/react";
import data from "../components/data.json";

export default function Footer() {
  const list = data.footer;

  return (
      <Flex w="100vw" bottom={0} color="white" alignItems="center">
        <Box w="100%" h="50px" textAlign="center" lineHeight="50px">
          {list.map((item) => (
            <Link href={data.footer_href + item} key={item} mx={4}>
              {item}
            </Link>
          ))}
        </Box>
      </Flex>
  );
};