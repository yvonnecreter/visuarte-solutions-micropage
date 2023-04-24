import * as React from "react";
import {
  Link,
  Box,
  Flex,
  Heading,
  Text,
  Spacer,
  Divider,
} from "@chakra-ui/react";

interface HeaderProps {
  logo: React.ReactNode;
  navItems: { href: string; label: string }[];
}

const Header: React.FC<HeaderProps> = ({ logo, navItems }) => {
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
      p={4}
      display="flex"
      flex-wrap="true"
      color="white"
      alignItems="center"
    >
      <Divider w={{xl: 0, "2xl":4}} opacity={0} />
      <Box h="100%" height="3vw" maxH="45px">
        {logo}
      </Box>
      <Spacer />
      {navItems.map((item) => (
        <Box key={item.href} ml={4}>
          <Link href={item.href}>
            <Text variant="header">{item.label}</Text>
          </Link>
        </Box>
      ))}
      <Divider w={{xl: 0, "2xl":4}} opacity={0} />
    </Flex>
  );
};
export default Header;
