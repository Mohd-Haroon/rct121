import React from "react";
import "./App.css";
import { StopWatch } from "./components/StopWatch";
import { Timer } from "./components/Timer";

function App() {
  const [timer,setTimer] = React.useState(false)
  return (
    <div className="App">
      <h1>Timer & StopWatch</h1>
      <div style={{border: '1px solid black',width: '80%',margin:"auto",borderRadius:"10px"}}>
        <div style={{display:"flex",width: '80%',margin:"auto"}}>
          <div  style={{display:"flex",margin:"auto",gap:"25px",width:"50%",justifyContent:"space-between"}}>

          <div style={{margin:"auto",backgroundColor:timer?"white":"teal",color:timer?"black":"white",width:"50%"}} onClick={()=>setTimer(!timer)}>Timer</div>
          <div style={{margin:"auto",backgroundColor:timer?"teal":"white",color:timer?"white":"black",width:"50%"}} onClick={()=>setTimer(!timer)}>StopWatch</div>
          </div>
        </div>
        <div style={{width:"25%",height:"150px",margin:"auto",border: '1px solid black',marginTop: '25px',borderRadius:"10px"}}>
          {timer?<StopWatch />:
          <Timer />}
        </div>
      </div>
    </div>
  );
}

export default App;
