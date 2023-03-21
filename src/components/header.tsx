import * as React from 'react';
import { Link, Box, Flex, Heading, Text, Spacer } from '@chakra-ui/react';

interface HeaderProps {
  logo: React.ReactNode;
  navItems: { href: string; label: string }[];
}

const Header: React.FC<HeaderProps> = ({ logo, navItems }) => {
  return (
    <Flex bg="black" w="100%" zIndex={9999} left={0} height={50} position="fixed" p={4} color="white" alignItems="center" >
      <Box>{logo}</Box> <Spacer />
      {navItems.map((item) => (
        <Box key={item.href} ml={4}>
          <Link href={item.href}>{item.label}</Link>
        </Box>
      ))}
    </Flex>
  );
};
export default Header;
