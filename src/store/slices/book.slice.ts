import { StateCreator } from "zustand";
import type { IBook } from "../../types/book.type";

export interface IBookSlice {
  books: IBook[];
  book: IBook | null;
  bookUpdate: IBook | null;
  addBook: (book: IBook) => void;
  readBook: (book: IBook) => void;
  deleteBook: (id: number) => void;
  editBook: (book: IBook | null) => void;
  updateBookInBooksArr: (updatedBook: IBook) => void;
}

export const bookSlice: StateCreator<IBookSlice> = (set, get) => ({
  books: [],
  book: null,
  bookUpdate: null,
  addBook: (book: IBook) => set((state) => ({ books: [...state.books, book] })),
  readBook: (book) => {
    const bookToRead = get().books.find((el: IBook) => el.id === book.id);
    set({ book: bookToRead });
  },
  deleteBook: (id: number) =>
    set({ books: get().books.filter((el) => el.id !== id) }),

  editBook: (book) => set({ bookUpdate: book }),

  updateBookInBooksArr: (updatedBook: IBook) =>
    set((state) => ({
      books: state.books.map((book) =>
        book.id === updatedBook.id ? updatedBook : book
      ),
    })),
});
