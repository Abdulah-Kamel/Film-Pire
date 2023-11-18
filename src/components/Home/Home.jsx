import axios from "axios";
import { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";

const Home = ({ api_Url }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  let fullStar = 0,
    halfStar = 0,
    emptyStar = 0,totalStars=5,stars=[];
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ODc0NDUyNGQzMzAyYmZlY2ZkZDQ0YjhiMTUxOWE1OCIsInN1YiI6IjY1NTM5YzIzMDgxNmM3MDBmZDJmMzkxNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ImRpmrJyoOXdqFlZh-OPp667du1STG-MhJD4NR_HlDk",
    },
  };
  async function getMovies() {
    setLoading(true);
    const data = await axios.get(api_Url, options);
    const responce = await data.data.results;
    console.log(responce);
    setMovies(responce);
    setLoading(false);
  }
  useEffect(() => {
    getMovies();
  }, [api_Url]);

  return (
    <section className=" flex items-center  gap-y-10 max-md:justify-center flex-wrap w-full px-5 py-8 max-md:py-12">
      {!loading ? (
        movies?.map((movie) => {
          return (
            <section
              className="max-xl:w-[33.333%] max-sm:w-[100%]  max-lg:w-[50%] max-lg:px-4 px-2 xl:w-[25%] text-center hover:cursor-pointer"
              key={movie.original_title}
            >
              <section>
                <img
                  src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path}
                  alt={movie.original_title.substring(0, 15) + "..."}
                  className="rounded-lg hover:scale-105 transition-transform w-full"
                />
                <section className="flex items-center justify-between mt-4 ">
                <p className="text-2xl">
                  {movie.original_title.length > 12
                    ? movie.original_title.substring(0, 15) + "..."
                    : movie.original_title}
                </p>
                <p className="flex items-center">
                <span>{movie.vote_average}</span>
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
    </section>
  );
};

export default Home;
