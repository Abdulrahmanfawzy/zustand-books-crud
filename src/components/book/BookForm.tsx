import { useState } from "react";
import { validation } from "../../helper/validation";
import { useAppStore } from "../../store";

const inputStyles =
  "w-full py-2 px-2 border-2 border-gray-300 rounded-lg outline-0 duration-300 focus:border-blue-600";

const BookForm = () => {
  const [inputVal, setInputVal] = useState({
    id: Date.now(),
    title: "",
    price: "",
    desc: "",
  });
  const [errors, setErrors] = useState({
    title: "",
    price: "",
    desc: "",
  });
  const { addBook } = useAppStore();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    key: string
  ) => {
    setInputVal((prev) => ({ ...prev, id: Date.now(), [key]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validation(inputVal, setErrors)) {
      addBook(inputVal);
      setInputVal({ id: null, title: "", price: "", desc: "" });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-[60%] text-gray-600 mx-auto my-10"
    >
      <div className="mb-2">
        <label htmlFor="title">Title</label>
        <input
          value={inputVal.title}
          onChange={(e) => handleChange(e, "title")}
          type="text"
          id="title"
          className={inputStyles}
        />
        {errors.title && <span className="text-red-500">{errors.title}</span>}
      </div>
      <div className="mb-2">
        <label htmlFor="price">Price</label>
        <input
          value={inputVal.price}
          type="number"
          onChange={(e) => handleChange(e, "price")}
          id="price"
          className={inputStyles}
        />
        {errors.price && <span className="text-red-500">{errors.price}</span>}
      </div>
      <div className="mb-2">
        <label htmlFor="desc">description</label>
        <textarea
          value={inputVal.desc}
          id="desc"
          onChange={(e) => handleChange(e, "desc")}
          className={`${inputStyles} h-40`}
        ></textarea>
        {errors.desc && <span className="text-red-500">{errors.desc}</span>}
      </div>
      <button className="cursor-pointer w-full py-2.5 uppercase text-center bg-blue-600 rounded-md font-bold text-white text-sm">
        Add Book
      </button>
    </form>
  );
};

export default BookForm;
