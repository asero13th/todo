import React from "react";
import PropTypes from "prop-types";

// Filter component to display filter badges
const Filter = ({ title, bgColor, textColor }) => {
  return (
    <div
      className="rounded-full px-2 py-1 whitespace-nowrap"
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      <p className="text-xs">{title}</p>
    </div>
  );
};

// PropTypes for type checking
Filter.propTypes = {
  title: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
};

export default Filter;
