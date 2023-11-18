// eslint-disable-next-line no-unused-vars
import { lightLogo, DarkLogo } from "../../assets/images/index.js";
import {
  filmIcon,
  starIcon,
  cinemaIcon,
  handIcon,
  navIcon,
  cartoonIcon,
  comedyIcon,
  actionIcon,
  camIcon,
  sadIcon,
  familyIcon,
  magicIcon,
  timeIcon,
  knifeIcon,
  musicIcon,
  mysteryIcon,
  loveIcon,
  alianIcon,
  tvIcon,
  deathIcon,
  swordIcon,
  westrianIcon,
} from "../../assets/icons/index.js";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";
import axios from "axios";

const SideBar = ({ handelApi_Url,setNavopen }) => {
  const icon = [
    filmIcon,
    starIcon,
    cinemaIcon,
    handIcon,
    navIcon,
    cartoonIcon,
    comedyIcon,
    actionIcon,
    camIcon,
    sadIcon,
    familyIcon,
    magicIcon,
    timeIcon,
    knifeIcon,
    musicIcon,
    mysteryIcon,
    loveIcon,
    alianIcon,
    tvIcon,
    deathIcon,
    swordIcon,
    westrianIcon,
  ];

  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(true);
  const getGenre = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ODc0NDUyNGQzMzAyYmZlY2ZkZDQ0YjhiMTUxOWE1OCIsInN1YiI6IjY1NTM5YzIzMDgxNmM3MDBmZDJmMzkxNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ImRpmrJyoOXdqFlZh-OPp667du1STG-MhJD4NR_HlDk",
      },
    };
    const data = await axios.get(
      "https://api.themoviedb.org/3/genre/movie/list?language=en-US",
      options
    );
    const res = await data.data;
    setGenres(res.genres);
    setLoading(false)
  };
  useEffect(() => {
    getGenre();
  }, []);
  return (
    <section className="max-lg:w-[100%] lg:w-[250px] h-[100vh] border-r-2  sticky top-0 overflow-y-scroll ">
      <section className="mt-4 border-b-2 pb-3">
        <picture className="flex justify-center max-lg:justify-between  items-center">
          <img src={lightLogo} alt="filmpire logo" width={150} />
          <i className="fas fa-x fa-2x me-4 cursor-pointer x " onClick={()=>{
            setNavopen(false)
          }}></i>
        </picture>
      </section>
      <section className="mt-3 relative">
        <p className="text-slate-500 font-bold px-3 text-sm sticky top-0 z-10 bg-white py-3 ">
          Categories
        </p>
        <ul className="list-none mt-3 border-b-2 pb-3">
          <li className="mt-1 px-3 py-2 hover:cursor-pointer hover:bg-slate-100 transition-all">
            <Link to={"/"} className="flex items-center">
              <img src={filmIcon} alt="film icon" width={"30px"} />
              <p
                className="text-lg ms-4"
                onClick={() =>
                  handelApi_Url(
                    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1"
                  )
                }
              >
                Popular
              </p>
            </Link>
          </li>
          <li className="mt-1 px-3 py-2 hover:cursor-pointer hover:bg-slate-100 transition-all">
            <Link
              to={"/"}
              className="flex items-center"
              onClick={() =>
                handelApi_Url(
                  "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1"
                )
              }
            >
              <img src={starIcon} alt="star icon" width={"30px"} />
              <p className="text-lg ms-4">Top Rated</p>
            </Link>
          </li>
          <li className="mt-1 px-3 py-2 hover:cursor-pointer hover:bg-slate-100 transition-all">
            <Link
              to={"/"}
              className="flex items-center"
              onClick={() =>
                handelApi_Url(
                  "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1"
                )
              }
            >
              <img src={cinemaIcon} alt="cinema icon" width={"30px"} />
              <p className="text-lg ms-4">Upcoming</p>
            </Link>
          </li>
        </ul>
      </section>
      <section className="mt-3 relative">
        <p className="text-slate-500 font-bold px-3 text-sm sticky top-0 z-10 bg-white py-3 ">
          Genres
        </p>
        <ul className="list-none mt-3 border-b-2 pb-3">
          {loading ? (
            <section className="flex justify-center">
              <ClipLoader color="#2196f3" size={50} />
            </section>
          ) : (
            genres.map((genre, index) => {
              return (
                <li
                  className="mt-1 px-3 py-2 hover:cursor-pointer hover:bg-slate-100 transition-all"
                  key={index}
                >
                  <Link
                    to={"/"}
                    className="flex items-center"
                    onClick={() =>
                      handelApi_Url(
                        `https://api.themoviedb.org/3/discover/movie?with_genres=${genre.id}&language=en-US&page=1`
                      )
                    }
                  >
                    <img src={icon[index]} alt="film icon" width={"30px"} />
                    <p
                      className="text-lg ms-4"
                      onClick={() =>
                        handelApi_Url(
                          "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1"
                        )
                      }
                    >
                      {genre.name}
                    </p>
                  </Link>
                </li>
              );
            })
          )}
        </ul>
      </section>
    </section>
  );
};

export default SideBar;
