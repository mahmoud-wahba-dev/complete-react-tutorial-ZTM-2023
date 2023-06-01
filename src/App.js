import { Component } from "react";

import logo from "./logo.svg";
import "./App.css";

class App extends Component {

  constructor (){
    super();
    this.state = {
      name : {firstName: "yihua" , lastName : "zhang"},
      company: "ztm"
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
        hi  { this.state.name.firstName  } {this.state.name.lastName  } , i work at {this.state.company}
          </p>
        
          <button onClick={()=>{
              this.setState(()=>{  
                return {name: {firstName: "andrie", lastName:"neagoie"}} 
                }   , ()=> {
                  console.log(this.state);
                }  )
              // console.log(this.state);
          }}>
            change name
          </button>
        </header>
      </div>
    );
  }
}

export default App;
