const Navbar = () => {
  return (
    <header className="bg-gray-700">
      <div className="flex justify-between text-white items-center py-3 w-[90%] mx-auto">
        <h2 className="uppercase font-bold text-2xl">My books</h2>
        <button className="border border-gray-200 py-2 px-5 rounded-md">
          Login
        </button>
      </div>
    </header>
  );
};

export default Navbar;
