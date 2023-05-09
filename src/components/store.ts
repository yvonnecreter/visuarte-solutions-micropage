import create from "zustand";

export interface MyState {
  colors: string[];
  setColors: (colors: string[]) => void;
}

type Store = {
  colors: string[];
  setColors: (value: string[]) => void;
};

const useStore = create<MyState>((set) => ({
  colors: ["#ce93d8", "#a5d6a7", "#81d4fa"],
  setColors: (colors: string[]) => set({ colors }),
 }));

export default useStore;