import { color, extendTheme } from "@chakra-ui/react";
import { defineStyleConfig } from "@chakra-ui/react";
import "@fontsource/open-sans";
import "@fontsource/rubik";

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
      mb: "2",
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
      fontSize: "md",
      color: "#6A6A6A",
      fontWeight: "bold",
    },
    emphasized: {
      fontSize: "md",
      color: "#A3A3A3",
      fontWeight: "bold",
    },
    lessEmphasized: {
      fontSize: "sm",
      fontWeight: "regular",
      color: "#A3A3A3",
      lineHeight: "1.2",
    },
    small: {
      fontSize: "xs",
      fontWeight: "regular",
      color: "#7A7A7A",
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
    bg: "#f7f7f7",
    px: "10vw",
    py: "5vh"
  },
  variants: {
    regular: {
      size: "lg",
      padding: "5",
      borderRadius: "0",
    },
    videoplayer: {
    px: "2",
    py: "2"
    },
  },
  defaultProps: {
    variant: "regular",
  },
});

const Checkbox = defineStyleConfig({
  baseStyle: {
    control: {
      borderColor: '#e8e8e8',
      borderWidth: "2",
      transition: 'background-color 0.1s ease-in-out',
      _checked: {
        bg: '#5f5f5f',
        borderColor: '#5f5f5f',
        color: 'white',
      },
      _hover: {
        bg: '#646464',
        borderColor: '#646464',
        color: 'white',
      },
      active: {
        bg: '#5f5f5f',
        borderColor: '#5f5f5f',
        color: 'white',
      }
    },
  },
  sizes: {
  },
  variants: {
    regular: {

    }
  },
  defaultProps: {
    variant: "regular"
  },
});

const Button = defineStyleConfig({
  baseStyle: {
    fontWeight: "normal",
    textTransform: "uppercase",
    letterSpacing: "widest",
    borderRadius: "0",
    fontSize: "sm",
    background: "#212121",
    color: "white",
    transition: 'background-color 0.2s ease-in-out',
    _hover: {
      bg: "#595959",
    },
    _active: {
      bg: "#3e3e3e"
    },
  },
  sizes: {
    // size-specific styles
  },
  variants: {
    regular: {
    }
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
      purple: "#390aad",
      green: "#a4e572",
      blue: "#67dbff",
    },
  },
  fonts: {
    heading: "Rubik",
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
