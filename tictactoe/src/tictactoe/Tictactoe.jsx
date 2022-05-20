import React from "react";
import { Cell } from "./Cell";

export const Tictactoe = () => {
  const [turn, setTurn] = React.useState("X");
  const [cell, setCell] = React.useState(["", "", "", "", "", "", "", "", ""]);
  const [win, setWin] = React.useState(null);
  const [gamerunning, setIsGameRunning] = React.useState(false);

  const handleClick = (id) => {
    if (cell[id] !== "") {
      alert("already done!");
      return;
    }
    let box = [...cell];
    if (turn === "X") {
      setTurn("O");
      box[id] = "X";
    } else {
      setTurn("X");
      box[id] = "O";
    }
    setCell(box);
    console.log(id);
    Winner(box);
  };

  const Winner = (box) => {
    let possibeloutcomes = {
      positopns: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ],
    };

    for (let item in possibeloutcomes) {
      // console.log(possibeloutcomes[item])
      // console.log(item[0],item[1],item[2])
      possibeloutcomes[item].map((item) => {
        if (box[item[0]] === "" || box[item[1]] === "" || box[item[2]] === "") {
          console.log("continue");
        } else if (
          box[item[0]] === box[item[1]] &&
          box[item[1]] === box[item[2]]
        ) {
          console.log("winner is ", box[item[0]]);
          setWin(box[item[0]]);
          console.log("winbox",win)
          setIsGameRunning(!gamerunning);
          // reset();
        }
      });
    }
  };

  const reset = () => {
    setWin(null);
    setCell(["", "", "", "", "", "", "", "", ""]);
    setTurn("X");
  };
  return (
    <div style={{border: "5px solid Black",height:"400px"}}>
      {gamerunning ? (
        <>
          <div
            style={{
              width: "50%",
              margin: "auto",
              // border: "1px solid red",
              padding: "15px",
            }}
          >
            <div
              style={{
                width: "60%",
                margin: "auto",
                // border: "1px solid yellow",
                padding: "10px",
                alignItems:"center"
              }}
            >
              <div
                style={{
                  display: "flex",
                  width: "80%",
                  margin: "auto",
                  gap: "10px",
                  justifyContent: "centre",
                }}
              >
                <Cell handleClick={handleClick} cell={cell[0]} id={0} />

                <Cell handleClick={handleClick} cell={cell[1]} id={1} />

                <Cell handleClick={handleClick} cell={cell[2]} id={2} />
              </div>
              <br />
              <div
                style={{
                  display: "flex",
                  width: "80%",
                  gap: "10px",
                  margin: "auto",
                }}
              >
                <Cell handleClick={handleClick} cell={cell[3]} id={3} />

                <Cell handleClick={handleClick} cell={cell[4]} id={4} />

                <Cell handleClick={handleClick} cell={cell[5]} id={5} />
              </div>
              <br />
              <div
                style={{
                  display: "flex",
                  width: "80%",
                  gap: "10px",
                  margin: "auto",
                }}
              >
                <Cell handleClick={handleClick} cell={cell[6]} id={6} />

                <Cell handleClick={handleClick} cell={cell[7]} id={7} />

                <Cell handleClick={handleClick} cell={cell[8]} id={8} />
              </div>
              
            </div>
          </div>

          <h2>TURN : Player-{turn}</h2>
          <button style={{padding:"10px 20px",borderRadius:"5px",backgroundColor:"teal",color:"white"}} onClick={() => reset()}>Reset Game</button>
        </>
      ) : (
        <>
        {win?<h1 style={{color: 'black'}}>Winer is {win}</h1>:""}
        {win?<div style={{padding: '3px',borderRadius:"8px",width: "150px",margin: "auto",backgroundColor:"teal",color:"white",fontSize:"30px"}} onClick={()=>{setIsGameRunning(!gamerunning);reset()}}>Play Again</div>
        :<div style={{padding: '3px',borderRadius:"8px",width: "100px",margin: "auto",backgroundColor:"teal",color:"white",fontSize:"30px"}} onClick={()=>{setIsGameRunning(!gamerunning);reset()}}> Start</div>
        }
        
        </>
      )}
    </div>
  );
};
