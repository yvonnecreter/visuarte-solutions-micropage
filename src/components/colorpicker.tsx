import create from "zustand";
import { Box, FormControl, Input, Button } from "@chakra-ui/react";
import { persist } from "zustand/middleware";

interface MyState {
  colors: string[];
  setColors: (colors: string[]) => void;
}

const useStore = create<MyState>((set) => ({
  colors: ["#ce93d8", "#a5d6a7", "#81d4fa"],
  setColors: (colors) => set({ colors }),
}));



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

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <Box my="10px">
      <form onSubmit={handleSubmit}>
        <FormControl>
          <Input
            placeholder="col1"
            value={colors[0]}
            onChange={handleColorChange(0)}
          />
          <Input
            placeholder="col2"
            value={colors[1]}
            onChange={handleColorChange(1)}
          />
          <Input
            placeholder="col3"
            value={colors[2]}
            onChange={handleColorChange(2)}
          />
          <Button type="submit" w="100%">
            Senden
          </Button>
        </FormControl>
      </form>
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
