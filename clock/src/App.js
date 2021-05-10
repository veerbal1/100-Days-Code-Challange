import { useEffect, useState } from "react";
import "./App.css";
import Greeting from "./Components/Greeting";
import Time from "./Components/Time";

const getTime = () => {
  let date = new Date();
  return {
    date: {
      day: date.getDate(),
      month: date.getMonth() + 1,
      year: date.getFullYear(),
    },
    time: {
      hour: date.getHours(),
      mintue: date.getMinutes(),
      second: date.getSeconds(),
      milliSecond: date.getMilliseconds(),
    },
  };
};

function App() {
  const [greeting, setGreeting] = useState("");
  const [time, setTime] = useState("");

  useEffect(() => {
    setInterval(() => {
      processTime();
    }, 1000);
  },[time]);

  const processTime = () => {
    let dateTime = getTime();
    if (dateTime.time.hour > 5 && dateTime.time.hour < 12) {
      setGreeting("Good Morning");
    } else if (dateTime.time.hour > 12 && dateTime.time.hour < 18) {
      setGreeting("Good Afternoon");
    } else if (dateTime.time.hour > 18 && dateTime.time.hour < 21) {
      setGreeting("Good Evening");
    } else {
      setGreeting("Good Night");
    }

    /** Time */
    setTime(`${dateTime.time.hour} : ${dateTime.time.mintue} : ${dateTime.time.second}`)
  };

  return (
    <div className="App">
      <Greeting greeting={greeting} />
      <br/>
      <Time time={time}/>
    </div>
  );
}

export default App;
