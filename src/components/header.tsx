import * as React from 'react';
import { Link, Box, Flex, Spacer } from '@chakra-ui/react';

interface HeaderProps {
  logo: React.ReactNode;
  navItems: NavItem[];
}

const Header: React.FC<HeaderProps> = ({ logo, navItems }) => {
  return (
    <Flex bg="black" w="100%" zIndex={9999} left={0} position="fixed" p={4} color="white" alignItems="center" >
      <Box>{logo}</Box>
      <Spacer />
      {navItems.map((item) => (
        <Box key={item.href} ml={4}>
          <Link href={item.href}>{item.label}</Link>
        </Box>
      ))}
    </Flex>
  );
};
export default Header;
