import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));

// const elem = React.createElement(
//   "button",
//   { onClick: () => alert("oops") },
//   "Click ME"
// );
// const eleWithJSX = <button onClick={() => alert("with Jsx")}>ClickME</button>;

// function Button(props){
//   return <button onClick={()=>props?.handleClick()}>{props.title}</button>;
// }
// const Myapp = React.createElement("div", {}, [elem, eleWithJSX,
//   Button({title:"hello1",handleClick:()=> alert("1")}),
//   Button({title:"hello2",handleClick:()=> alert("2")}),
//   Button({title:"hello3",handleClick:()=> alert("3")})
// ]);

root.render(

  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
