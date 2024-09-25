import React from "react";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import searchIcon from "../assets/search_icon.svg";
import filterIcon from "../assets/filters-2.svg";
import addNewIcon from "../assets/shape.svg";
const SearchBar = () => {
  return (
    <div class="p-3 flex flex-row justify-between items-center">
      <Input
        type="search"
        placeholder="Search tasks, typing something about task"
        className="rounded-md p-3 bg-[#f3f2f5] pl-2 w-[70vw] md:p-5 text-xs font-medium border-none font-serif"
        suffix={<img src={searchIcon} alt="Search Icon" className="w-4 h-4" />}
      />

      <div className="flex flex-row gap-1 items-center">
        <img
          id="search-icon"
          src={filterIcon}
          alt="Filter task Icon"
          class="w-5 h-5 md:w-8 md:h-8"
        />

        <div class="h-8 border-l border-gray-200 mx-2"></div>

        <div class="flex flex-row justfiy-center items-center gap-1">
          <p class="text-xs">New</p>
          <img
            id="search-icon"
            src={addNewIcon}
            alt="add new task Icon"
            class="w-3 h-3 md:h-5 md:w-5"
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
