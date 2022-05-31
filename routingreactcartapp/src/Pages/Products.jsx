import React from "react";
import { Stybutton } from "../StylesComponent/Navbarstled";
import { Outlet, useNavigate } from "react-router-dom";

export const Products = () => {
  const naviagte = useNavigate();

  return (
    <div style={{width:"80%",margin:"auto",marginTop:"50px",border:"1px solid red"}}>
      <div align="center">

      <Stybutton onClick={() => naviagte("male")}>Male</Stybutton>
      <Stybutton onClick={() => naviagte("female")}>Female</Stybutton>
      <Stybutton onClick={() => naviagte("children")}>Children</Stybutton>
      </div>
        <br />
        <br />
        <br />
      <div align="center">
        <Outlet />
      </div>
    </div>
  );
};
