import { Link } from "react-router-dom";

const SearchBar = ({setNavopen,navopen }) => {
  return (
    <section className="bg-blue-600 sticky top-0 left-0 right-0 z-10 shadow-xl flex justify-around max-sm:flex-wrap py-4">
      <section className="flex justify-center items-center lg:hidden cursor-pointer" onClick={()=>{
        setNavopen(navopen?false:true)
      }}>
        <i className="fas fa-bars text-white fa-2x"></i>
      </section>
      <section className="flex justify-center items-center max-sm:order-3 max-sm:w-full max-sm:mt-4">
        <section className="relative">
          <input
            type="text"
            className="w-full focus:outline-none bg-transparent border-b-2 border-slate-400 hover:border-white transition-colors focus:border-orange-400 text-slate-200 ps-6"
          />
          <i className="fas fa-search text-slate-300 absolute top-0 left-0 mt-1"></i>
        </section>
      </section>
      <Link
        to={"/profile"}
        className="flex items-center me-4 hover:bg-blue-400 hover:bg-opacity-30 py-1 px-2 rounded transition-colors"
      >
        <p className="uppercase text-slate-100 me-2 font-bold">My Movies</p>
        <p className="rounded-full bg-slate-400 text-white text-center w-12 py-2 text-xl">
          P
        </p>
      </Link>
    </section>
  );
};

export default SearchBar;
