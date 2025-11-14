import toast from "react-hot-toast";
import { useAppStore } from "../../store";
import type { IBook } from "../../types/book.type";

const buttonStyles = `py-2 px-4 cursor-pointer rounded-md text-white text-sm`;

const BookItem = ({ book }: { book: IBook }) => {
  const { readBook, deleteBook, editBook } = useAppStore();

  const getBook = () => {
    readBook(book);
  };

  const deleteSpecificBook = () => {
    deleteBook(book.id);
    toast.success("Book deleted successfully");
  };

  const editSpecificBook = () => {
    editBook(book);
  };

  return (
    <div className="flex justify-between items-center mb-2">
      <h2>{book.title}</h2>
      <div className="flex gap-2">
        <button onClick={getBook} className={`${buttonStyles} bg-blue-600`}>
          Read
        </button>
        <button
          onClick={editSpecificBook}
          className={`${buttonStyles} bg-yellow-400`}
        >
          Edit
        </button>
        <button
          onClick={deleteSpecificBook}
          className={`${buttonStyles} bg-red-600`}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default BookItem;
