import create from "zustand";
import { devtools } from "zustand/middleware";

const useSharedStore = create(
  devtools((set) => ({
    gifs: [],
    setGifs: (gifs) => set({ gifs }),
  })),
  "iperform-shared"
);

export default useSharedStore;