import { color, extendTheme, defineStyleConfig } from "@chakra-ui/react";
import "@fontsource/open-sans";
import "@fontsource/rubik";

/* <Text fontSize={{ base: '24px', md: '40px', lg: '56px' }}>This is responsive text</Text> */

const Heading = defineStyleConfig({
  baseStyle: {
    fontWeight: "normal",
    color: "brand.white",
  },
  variants: {
    layer1: {
      fontSize: "4xl",
      fontWeight: "black",
      color: "brand.white",
      mb: "2",
    },
    layer2: {
      fontSize: "lg",
      fontWeight: "reg",
      color: "brand.lightgrey",
    },
    layer3: {
      fontSize: "md",
      fontWeight: "bold",
      color: "brand.grey",
      mb: "2",
    },
    layer4: {
      fontSize: "lg",
      fontWeight: "light",
      color: "brand.grey",
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
    color: "brand.darkgrey",
  },
  variants: {
    regular: {
      fontSize: "sm",
      fontWeight: "regular",
      color: "brand.grey",
    },
    light: {
      color: "brand.grey",
    },
    stronglyEmphasized: {
      fontSize: "md",
      color: "brand.lightgrey",
      fontWeight: "bold",
    },
    emphasized: {
      fontSize: "md",
      color: "brand.lightgrey",
      fontWeight: "bold",
    },
    lessEmphasized: {
      fontSize: "sm",
      fontWeight: "regular",
      color: "brand.lightgrey",
      lineHeight: "1.2",
    },
    small: {
      fontSize: "xs",
      fontWeight: "regular",
      /* color: "#212121", */
      color: "brand.slightgrey",
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
      color: "brand.slightgrey",
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
      borderColor: "brand.slightgrey",
      bg: "transparent",
      borderWidth: "2",
      transition: "background-color 0.1s ease-in-out",
      _active: {
        bg: "brand.slightgrey",
      },
    },
    icon: {
      color: "brand.slightgrey",
    }
  },
  sizes: {},
  variants: {
    regular: {},
    /* purple: {
      control: {
        borderColor: "brand.purple", //main color
        bg: "transparent",
        borderWidth: "2",
        transition: "background-color 0.1s ease-in-out",
        _checked: {
          bg: "brand.purple",
          borderColor: "brand.purple",
        },
        _hover: {
          bg:"transparent",
          borderColor: "brand.purple",
        },
        _active: {
          bg: "brand.purple",
          borderColor: "brand.purple",
        },
        _focus: {
          bg:"transparent",
          borderColor: "brand.purple",
        },
        _after: {
          bg: "brand.purple",
          borderColor: "brand.purple",
        },
      },
    }, */
    purple: {
      control: {
        borderColor: "brand.purple",
        _active: {
          bg: "brand.purple",
        },
      },
      icon: {
        color: "brand.purple",
      }
    },
    blue: {
      control: {
        borderColor: "brand.blue",
        _active: {
          bg: "brand.blue",
        },
      },
      icon: {
        color: "brand.blue",
      }
    },
    green: {
      control: {
        borderColor: "brand.green",
        _active: {
          bg: "brand.green",
        },
      },
      icon: {
        color: "brand.green",
      }
    },
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
      borderWidth: "2px",
      borderColor: "brand.darkgrey",
      color: "brand.white",
      _hover: {},
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
    borderWidth: "2px ",
    borderColor: "brand.darkgrey",
    color: "brand.white",
    _focus: {},
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
    background: "brand.lightblack",
    color: "white",
    transition: "background-color 0.2s ease-in-out",
    _hover: {
      bg: "brand.black",
    },
    _active: {
      bg: "brand.lightblack",
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
      /* OLD COLOR PALETTE
      white: "#e0e0e0",
      lightgrey: "#bdbdbd",
      grey: "#9e9e9e",
      darkgrey: "#616161",
      slightgrey: "#757575",
      black: "#000000",
      lightblack: "#212121" */
      white: "#e0e0e0",
      lightgrey: "#e0e0e0",
      grey: "#bdbdbd",
      darkgrey: "#9e9e9e",
      slightgrey: "#9e9e9e",
      black: "#000000",
      lightblack: "#212121",
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
