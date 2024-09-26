import React from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import Filter from "./components/Filter";
import TodoCard from "./components/TodoCard";
import { filterBadges, tasks } from "./data/Data";


function App() {
  return (
    <div className="app-container">
      {/* Header Section */}
      <header className="header h-24 flex justify-center items-end p-4 text-white">
        <h3 className="font-medium md:font-lg">Your Tasks (10)</h3>
      </header>

      {/* Main Content Section */}
      <main className="main-content root min-h-screen rounded-t-3xl md:px-20">
        {/* Search Bar Component */}
        <SearchBar />

        {/* Filter Section */}
        <div className="filter-section px-3 flex flex-row items-center">
          <input
            type="checkbox"
            id="select-checkbox"
            className="mr-2 custom-checkbox"
          />
          <label htmlFor="select-checkbox" className="text-xs">
            <span className="text-gray-500 font-normal">Select</span>
            <span className="text-[#6a57e5] ml-2">5 of 56 selected - </span>
            <span className="text-[#1da288]">Select All</span>
          </label>
        </div>

        {/* Filter Badges */}
        <div className="filter-badges px-3 flex flex-row gap-2 mt-4 overflow-x-auto hidden-scrollbar">
          {filterBadges.map((badge) => (
            <Filter
              key={badge.id}
              title={badge.title}
              bgColor={badge.bgColor}
              textColor={badge.textColor}
            />
          ))}
        </div>

        {/* Tasks List */}
        <div className="tasks p-3">
          {tasks.map((task) => (
            <TodoCard
              key={task.id}
              title={task.title}
              status={task.status}
              statusBgColor={task.statusBgColor}
              statusColor={task.statusColor}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
