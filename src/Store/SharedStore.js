import create from "zustand";
import { devtools } from "zustand/middleware";

const useSharedStore = create(
  devtools((set) => ({
    gifs: [],
    setGifs: (gifs) => set({ gifs }),
  })),
);

export default useSharedStore;