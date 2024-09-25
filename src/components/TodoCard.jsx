import React from "react";
import {
  MailOutlined,
  CalendarOutlined,
  FlagOutlined,
  EyeOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";

import SoundIcon from "../assets/audio.png";
import messageIcon from "../assets/messageIcon.png";
import messageIconWithNotification from "../assets/textnotification.png";
import profile from "../assets/profile.png";
import calenderIcon from "../assets/calenderIcon.png";
import redFlagIcon from "../assets/redFlagIcon.png";
import inProgressIcon from "../assets/in_progress.png";
import todoIcon from "../assets/todo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeDown } from "@fortawesome/free-solid-svg-icons";
import { Badge } from "antd";

const TodoCard = ({ title, status, statusBgColor, statusColor }) => {
  return (
    <div
      className="box box-shadow border border-gray-300  rounded-md px-2 py-1 mb-2 md:mb-4"
      style={{
        boxShadow:
          "0 4px 6px rgba(0, 0, 0, 0.1), 0 5px 30px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div className="flex flex-row justify-start items-center gap-1">
        <input
          type="checkbox"
          id="select-checkbox"
          className="bg-[#4bb7a0] custom-checkbox"
        />
        <label for="select-checkbox" class="text-xs">
          <span clasName="text-grey-300">#Nay139</span>
        </label>
      </div>

      <div className="pl-4">
        <div className="flex flex-row justify-between items-center">
          <h4 className="font-medium text-sm">{title}</h4>
          <img
            id="search-icon"
            src={SoundIcon}
            alt="Filter task Icon"
            class="w-5 h-5"
          />

          <div className="flex flex-row justify-center gap-1 items-center">
            <img
              id="search-icon"
              src={messageIconWithNotification}
              alt="Filter task Icon"
              class="w-6 h-6"
            />

            <img
              src={profile} // Replace with your image path
              alt="Profile"
              className="w-6 h-6 rounded-full"
            />
          </div>
        </div>

        <div className="flex flex-row justify-start gap-3 items-center mt-1">
          <div className="flex flex-row justify-start items-center gap-2 ">
            <img
              src={calenderIcon} // Replace with your image path
              alt="Profile"
              className="w-5 h-5 rounded-full"
            />
            <label className="text-xs">
              <span className="text-[#8706c1]"> Due in: </span>3 Days (12/11/24)
            </label>
          </div>

          <div className="flex flex-row justify-start items-center gap-2 ">
            <img
              src={redFlagIcon} // Replace with your image path
              alt="Profile"
              className="w-6 h-6 rounded-full"
            />
            <label className="text-xs text-[#ff4747]">High</label>
          </div>
        </div>

        <div className="mt-1">
          <p className="text-xs text-gray-500">
            Optimize the user interface for our mobile app .....
          </p>
        </div>

        <div className="flex flex-row justify-between my-2 ">
          <div
            class="bg-[#f5cca1] text-xs rounded-full px-3 py-1 flex flex-row justify-between items-center gap-2"
            style={{ backgroundColor: statusBgColor }}
          >
            {status === "in-progress" && (
              <img
                id="search-icon"
                src={inProgressIcon}
                alt="Filter task Icon"
                class="w-3 h-3"
              />
            )}
            {status === "To do" && (
              <img
                id="search-icon"
                src={todoIcon}
                alt="Filter task Icon"
                class="w-3 h-3"
              />
            )}

            {status === "Ready for QA" && (
              <img
                id="search-icon"
                src={todoIcon}
                alt="Filter task Icon"
                class="w-3 h-3"
              />
            )}

            <span style={{ color: statusColor }}>{status}</span>
          </div>

          <div>
            <span className="text-xs text-gray-600">1 of 5 done</span>
          </div>

          <div className="flex space-x-2 ml-4">
            <EyeOutlined style={{ fontSize: "16px", color: "#28A745" }} />{" "}
            {/* Blue color for Eye icon */}
            <EditOutlined style={{ fontSize: "16px", color: "#6b57e4" }} />{" "}
            {/* Green color for Edit icon */}
            <DeleteOutlined
              style={{ fontSize: "16px", color: "#DC3545" }}
            />{" "}
            {/* Red color for Delete icon */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoCard;
