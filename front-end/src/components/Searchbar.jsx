import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

function Searchbar() {
  const [isClicked, setIsClicked] = useState(false);

  const handleFocus = () => {
    setIsClicked(true);
  };

  const handleBlur = () => {
    setIsClicked(false);
  };

  return (
    <div>
      <form className="w-75 text-end relative">
        <input
          type="search"
          className="relative z-10 bg-transparent w-12 h-12 rounded-full border cursor-pointer outline pl-12 pr-4 focus:w-80 focus:border-red-100 focus:cursor-text focus:pl-16 focus:pr-4 transition-all"
          placeholder="search..."
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <div
          className={`absolute transition-all inset-y-0 right-5 top-3 ${
            isClicked ? "right-[275px]" : ""
          }`}
        >
          <FaSearch className="inset-y-0 my-auto w-6 h-6 z-10 stroke-gray-500 border-r border-transparent peer-focus:border-red-100 peer-focus:stroke-red-200 transit*" />
        </div>
      </form>
    </div>
  );
}

export default Searchbar;
