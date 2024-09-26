import React from "react";
import PropTypes from "prop-types";
import { Input } from "antd";

// SearchBar component to handle task search and filter actions
const SearchBar = ({ placeholder }) => {
  return (
    <div className="p-3 flex flex-row justify-between items-center">
      {/* Search Input */}
      <Input
        type="search"
        placeholder={placeholder}
        className="rounded-md p-3 bg-[#f3f2f5] pl-2 w-[70vw] md:p-5 text-xs font-medium border-none font-serif"
        suffix={
          <img
            src="/images/search_icon.svg"
            alt="Search Icon"
            className="w-4 h-4"
          />
        }
      />

      {/* Filter and Add New Task Icons */}
      <div className="flex flex-row gap-1 items-center">
        <img
          id="filter-icon"
          src="/images/filters-2.svg"
          alt="Filter task Icon"
          className="w-5 h-5 md:w-8 md:h-8"
        />

        <div className="h-8 border-l border-gray-200 mx-2"></div>

        <div className="flex flex-row justify-center items-center gap-1">
          <p className="text-xs">New</p>
          <img
            id="add-new-icon"
            src="/images/shape.svg"
            alt="Add new task Icon"
            className="w-3 h-3 md:h-5 md:w-5"
          />
        </div>
      </div>
    </div>
  );
};

// PropTypes for type checking
SearchBar.propTypes = {
  placeholder: PropTypes.string,
};

// Default props
SearchBar.defaultProps = {
  placeholder: "Search tasks, typing something about task",
};

export default SearchBar;
