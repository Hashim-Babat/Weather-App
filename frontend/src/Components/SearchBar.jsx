import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

function SearchBar({ onSearch }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onSearch(input);
      setInput("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center bg-white/20 rounded-lg px-3 py-2 mb-4">
      <FaSearch className="text-white mr-2" />
      <input
        type="text"
        placeholder="Search for a city..."
        className="bg-transparent outline-none text-white w-full placeholder-gray-300"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </form>
  );
}

export default SearchBar;
