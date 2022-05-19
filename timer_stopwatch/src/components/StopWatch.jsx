import React from "react";

export const StopWatch = () => {
  const [time, setTime] = React.useState(0);
  const [isRunnig, setIsRunning] = React.useState(false);
  const [btn, setBtn] = React.useState(true);
  const timerRef = React.useRef();

  React.useEffect(() => {
    // startTimer();

    return () => {
      stopTimer();
    };
  }, []);


  const startTimer = () => {
    setBtn(false);
    if (isRunnig) {
      return;
    }
    timerRef.current = setInterval(() => {
      setTime((prev) => prev + 1);
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
    setTime(0);
  };

  return (
    <div >
      {/* <h1>STOPWATCH</h1> */}
      <h2>{Math.floor(time/(60*60))%24}Hour:{Math.floor(time/60)%60}Min:{(time)%60}Sec</h2>
      {/* <h3>{timerRef}</h3> */}
      {btn ? (
        <button onClick={startTimer}>START</button>
      ) : (
        <button onClick={stopTimer}>PAUSE</button>
      )}
      <button onClick={resetTimer}>RESET</button>
    </div>
  );
};


