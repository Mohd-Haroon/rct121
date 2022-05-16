import React from "react";
import "./contact.css";

export const Addcontact = (props) => {
  const [text, setText] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [photo,setPhoto] = React.useState("");

  const handleClick = () => {
      if(props.handleClick) props.handleClick(text,phone,photo);
      setText("")
      setPhone("")
      setPhoto("")
  };

  return(
      <div>
          <div>
              <input type="text" placeholder="add name" onChange={(e)=>setText(e.target.value)} />
          </div>
          <div>
              <input type="email" placeholder="add email" onChange={(e)=>setPhone(e.target.value)} />
          </div>
          <div>
              <input type="text" placeholder="photo url" onChange={(e)=>setPhoto(e.target.value)}/>
          </div>
          <button onClick={handleClick}>Add</button>
      </div>
  )
};
