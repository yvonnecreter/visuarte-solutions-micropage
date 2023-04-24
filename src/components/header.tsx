import * as React from "react";
import {
  Link,
  Box,
  Flex,
  Heading,
  Image,
  Text,
  Spacer,
  Divider,
} from "@chakra-ui/react";

interface HeaderProps {
  navItems: { href: string; label: string }[];
}

const Header: React.FC<HeaderProps> = ({ navItems }) => {
  return (
    <Flex
      bg="black"
      w="100%"
      zIndex={9999}
      left={0}
      height={{
        base: "6vh",
        md: "6vh",
        lg: "6vh",
      }}
      position="fixed"
      p={{"xl":"10px","2xl":"4"}}
      display="flex"
      flex-wrap="true"
      color="white"
      alignItems="center"
    >
        <Image src="images/logo.png" ml={{base:"3", md:"4", "2xl":"1%"}} h="100%" alt="visuarte" 
        maxH={{base:"25px", md:"40px", "2xl": "80%"}}/>
      <Spacer />
      {navItems.map((item) => (
        <Box key={item.href} ml={4} maxW={{base: "12%"}}>
          <Link href={item.href} scrollBehavior={"smooth"}>
            <Text variant="header">{item.label}</Text>
          </Link>
        </Box>
      ))}
      <Divider w={{base:"3", md:"4", "2xl":"1%"}} opacity={0} />
    </Flex>
  );
};
export default Header;
