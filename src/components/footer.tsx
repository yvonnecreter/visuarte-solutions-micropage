import React from "react";
import { Box, Flex, Heading, Text, Image, Link, Center } from "@chakra-ui/react";
import data from "../components/data.json";


export default function Footer() {
  const list = data.footer;

  return (
    <Center>
      <Flex bottom={0} color="white" flexFlow="row" p="7">
        {/*<Box w="100%" textAlign="center" lineHeight="50px"></Box>*/}
          {list.map((item) => (
            <Link href={data.footer_href + item} key={item} mx={4}>
               <Text variant="header">{item}</Text>
            </Link>
          ))}
      </Flex></Center>
  );
};