import type { IBook } from "../types/book.type";

export const validation = (
  inputVal: IBook,
  setErrors: (val: IBook) => void
) => {
  const customErrors = { title: "", price: "", desc: "" };
  let isValide: boolean;

  if (inputVal.title.trim()) {
    isValide = true;
  } else {
    customErrors.title = "title is required!";
    isValide = false;
  }
  if (inputVal.price) {
    isValide = true;
  } else {
    customErrors.price = "price is required!";
    isValide = false;
  }
  if (inputVal.desc.trim().length > 10) {
    isValide = true;
  } else if (inputVal.desc.length < 10 && inputVal.desc.length > 0) {
    customErrors.desc = "description length must be more than 10 characters";
    isValide = false;
  } else {
    customErrors.desc = "description is required!";
    isValide = false;
  }
  setErrors(customErrors);
  return isValide;
};
