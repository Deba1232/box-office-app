import { useState } from "react";

import { useSearchStr } from "../lib/useSearchStr";

const SearchForm = ({ onSearch }) => {
  const [searchStr, setSearchStr] = useSearchStr();
  const [searchOption, setSearchOption] = useState("shows");

  const onSearchInput = (event) => {
    setSearchStr(event.target.value);
  };

  const onSearchOptionChange = (event) => {
    setSearchOption(event.target.value);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    const options = {
      searchStr,
      searchOption,
    };
    onSearch(options);
  };

  return (
    <form onSubmit={onFormSubmit}>
      <input type="text" value={searchStr} onChange={onSearchInput} />

      <label>
        <input
          type="radio"
          name="search-options"
          value="shows"
          checked={searchOption === "shows"}
          onChange={onSearchOptionChange}
        />
        Shows
      </label>

      <label>
        <input
          type="radio"
          name="search-options"
          value="actors"
          checked={searchOption === "actors"}
          onChange={onSearchOptionChange}
        />
        Actors
      </label>

      <button type="submit" onClick={onSearch}>
        Search
      </button>
    </form>
  );
};

export default SearchForm;
