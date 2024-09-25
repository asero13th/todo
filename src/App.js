import logo from "./logo.svg";
import "./App.css";
import SearchBar from "./components/SearchBar";
import Filter from "./components/Filter";
import TodoCard from "./components/TodoCard";
function App() {
  const filterBadges = [
    {
      title: "All tasks(346)",
      bg_color: "#1da288",
      text_color: "white",
    },
    {
      title: "Today(42)",
      bg_color: "#fdc7b6",
      text_color: "black",
    },
    {
      title: "Overdue(40)",
      bg_color: "#f63334",
      text_color: "white",
    },
    {
      title: "upcoming(18)",
      bg_color: "#9dff99",
      text_color: "black",
    },
    {
      title: "Todo",
      bg_color: "#e0fad0",
      text_color: "black",
    },
  ];

  const tasks = [
    {
      title: "Tasks List Desktop View",
      status: "in-progress",
      statusBgColor: "#f5cca1",
      statusColor: "#634503",
    },
    {
      title: "Tasks List Desktop View",
      status: "To do",
      statusBgColor: "#e0fad0",
      statusColor: "#112b47",
    },
    {
      title: "Tasks List Desktop View",
      status: "Ready for QA",
      statusBgColor: "#2f8501",
      statusColor: "#ffffff",
    },
  ];

  return (
    <div className="">
      <div class="h-24 flex justify-center items-end p-4 text-white">
        <h3 class="font-medium  md:font-lg">Your Tasks (10)</h3>
      </div>

      <div className="root min-h-screen rounded-t-3xl md:px-20 ">
        <SearchBar />

        <div class="px-3 flex flex-row items-center ">
          <input
            type="checkbox"
            id="select-checkbox"
            class="mr-2  peer-checked:bg-green-500 text-green-500"
          />
          <label for="select-checkbox" class="text-xs">
            <span className="text-gray-500 font-normal">select</span>{" "}
            <span className="text-[#6a57e5] ml-2">5 of 56 selected - </span>
            <span className="text-[#1da288]">select all</span>
          </label>
        </div>

        <div className="px-3 flex flex-row gap-2 mt-4 overflow-x-auto hidden-scrollbar">
          {filterBadges.map((badge, index) => (
            <Filter
              key={badge.id}
              title={badge.title}
              bg_color={badge.bg_color}
              text_color={badge.text_color}
            />
          ))}
        </div>

        <div className="p-3 ">
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
      </div>
    </div>
  );
}

export default App;
