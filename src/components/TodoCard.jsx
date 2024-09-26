import React from "react";
import PropTypes from "prop-types";
import { EyeOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";

// TodoCard component to display individual task details
const TodoCard = ({ title, status, statusBgColor, statusColor }) => {
  // Function to get the appropriate status icon based on the task status
  const getStatusIcon = (status) => {
    switch (status) {
      case "In-Progress":
        return "/images/in_progress.png";
      case "To Do":
      case "Ready for QA":
        return "/images/todo.png";
      default:
        return null;
    }
  };

  return (
    <div
      className="box box-shadow border border-gray-300 rounded-md px-2 py-1 mb-2 md:mb-4"
      style={{
        boxShadow:
          "0 4px 6px rgba(0, 0, 0, 0.1), 0 5px 30px rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* Checkbox and task ID */}
      <div className="flex flex-row justify-start items-center gap-1">
        <input
          type="checkbox"
          id="select-checkbox"
          className="custom-checkbox"
        />
        <label htmlFor="select-checkbox" className="text-xs">
          <span className="text-gray-300">#Nay139</span>
        </label>
      </div>

      <div className="pl-4">
        {/* Task title and icons */}
        <div className="flex flex-row justify-between items-center">
          <h4 className="font-medium text-sm">{title}</h4>
          <img
            id="search-icon"
            src="/images/audio.png"
            alt="Filter task Icon"
            className="w-5 h-5"
          />

          <div className="flex flex-row justify-center gap-1 items-center">
            <img
              id="search-icon"
              src="/images/textnotification.png"
              alt="Filter task Icon"
              className="w-6 h-6"
            />

            <img
              src="/images/profile.png"
              alt="Profile"
              className="w-6 h-6 rounded-full"
            />
          </div>
        </div>

        {/* Task due date and priority */}
        <div className="flex flex-row justify-start gap-3 items-center mt-1">
          <div className="flex flex-row justify-start items-center gap-2">
            <img
              src="/images/calenderIcon.png"
              alt="Calendar Icon"
              className="w-5 h-5 rounded-full"
            />
            <label className="text-xs">
              <span className="text-[#8706c1]"> Due in: </span>3 Days (12/11/24)
            </label>
          </div>

          <div className="flex flex-row justify-start items-center gap-2">
            <img
              src="/images/redFlagIcon.png"
              alt="Red Flag Icon"
              className="w-6 h-6 rounded-full"
            />
            <label className="text-xs text-[#ff4747]">High</label>
          </div>
        </div>

        {/* Task description */}
        <div className="mt-1">
          <p className="text-xs text-gray-500">
            Optimize the user interface for our mobile app .....
          </p>
        </div>

        {/* Task status and actions */}
        <div className="flex flex-row justify-between my-2">
          <div
            className="bg-[#f5cca1] text-xs rounded-full px-3 py-1 flex flex-row justify-between items-center gap-2"
            style={{ backgroundColor: statusBgColor }}
          >
            <img
              id="status-icon"
              src={getStatusIcon(status)}
              alt="Status Icon"
              className="w-3 h-3"
            />
            <span style={{ color: statusColor }}>{status}</span>
          </div>

          <div>
            <span className="text-xs text-gray-600">1 of 5 done</span>
          </div>

          <div className="flex space-x-2 ml-4">
            <EyeOutlined style={{ fontSize: "16px", color: "#28A745" }} />
            <EditOutlined style={{ fontSize: "16px", color: "#6b57e4" }} />
            <DeleteOutlined style={{ fontSize: "16px", color: "#DC3545" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

// PropTypes for type checking
TodoCard.propTypes = {
  title: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  statusBgColor: PropTypes.string.isRequired,
  statusColor: PropTypes.string.isRequired,
};

export default TodoCard;
