import { color, extendTheme } from "@chakra-ui/react";
import { defineStyleConfig } from "@chakra-ui/react";
import '@fontsource/open-sans'

/* <Text fontSize={{ base: '24px', md: '40px', lg: '56px' }}>This is responsive text</Text> */

const Heading = defineStyleConfig({
  baseStyle: {
    fontWeight: "normal",
    color: "#5F5F5F",
  },
  variants: {
    layer1: {
      fontSize: "4xl",
      fontWeight: "black",
      color: "#5F5F5F",
      mb: "2"
    },
    layer2: {
      fontSize: "lg",
      fontWeight: "light",
      color: "#A3A3A3",
    },
    layer3: {
      fontSize: "md",
      fontWeight: "bold",
      color: "#7A7A7A",
    },
    layer4: {
      fontSize: "lg",
      fontWeight: "light",
      color: "#A3A3A3",
    },
  },
  defaultProps: {
    variant: "layer1",
  },
});

const Text = defineStyleConfig({
  baseStyle: {
    fontSize: "md",
    fontWeight: "regular",
    color: "#7A7A7A",
  },
  variants: {
    regular: {
    fontSize: "sm",
    fontWeight: "regular",
    color: "#7A7A7A",
    },
    light: {
      color: "#A3A3A3",
    },
    stronglyEmphasized: {
      fontSize:"md",
      color: "#6A6A6A",
      fontWeight: "bold",
    },
    emphasized: {
      fontSize:"md",
      color: "#A3A3A3",
      fontWeight: "bold",
    },
    small: {
      fontSize: "xs",
      fontWeight: "regular",
      color: "#7A7A7A",
      lineHeight: "1.2"
    },
    responsive: {
      scaleOnHover: {
        _hover: {
          filter: "brightness(1.1)",
          transform: "scale(1.1)",
        },
      },
    },
    defaultProps: {
      variant: "regular",
    },
  },
});

const Card = defineStyleConfig({
  baseStyle: {
    size: "lg",
    padding: "5",
    borderRadius: "0",
  },
  variants: {
    regular: {
      size: "lg",
      padding: "5",
      borderRadius: "0",
    },
    videoplayer: {
       padding: "2",
    }
  },
  defaultProps: {
    variant: "regular"
  }
});

const Checkbox = defineStyleConfig({
  baseStyle: {
    borderWidth: "1"
  },
})

const Button = defineStyleConfig({
  baseStyle: {
    fontWeight: "normal",
    textTransform: "uppercase",
    letterSpacing: "widest",
    borderRadius: "base",
    fontSize: "sm",
    bg: "black",
    variant: "outline",
    background: "orange.500",
    color: "white",
  },
});

const theme = extendTheme({
  colors: {
    brand: {
      purple: "#390aad",
      green: "#a4e572",
      blue: "#67dbff"
    },},
  fonts: {
    heading: "Open Sans",
    body: "Open Sans",
  },
  components: {
    Button,
    Heading,
    Text,
    Card,
    Checkbox,
  },
});

export default theme;
