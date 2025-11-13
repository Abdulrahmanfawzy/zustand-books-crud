import { create } from "zustand";
import { bookSlice } from "./slices/book.slice";

export const useAppStore = create((...a) => ({ ...bookSlice(...a) }));
