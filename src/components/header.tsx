import * as React from 'react';
import { Link, Box, Flex, Heading, Text, Spacer } from '@chakra-ui/react';

interface HeaderProps {
  logo: React.ReactNode;
  navItems: { href: string; label: string }[];
}

const Header: React.FC<HeaderProps> = ({ logo, navItems }) => {
  return (
    <Flex bg="black" w="100%" zIndex={9999} left={0} 
    height={{
      base:"5vh",
      md:"5vh",
      lg: "5vh"}} 
    position="fixed" p={4} 
    display="flex"
    flex-wrap="true"
    color="white" alignItems="center" >
      <Box h="100%" minH="2vw">{logo}</Box>
      <Spacer />
      {navItems.map((item) => (
        <Box key={item.href} ml={4}>
          <Link href={item.href}>
            <Text variant="header">
            {item.label}</Text></Link>
        </Box>
      ))}
    </Flex>
  );
};
export default Header;
