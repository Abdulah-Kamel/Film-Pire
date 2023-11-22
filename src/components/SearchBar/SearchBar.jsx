import { useEffect, useState } from "react";

const SearchBar = ({ setNavopen, handelApi_Url }) => {
  const [search, setSearch] = useState("");
  const handelSearch = () => {
    handelApi_Url(
      `https://api.themoviedb.org/3/search/movie?query=${search}&language=en-US`
    );
  };
  const handelInputChange = (value) => {
    if (value.trim() != "") {
      setSearch(value.trim());
      console.log(search);
    }
  };
  const handelKeyPress = (e) => {
    if (e.key == "Enter") {
      handelInputChange(e.target.value);
      handelSearch();
    }
  };

  useEffect(() => {
    handelSearch();
  }, [search]);
  return (
    <section className="bg-blue-600 sticky top-0 left-0 right-0 z-10 shadow-xl flex max-[350px]:justify-normal max-sm:justify-around justify-between items-center max-[350px]:flex-wrap py-6 px-4">
      <section
        className="flex justify-center items-center lg:hidden cursor-pointer"
        onClick={() => {
          setNavopen(true);
        }}
      >
        <i className="fas fa-bars text-white fa-2x"></i>
      </section>
      <section className="max-[350px]:mt-4 max-[350px]:order-3 flex justify-center w-full">
        <section className="relative ">
          <input
            type="text"
            className="w-full focus:outline-none bg-transparent border-b-2 border-slate-400 hover:border-white transition-colors focus:border-orange-400 text-slate-200 ps-6 sm:pe-36"
            onKeyUp={(e) => {
              handelKeyPress(e);
            }}
          />
          <i className="fas fa-search text-slate-300 absolute top-0 left-0 mt-1"></i>
        </section>
      </section>
    </section>
  );
};

export default SearchBar;
