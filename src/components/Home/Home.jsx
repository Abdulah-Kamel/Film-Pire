import axios from "axios";
import { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";

// eslint-disable-next-line react/prop-types
const Home = ({ api_Url, page, setPage }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(0);
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ODc0NDUyNGQzMzAyYmZlY2ZkZDQ0YjhiMTUxOWE1OCIsInN1YiI6IjY1NTM5YzIzMDgxNmM3MDBmZDJmMzkxNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ImRpmrJyoOXdqFlZh-OPp667du1STG-MhJD4NR_HlDk",
    },
  };
  async function getMovies() {
    console.log(api_Url + `&page=${page}`);
    setLoading(true);
    const data = await axios.get(api_Url + `&page=${page}`, options);
    const responce = await data.data;
    console.log(responce);
    setTotalPages(responce.total_pages);
    console.log(totalPages);
    setMovies(responce.results);
    setLoading(false);
  }

 

  useEffect(() => {
    getMovies();
  }, [api_Url, page]);

  return (
    <section className=" flex items-center  gap-y-10 max-md:justify-center flex-wrap w-full px-5 py-8 max-md:py-12">
      {!loading ? (
        movies?.map((movie, index) => {
          return (
            <section
              className="max-xl:w-[33.333%] max-sm:w-[100%]  max-lg:w-[50%] max-lg:px-4 px-2 xl:w-[25%] text-center hover:cursor-pointer"
              key={index}
            >
              <section>
                <img
                  src={ movie.poster_path==null?"https://placehold.co/250x350": "https://image.tmdb.org/t/p/w500/" + movie.poster_path}
                  alt={movie.original_title.substring(0, 15) + "..."}
                  className="rounded-lg hover:scale-110 transition-transform w-full"
                />
                <section className="flex items-center justify-between mt-4 ">
                  <p className="text-2xl">
                    {movie.original_title.length > 12
                      ? movie.original_title.substring(0, 12) + "..."
                      : movie.original_title}
                  </p>
                  <p className="flex items-center">
                    <span className="font-bold">
                      {Math.floor(movie.vote_average)}
                    </span>
                    <span className="fas fa-star fa-2x text-yellow-400"></span>
                  </p>
                </section>
              </section>
            </section>
          );
        })
      ) : (
        <section className="flex justify-center w-full py-2">
          <ClipLoader color="#2196f3" size={60} />
        </section>
      )}
      {loading || totalPages == 1 ? null : (
        <section className="flex justify-center items-center w-full">
          <button
            className="px-4 shadow-lg text-2xl py-1 rounded bg-blue-500 text-white"
            onClick={() => {
              page > 1 ? setPage(page - 1) : null;
            }}
          >
            -
          </button>
          <p className=" text-3xl mx-4">{page}</p>
          <button
            className="px-4 shadow-lg text-2xl py-1 rounded bg-blue-500 text-white"
            onClick={() => {
              totalPages > page ? setPage(page + 1) : null;
            }}
          >
            +
          </button>
        </section>
      )}
    </section>
  );
};

export default Home;
