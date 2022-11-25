import React from "react";

export const Chatapp = () => {
  const [user, setUser] = React.useState("human");
  const [text, setText] = React.useState("");

  const handleUpdate = () => {
    setUser(text);
  };

  function subscribe(user) {
    const id = setInterval(() => {
      console.log(`check ${user}`);
    }, 3000);
    return () => {
      clearInterval(id);
    };
  }

  React.useEffect(() => {
    const unsubscribe=subscribe(user);
    return () => {
      console.log(`unsubscribe ${user}`);
      unsubscribe();
    };
  }, [user]);
  return (
    <div>
      <div>
        <input
          value={text}
          type="text"
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={handleUpdate}>Update</button>
      </div>
    </div>
  );
};
