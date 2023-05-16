import { color, extendTheme, defineStyleConfig } from "@chakra-ui/react";
import "@fontsource/open-sans";
import "@fontsource/rubik";
import useStore from "@/components/store";
const colors = ['brand.purple', 'brand.blue', 'brand.green'];

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
  
})

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
    purple: {
      control: {
        borderColor: colors[0],
        _active: {
          bg: colors[0],
        },
      },
      icon: {
        color: colors[0],
      }
    },
    blue: {
      control: {
        borderColor: colors[1],
        _active: {
          bg: colors[1],
        },
      },
      icon: {
        color: colors[1],
      }
    },
    green: {
      control: {
        borderColor: colors[2],
        _active: {
          bg: colors[2],
        },
      },
      icon: {
        color: colors[2],
      }
    },
  },
  defaultProps: {
    variant: "regular",
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
      color: "brand.slightgrey",
      lineHeight: "1.2",
    },
    header: {
      color: "white",
      fontSize: {
        base: "xs",
        md: "md",
        "2xl": "md",
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
    bg: "linear-gradient(to top right, rgba(66,66,66, 0.3), rgba(117, 117, 117, 0.1))",
    filter: "blur-bg(150)",
    px: "5vw",
    py: "4vh",
    borderWidth: "0px",
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

const Input = defineStyleConfig({
  baseStyle: {
    _focus: {},
    field: {
      background: "transparent",
      borderWidth: "1px",
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
    borderWidth: "1px ",
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
