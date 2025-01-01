import React from "react";
import './ViewAll.css'

function ViewAll({ title ,style }) {
  return <button style={style} className="viewAll_btn">{title}</button>;
}

export default ViewAll;
