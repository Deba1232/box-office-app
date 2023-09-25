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
      <SearchInput
        type="text"
        placeholder="Search for something"
        value={searchStr}
        onChange={onSearchInput}
      />
      <RadiosWrapper>
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
      </RadiosWrapper>

      <SearchButtonWrapper>
        <button type="submit" onClick={onSearch}>
          Search
        </button>
      </SearchButtonWrapper>
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

const SearchInput = styled.input`
  display: block;
  font-family: "Roboto", sans-serif;
  width: 200px;
  margin: auto;
  outline: none;
  padding: 13px 15px;
  border: 1px solid #dbdbdb;
  box-shadow: 0px 0px 10px 0px rgba(219, 219, 219, 0.5);
  font-size: 14px;
  border-radius: 12px;
  color: #8d8d8d;
  &::placeholder {
    font-weight: 300;
    color: #8d8d8d;
  }
`;

export const RadiosWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
  label {
    margin: 0 15px;
  }
`;

const SearchButtonWrapper = styled.div`
  text-align: center;
  margin-bottom: 35px;
  button {
    color: #fff;
    background-color: ${({ theme }) => theme.mainColors.blue};
    margin: auto;
    padding: 10px 50px;
    font-size: 15px;
    border: none;
    outline: none;
    border-radius: 12px;
    &:hover {
      cursor: pointer;
    }
  }
`;
