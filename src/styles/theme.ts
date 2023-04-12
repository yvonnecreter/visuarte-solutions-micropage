import { color, extendTheme } from "@chakra-ui/react";
import { defineStyleConfig } from "@chakra-ui/react";
import "@fontsource/open-sans";
import "@fontsource/rubik";

/* <Text fontSize={{ base: '24px', md: '40px', lg: '56px' }}>This is responsive text</Text> */

const Heading = defineStyleConfig({
  baseStyle: {
    fontWeight: "normal",
    color: "brand_1",
  },
  variants: {
    layer1: {
      fontSize: "4xl",
      fontWeight: "black",
      color: "#bdbdbd",
      mb: "2",
    },
    layer2: {
      fontSize: "lg",
      fontWeight: "reg",
      color: "#9e9e9e",
    },
    layer3: {
      fontSize: "md",
      fontWeight: "bold",
      color: "#757575",
      mb: "2",
    },
    layer4: {
      fontSize: "lg",
      fontWeight: "light",
      color: "#616161",
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
    color: "#9e9e9e",
  },
  variants: {
    regular: {
      fontSize: "sm",
      fontWeight: "regular",
      color: "#9e9e9e",
    },
    light: {
      color: "#9e9e9e",
    },
    stronglyEmphasized: {
      fontSize: "md",
      color: "#bdbdbd",
      fontWeight: "bold",
    },
    emphasized: {
      fontSize: "md",
      color: "#9e9e9e",
      fontWeight: "bold",
    },
    lessEmphasized: {
      fontSize: "sm",
      fontWeight: "regular",
      color: "#9e9e9e",
      lineHeight: "1.2",
    },
    small: {
      fontSize: "xs",
      fontWeight: "regular",
      color: "#9e9e9e",
      lineHeight: "1.2",
    },
    header: {
      color: "white",
      fontSize: {
        base: "xs",
        md: "sm",
        lg: "sm",
      },
    },
    footer: {
      color: "#757575",
      fontSize: {
        base: "xs",
        md: "sm",
        lg: "sm",
      },
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
    borderRadius: "5",
    bg: "linear-gradient(to top right, rgba(66,66,66, 0.8), rgba(117, 117, 117, 0.5))",
    filter: "blur-bg(50)",
    px: "5vw",
    py: "4vh",
    borderWidth: "2px",
    borderColor: "rgba(117, 117, 117, 0.3)",
  },
  variants: {
    regular: {},
    videoplayer: {
      px: "2",
      py: "2",
    },
  },
  defaultProps: {
    variant: "regular",
  },
});

/* Cheatsheet for Checkbox: https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes */
const Checkbox = defineStyleConfig({
  baseStyle: {
    control: {
      borderColor: "brand_4",
      borderWidth: "2",
      transition: "background-color 0.1s ease-in-out",
      _checked: {
        bg: "#5f5f5f",
        borderColor: "#5f5f5f",
        color: "white",
      },
      _hover: {
        bg: "#646464",
        borderColor: "#646464",
        color: "white",
      },
      _active: {
        bg: "#5f5f5f",
        borderColor: "#5f5f5f",
        color: "white",
      },
      _focus: {
        bg: "#5f5f5f",
        borderColor: "#5f5f5f",
        color: "white",
      },
    },
  },
  sizes: {},
  variants: {
    regular: {},
  },
  defaultProps: {
    variant: "regular",
  },
});

const Input = defineStyleConfig({
  baseStyle: {
    _focus: {},
    field: {
      background: "transparent",
      borderWidth: "1px",
      borderColor: "#9e9e9e",
        color: "#eeeeee",
      _hover: {
      },
    },
    sizes: {},
    variants: {
      regular: {},
    },
    defaultProps: {
      variant: "regular",
    },
  },
});

    /*    border: '1px solid',
    borderColor: 'gray.200', */
    /* borderRadius: "full", */
const Textarea = defineStyleConfig({
  baseStyle: {
    background: "transparent",
    borderWidth: "1px ",
    borderColor: "#9e9e9e",
    color: "#e0e0e0",
    _focus: {}
  },
  variants: {
    regular: {},
  },
  defaultProps: {
    variant: "regular",
  },
});

const Button = defineStyleConfig({
  baseStyle: {
    fontWeight: "normal",
    textTransform: "uppercase",
    letterSpacing: "widest",
    borderRadius: "50px",
    fontSize: "sm",
    background: "#212121",
    color: "white",
    transition: "background-color 0.2s ease-in-out",
    _hover: {
      bg: "#000000",
    },
    _active: {
      bg: "#212121",
    },
  },
  sizes: {
    // size-specific styles
  },
  variants: {
    regular: {},
    // variant-specific styles
  },
  defaultProps: {
    // default values for props
    variant: "regular",
  },
});

const theme = extendTheme({
  colors: {
    brand: {
      purple: "#ce93d8",
      green: "#a5d6a7",
      blue: "#81d4fa",
    },
  },
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
    Input,
    Textarea,
  },
});

export default theme;
