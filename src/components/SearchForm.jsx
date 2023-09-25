import { useState } from "react";
import styled from "styled-components";

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

      <StyledRadio>
        <input
          type="radio"
          name="search-options"
          value="shows"
          checked={searchOption === "shows"}
          onChange={onSearchOptionChange}
        />
        <span />
        Shows
      </StyledRadio>

      <StyledRadio>
        <input
          type="radio"
          name="search-options"
          value="actors"
          checked={searchOption === "actors"}
          onChange={onSearchOptionChange}
        />
        <span />
        Actors
      </StyledRadio>

      <button type="submit" onClick={onSearch}>
        Search
      </button>
    </form>
  );
};

export default SearchForm;

const StyledRadio = styled.label`
  display: block;
  position: relative;
  padding-left: 25px;
  cursor: pointer;
  font-size: 13px;
  user-select: none;
  font-weight: 700;
  line-height: 1.65;
  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }
  span {
    position: absolute;
    top: 0;
    left: 0;
    height: 16px;
    width: 16px;
    background-color: #fff;
    border: 2px solid ${({ theme }) => theme.mainColors.blue};
    border-radius: 50%;
  }
  input:checked ~ span {
    background-color: #fff;
    border: 2px solid ${({ theme }) => theme.mainColors.blue};
  }
  span:after {
    content: "";
    position: absolute;
    display: none;
  }
  input:checked ~ span:after {
    display: block;
  }
  span:after {
    top: 4px;
    left: 4px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${({ theme }) => theme.mainColors.blue};
  }
`;
