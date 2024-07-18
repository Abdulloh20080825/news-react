import React from "react";

const Search = ({ query, setQuery, onSubmit }) => {
  return (
    <form className="search-container" onSubmit={(e) => onSubmit(e)}>
      <input
        type="text"
        className="search-input"
        placeholder="Search news"
        value={query}
        onChange={({ target }) => setQuery(target.value)}
      />
    </form>
  );
};

export default Search;
