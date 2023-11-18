import { Route, Routes } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import Home from "../Home/Home";
import Profile from "../Profile/Profile";
import SideBar from "../SIdeBar/SideBar";
import { useEffect, useState } from "react";
import axios from "axios";

const Layout = () => {
  const [api_Url, setApi_Url] = useState(
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1"
  );
  const [navopen,setNavopen]= useState(false)

 

  const handelApi_Url = async (Prevurl) => {
      if(api_Url !== Prevurl){
        setApi_Url(Prevurl);
        console.log(Prevurl);
    }
  };
  useEffect(() => {
    handelApi_Url(api_Url);
  }, [api_Url]);
  return (
    <section className="flex relative">
      <section className={`sidenav max-lg:w-[40%] max-sm:w-[80%] max-lg:absolute max-lg:z-50 bg-white top-0 bottom-0 left-0 lg:translate-x-0  ${navopen?"translate-x-0":"translate-x-[-100%]"}`}>
        <SideBar handelApi_Url={handelApi_Url} setNavopen={setNavopen}/>
      </section>
      <section className="relative w-full">
        <SearchBar setNavopen={setNavopen} navopen={navopen} />
        <Routes>
          <Route path="/" element={<Home api_Url={api_Url} />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </section>
    </section>
  );
};

export default Layout;
