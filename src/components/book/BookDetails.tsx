import { useAppStore } from "../../store";

const BookDetails = () => {
  const { book } = useAppStore();
  return (
    <div className="w-[37%] list-none">
      <h2 className="text-2xl mt-5 font-bold mb-2">Book Details</h2>
      {book ? (
        <div>
          <li className="mb-2">
            <strong>Id:</strong> {book?.id}
          </li>
          <li className="mb-2">
            <strong>Title:</strong> {book?.title}
          </li>
          <li className="mb-2">
            <strong>price:</strong> ${book?.price}
          </li>
          <li>
            <strong>description:</strong> {book?.desc}
          </li>
        </div>
      ) : (
        <section className="mt-2 bg-gray-50 text-gray-700 font-semibold text-sm py-3 px-2 rounded-lg">
          There is no selected book
        </section>
      )}
    </div>
  );
};

export default BookDetails;
