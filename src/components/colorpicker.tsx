import create from "zustand";
import {
  Box,
  FormControl,
  Input,
  Button,
  Heading,
  SimpleGrid,
  GridItem,
  GridItemProps,
} from "@chakra-ui/react";
import useStore from "./store";

export default function ColorPicker() {
  const [colors, setColors] = useStore((state) => [
    state.colors,
    state.setColors,
  ]);

  const handleColorChange =
    (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
      const newColors = [...colors];
      newColors[index] = event.target.value;
      setColors(newColors);
    };

  const handleReset = () => {
    setColors(["#ce93d8", "#a5d6a7", "#81d4fa"]);
  };

  const openColorSelection = (i: number) => {
    let colorInput = document.createElement("input");
    colorInput.type = "color";
    colorInput.value = colors[i];
    colorInput.addEventListener("change", function (event) {
      if (event.target) {
        let inputElement = event.target as HTMLInputElement;
        let selectedColor = inputElement.value;
        let c = colors;
        c[i] = selectedColor;
        setColors(c);
        /* gridItem.appendChild(colorInput); */
      }
    });
    colorInput.click();
  };

  return (
    <Box>
      <Heading mt="20px">Colorpicker</Heading>
      <FormControl>
        <SimpleGrid
          templateRows={"1fr 1fr 1fr"}
          templateColumns={"1fr 1fr"}
          autoFlow="column"
        >
          <GridItem>
            <Input
              placeholder="col1"
              value={colors[0]}
              onChange={handleColorChange(0)}
              my="3px"
            />
          </GridItem>
          <GridItem>
            <Input
              placeholder="col2"
              value={colors[1]}
              onChange={handleColorChange(1)}
              my="3px"
            />
          </GridItem>
          <GridItem>
            <Input
              placeholder="col3"
              value={colors[2]}
              onChange={handleColorChange(2)}
              my="3px"
            />
          </GridItem>
          <GridItem
            onClick={() => openColorSelection(0)}
            bg={colors[0]}
            m="15px"
            borderRadius={"full"}
          ></GridItem>
          <GridItem
            onClick={() => openColorSelection(1)}
            bg={colors[1]}
            m="15px"
            borderRadius={"full"}
          ></GridItem>
          <GridItem
            onClick={() => openColorSelection(2)}
            bg={colors[2]}
            m="15px"
            borderRadius={"full"}
          ></GridItem>
        </SimpleGrid>
        <Button type="submit" onClick={handleReset} w="100%" my="3px">
          reset
        </Button>
      </FormControl>
    </Box>
  );
}

/* persist(
    (set) => ({
      colors: ["#ce93d8", "#a5d6a7", "#81d4fa"],,
      setColors: (colors) => set({ colors }),
    }),
    {
      name: "color-storage",
      getStorage: () => sessionStorage,
    }
  ); */
