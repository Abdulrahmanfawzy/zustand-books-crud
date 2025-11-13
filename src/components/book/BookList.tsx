import { useAppStore } from "../../store";
import type { IBook } from "../../types/book.type";
import BookItem from "./BookItem";

const BookList = () => {
  const { books } = useAppStore();

  return (
    <div className="border border-gray-300 p-5 w-[60%] ">
      <h2 className="text-2xl font-bold mb-4">Book List</h2>

      {books && books.length > 0 ? (
        books.map((book: IBook) => <BookItem key={book.id} book={book} />)
      ) : (
        <div>
          <section className="mt-2 bg-gray-50 text-gray-700 font-semibold text-sm py-3 px-2 rounded-lg">
            There are no books item now
          </section>
        </div>
      )}
    </div>
  );
};

export default BookList;
