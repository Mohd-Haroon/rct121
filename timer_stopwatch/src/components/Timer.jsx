import React from "react";

export const Timer = () => {
  const [count, setCount] = React.useState(0);
  const [btn, setBtn] = React.useState(true);
  const [isRunnig, setIsRunning] = React.useState(false);
  const timerRef = React.useRef();
  const [showinput, setShowInput] = React.useState(true);

  const handleChange = (hour, min) => {
    // console.log(hour, min);
    let totalseconds = hour * 60 * 60 + min * 60;
    setCount(totalseconds);
    // console.log("count", totalseconds);
    startTimer();
    setShowInput(false);
  };

  React.useEffect(() => {
    // startTimer();

    return () => {
      // console.log("cleanup");
      stopTimer();
    };
  }, []);

  const startTimer = () => {
    setBtn(false);
    if (isRunnig) {
      return;
    }
    timerRef.current = setInterval(() => {
      setCount(function (prev) {
        if (prev === 0) {
          clearInterval(timerRef.current);
          return prev;
        }

        return prev - 1;
      });
    }, 1000);

    setIsRunning(true);
  };

  const stopTimer = () => {
    setBtn(true);
    clearInterval(timerRef.current);
    setIsRunning(false);
  };

  const resetTimer = () => {
    stopTimer();
    setCount(0);
    setShowInput(true);
  };

  return (
    <>
      {/* <h1>Timer</h1> */}

      {showinput ? (
        <InputTime handleChange={handleChange} />
      ) : (
        <div>
          <h2>
            {Math.floor(count / (60 * 60)) % 24}Hour:
            {Math.floor(count / 60) % 60}Min:{count % 60}Sec
          </h2>
          {btn ? (
            <button onClick={startTimer}>START</button>
          ) : (
            <button onClick={stopTimer}>PAUSE</button>
          )}
          <button onClick={resetTimer}>RESET</button>
        </div>
      )}
      <br />
    </>
  );
};

const InputTime = ({ handleChange }) => {
  const [hour, setHour] = React.useState(0);
  const [min, setMin] = React.useState(0);

  return (
    <>
    <h3>Set Time</h3>
      <input
        style={{ width: "50px" }}
        placeholder="Hour"
        type="number"
        onChange={(e) => setHour(e.target.value)}
      />
      {"/"}
      <input
        style={{ width: "50px" }}
        placeholder="Min"
        type="number"
        onChange={(e) => setMin(e.target.value)}
      />
      <br />
      <button onClick={() => handleChange(hour, min)}>Start</button>
    </>
  );
};
