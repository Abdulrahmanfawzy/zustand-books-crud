import type { IBook } from "../../types/book.type";

export const bookSlice = (set, get) => ({
  books: [],
  book: null,
  addBook: (book: IBook) => set((state) => ({ books: [...state.books, book] })),
  readBook: (book) => {
    const bookToRead = get().books.find((el: IBook) => el.id === book.id);
    set((state) => ({ book: bookToRead }));
  },
  deleteBook: (id: number) =>
    set((state) => ({ books: get().books.filter((el) => el.id !== id) })),
});
