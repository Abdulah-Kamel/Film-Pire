import axios from "axios";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Profile = () => {
  let requestToken = "";

  const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ODc0NDUyNGQzMzAyYmZlY2ZkZDQ0YjhiMTUxOWE1OCIsInN1YiI6IjY1NTM5YzIzMDgxNmM3MDBmZDJmMzkxNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ImRpmrJyoOXdqFlZh-OPp667du1STG-MhJD4NR_HlDk'
    },
    body: JSON.stringify({request_token: requestToken})
  };

  const location = useLocation();
  const getAprovideToken = async() => {
    const params = new URLSearchParams(location.search);
    const approvedToken = params.get("request_token");
    if (approvedToken) {
      requestToken=approvedToken;
      console.log(requestToken);
      const response = await axios.post(
        `https://api.themoviedb.org/3/authentication/session/new`,
        options
      );
      const { session_id } =await response.data;
      console.log(session_id);
    }
  };
  useEffect(() => {
    getAprovideToken();
  }, [location.search]);
  return <section className="py-4 px-6">
    <section className="flex justify-between items-center">
    <h2 className="text-4xl ">My Profile</h2>
    <Link to={"/"} className="flex items-center hover:cursor-pointer hover:bg-slate-100 p-3 rounded">
      LOGOUT
      <i className="fa-solid fa-right-from-bracket ms-1"></i>
    </Link>
  </section>
  <section className="mt-3">
    <h3 className="text-2xl">Favorite Movies</h3>
    <section className="py-4">
    <section
              className="max-xl:w-[33.333%] max-sm:w-[100%]  max-lg:w-[50%] max-lg:px-4 px-6 xl:w-[25%] text-center hover:cursor-pointer"
            >
              <section>
                <img
                  src="https://placehold.co/250x350"
                  alt="https://placehold.co/250x350"
                  className="rounded-lg hover:scale-105 transition-transform w-full"
                />
                <section className="flex items-center justify-between mt-4 ">
                  <p className="text-2xl">
                   Lorem ipsum
                  </p>
                  <p className="flex items-center">
                    <span className="font-bold">
                     5
                    </span>
                    <span className="fas fa-star fa-2x text-yellow-400"></span>
                  </p>
                </section>
              </section>
            </section>
    </section>
  </section>
  <section className="mt-3">
    <h3 className="text-2xl">Watchlist</h3>
    <section className="py-4">
    <section
              className="max-xl:w-[33.333%] max-sm:w-[100%]  max-lg:w-[50%] max-lg:px-4 px-6 xl:w-[25%] text-center hover:cursor-pointer"
            >
              <section>
                <img
                  src="https://placehold.co/250x350"
                  alt="https://placehold.co/250x350"
                  className="rounded-lg hover:scale-105 transition-transform w-full"
                />
                <section className="flex items-center justify-between mt-4 ">
                  <p className="text-2xl">
                   Lorem ipsum
                  </p>
                  <p className="flex items-center">
                    <span className="font-bold">
                     5
                    </span>
                    <span className="fas fa-star fa-2x text-yellow-400"></span>
                  </p>
                </section>
              </section>
            </section>
    </section>
  </section>
  </section>
};

export default Profile;
