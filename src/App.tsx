import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Message from "./Message"

function App() {
  // let firstValue:string = "Manny";
  // let firstValue:number = 1234;
  // let firstValue:number[] = [1,2,3,4];
  // let firstValue:boolean = true;
  // let firstValue: Array<number> = [1, 2, 3, 4];
  // let firstValue: Array<string> = ["1", "2", "hoi"];

  //tuple (an array may have values of more than one type i.e number, string etc)
  let firstValue: [string, number] = ["Manny", 2];

  //enum
  enum Codes {
    first = 1,
    second = 2
  }

  //any
  let secondValue: any = "Manny";

  //void (Here return type of function is void)
  const warning = (): void => {
    console.log("warning");
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>
          the {firstValue} is of {typeof firstValue} type!
        </p> */}
        <Message message = "this is a message"/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
