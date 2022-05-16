import React from "react";

export const Contactcard = ({ id, name, phone, onDelete, url }) => {
  return (
    <div
      style={{
        display: "flex",
        gap: "15px",
        justifyContent: "center",
        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        borderBottom: "1px solid grey",
        marginBottom: "10px",
      }}
    >
      <div style={{ width: "30%" }}>
        <img
          style={{
            width: "75px",
            height: "75px",
            borderRadius: "50%",
            padding: "5px",
          }}
          src={url}
          alt=""
        />
      </div>
      <div style={{ width: "70%" }}>
        <div style={{ textAlign: "left" }}>
          <h3>{name}</h3>
          <br />
          <p style={{ marginTop: "-39px", color: "grey" }}>{phone}</p>
        </div>
        {/* <div style={{ border: "1px solid red" }}></div> */}
      </div>
      <div>
        <button onClick={() => onDelete(id)}>DELETE</button>
      </div>
    </div>
  );
};
