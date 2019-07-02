import React, { useState } from "react";

interface IProps {
  greeting: string;
}

function useCounter(defaultValue: number) {
  const [counter, setCounter] = useState(defaultValue);

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  return [counter, incrementCounter];
}

const MyApp = (props: IProps) => {
  const [counter, incrementCounter] = useCounter(0);
  return (
    <div>
      <div>
        {props.greeting}
        <button onClick={incrementCounter as any}>Counter = {counter}</button>
      </div>
    </div>
  );
};

export default MyApp;
