import React from "react";

const Filter = ({ title, bg_color, text_color }) => {
  return (
    <div
      className={`  rounded-full px-2 py-1  whitespace-nowrap `}
      style={{ backgroundColor: bg_color, color: text_color }}
    >
      <p className="text-xs">{title}</p>
    </div>
  );
};

export default Filter;
