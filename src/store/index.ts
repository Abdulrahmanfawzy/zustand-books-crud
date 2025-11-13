import { create } from "zustand";
import { bookSlice } from "./slices/book.slice";
import { persist } from "zustand/middleware";

export const useAppStore = create(
  persist((...a) => ({ ...bookSlice(...a) }), {
    name: "books",
    getStorage: () => localStorage,
  })
);
