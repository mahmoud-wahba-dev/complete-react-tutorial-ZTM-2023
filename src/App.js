import { Component } from "react";

import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [{ name: "linda" , id:"hdb55s" },
                  { name: "Frank" , id: "asds54" },
                  { name: "jackyu", id: "ads54" },
                {name: "andrie" , id: "ss884"},
                {name: "andrie" , id: "ssa455sad1" }
                ],
    };
  }

  render() {
    return (
      <div className="App">
        {
          this.state.monsters.map((monster,index)=>{
            console.log(index);
         return   <h1 key={monster.id }> {monster.name} </h1>
          })
        }
      </div>
    );
  }
}

export default App;
