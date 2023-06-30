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
  useBreakpointValue,
} from "@chakra-ui/react";
import { slide as Slide } from "react-burger-menu";
import { HamburgerIcon } from "@chakra-ui/icons";

var styles = {
  bmBurgerButton: {
    position: "fixed",
    width: "36px",
    height: "30px",
    left: "30px",
    top: "30px",
  },
  bmBurgerBars: {
    background: "#373a47",
  },
  bmBurgerBarsHover: {
    background: "#a90000",
  },
  bmCrossButton: {
    height: "24px",
    width: "24px",
  },
  bmCross: {
    background: "#bdc3c7",
  },
  bmMenuWrap: {
    position: "fixed",
    height: "100%",
  },
  bmMenu: {
    background: "#1f1f20",
    /* padding: '2.5em 1.5em 0', */
    fontSize: "1.15em",
  },
  bmMorphShape: {
    fill: "#373a47",
  },
  bmItemList: {
    color: "#e0e0e0",
    padding: "2.5em 1.2em 0.8em 1.2em",
  },
  bmItem: {
    display: "inline-block",
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.3)",
  },
};

interface HeaderProps {
  navItems: { href: string; label: string }[];
}

const Header: React.FC<HeaderProps> = ({ navItems }) => {
  const desktop = useBreakpointValue({ base: false, lg: true });

  return desktop ? (
    <>
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
        py={{ base: "0px", md: "8px", xl: "10px", "2xl": "12px" }}
        px={{ base: "0px", md: "0px", xl: "10px", "2xl": "12px" }}
        display="flex"
        flex-wrap="true"
        color="white"
        alignItems="center"
      >
        <a href="#werte">
          <Image
            src="images/logo.png"
            ml={{ base: "3", md: "4", "2xl": "1%" }}
            h="100%"
            alt="visuarte"
            maxH={{ base: "25px", md: "40px", "2xl": "100%" }}
          />
        </a>
        <Spacer />
        {navItems.map((item) => (
          <Box key={item.href} ml={4} maxW={{ base: "12%" }}>
            <Link href={item.href} scrollBehavior={"smooth"}>
              <Text variant="header">{item.label}</Text>
            </Link>
          </Box>
        ))}
        <Divider w={{ base: "3", md: "4", "2xl": "1%" }} opacity={0} />
      </Flex>
    </>
  ) : (
    <Slide
      styles={styles}
      width="50%"
      customBurgerIcon={<HamburgerIcon h="100%" color="white" />}
    >
      <a
        id="logo"
        key="logo"
        className="menu-item"
        href="#werte"
        style={{ display: "block" }}
      >
        <Image
          src="images/logo.png"
          ml={{ base: "3", md: "4", "2xl": "1%" }}
          h="100%"
          alt="visuarte"
          maxH={{ base: "35px", md: "50px", "2xl": "100%" }}
        />
      </a>

      <Spacer h="20px"/>
      {navItems.map((item) => (
        <a
          id={item.label}
          key={item.label}
          className="menu-item"
          href={item.href}
          style={{ display: "block" }}
        >
          {item.label}
        </a>
      ))}
    </Slide>
  );
};

export default Header;
