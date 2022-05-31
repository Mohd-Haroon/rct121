import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../Context/Authcontext";
import { useNavigate, useLocation } from "react-router-dom";

export const Login = () => {
  const { login, token } = useContext(AuthContext);
  const location = useLocation();
  const naviagte = useNavigate();
  var from = location.state
  if(from==undefined){
    from="/cart"
  }else{
    from = location.state.from.pathname
  }
    useEffect(() => {
      if (token) {
        naviagte(from, { replace: true });
      }
    }, [token]);
  const handlesub = (e) => {
    e.preventDefault();
    login();
  };
  return (
    <div>
      {/* form */}
      <form onSubmit={handlesub}>
        <button type="submit" >Login</button>
      </form>
    </div>
  );
};
