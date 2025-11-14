import BookDetails from "@/components/book/BookDetails";
import BookForm from "@/components/book/BookForm";
import BookList from "@/components/book/BookList";
import Navbar from "@/components/layout/Navbar";

const App = () => {
  return (
    <div className="">
      <Navbar />
      <BookForm />
      <div className="flex justify-between w-[70%] mb-10 mx-auto">
        <BookList />
        <BookDetails />
      </div>
      
    </div>
  );
};

export default App;
