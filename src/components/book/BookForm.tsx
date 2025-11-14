import { useState, useEffect } from "react";
import { validation } from "@/helper/validation";
import { useAppStore } from "@/store";
import type { Book } from "@/types";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import toast from "react-hot-toast";

const inputStyles =
  "w-full py-2 px-2 border-2 border-gray-300 rounded-lg outline-0 duration-300 focus:border-blue-600";

type BookFormState = Omit<Book, "price" | "id"> & {
  id: number | null;
  price: string | number;
};

type FormErrors = Partial<Record<keyof Omit<Book, "id">, string>>;

const BookForm = () => {
  const { addBook, bookUpdate, updateBookInBooksArr, editBook } = useAppStore();

  const initialFormState: BookFormState = {
    id: null,
    title: "",
    price: "",
    desc: "",
  };

  const [inputVal, setInputVal] = useState<BookFormState>(initialFormState);
  const [errors, setErrors] = useState<FormErrors>({});

  useEffect(() => {
    if (bookUpdate) {
      setInputVal({
        id: bookUpdate.id,
        title: bookUpdate.title,
        price: bookUpdate.price,
        desc: bookUpdate.desc,
      });
    } else {
      setInputVal(initialFormState);
    }
  }, [bookUpdate]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    key: keyof Omit<BookFormState, "id">
  ) => {
    setInputVal((prev) => ({ ...prev, [key]: e.target.value }));
  };

  const handleAddBook = () => {
    if (
      validation(
        inputVal,
        setErrors as React.Dispatch<React.SetStateAction<FormErrors>>
      )
    ) {
      addBook({ ...inputVal, id: Date.now(), price: Number(inputVal.price) });
      setInputVal({ id: null, title: "", price: "", desc: "" });
      toast.success("Book added successfully");
    }
  };

  const handleUpdateBook = () => {
    if (
      validation(
        inputVal,
        setErrors as React.Dispatch<React.SetStateAction<FormErrors>>
      )
    ) {
      updateBookInBooksArr({
        ...inputVal,
        id: inputVal.id as number,
        price: Number(inputVal.price),
      });
      editBook(null);
      setInputVal({ id: null, title: "", price: "", desc: "" });
      setErrors({});
      toast.success("Book updated successfully");
    }
  };

  return (
    <form className="w-[60%] text-gray-600 mx-auto my-10">
      <div className="mb-2">
        <label htmlFor="title">Title</label>
        <Input
          value={inputVal.title}
          onChange={(e) => handleChange(e, "title")}
          type="text"
          id="title"
          className="py-5 mt-1"
        />
        {errors.title && <span className="text-red-500">{errors.title}</span>}
      </div>
      <div className="mb-2">
        <label htmlFor="price">Price</label>
        <Input
          value={inputVal.price}
          type="number"
          onChange={(e) => handleChange(e, "price")}
          id="price"
          className="py-5 mt-1"
        />
        {errors.price && <span className="text-red-500">{errors.price}</span>}
      </div>
      <div className="mb-2">
        <label htmlFor="desc">description</label>
        <Textarea
          value={inputVal.desc}
          id="desc"
          onChange={(e) => handleChange(e, "desc")}
          className={`h-36 mt-1 mb-3`}
        ></Textarea>
        {errors.desc && <span className="text-red-500">{errors.desc}</span>}
      </div>

      <Button
        type="button"
        variant={"default"}
        className={`w-full cursor-pointer ${
          bookUpdate ? "bg-yellow-400" : "bg-blue-600"
        } hover:bg-gray-50 hover:text-black`}
        onClick={bookUpdate ? handleUpdateBook : handleAddBook}
      >
        {bookUpdate ? "Update Book" : "Add Book"}
      </Button>
    </form>
  );
};

export default BookForm;
