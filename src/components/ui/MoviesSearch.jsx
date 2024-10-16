import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const MoviesSearch = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const handleSearchInput = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${search}`);
  };

  return (
    <form onSubmit={handleSubmit} className="relative ">
      <input
        type="text"
        placeholder="Search for movies by title"
        className="w-full bg-transparent border py-3 rounded-md pl-11 pr-32 placeholder:text-light-silver border-light-silver focus:outline-none"
        value={search}
        onChange={handleSearchInput}
      />
      <IoIosSearch className="absolute text-2xl text-light-silver left-2 top-1/2 transform -translate-y-1/2" />
      <button className="bg-coral-red absolute top-0 right-0 h-full px-6 rounded-md text-black text-lg">
        search
      </button>
    </form>
  );
};

export default React.memo(MoviesSearch);
