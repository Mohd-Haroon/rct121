import React from "react";

export const Cell = ({ cell, handleClick, id }) => {
  return (
    <div
      style={{ width: "50px", height: "50px", border: "5px solid teal",backgroundColor:"black" }}
      onClick={() => handleClick(id)}
    >
      <div style={{marginTop:"25%",color: "white"}}>{cell}</div>
    </div>
  );
};
