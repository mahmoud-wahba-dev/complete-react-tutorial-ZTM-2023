import CardList from "./components/card-list/card-list.component";
import "./App.css";
import SearchBox from "./components/search-box/searchbox.component";
import { useState, useEffect } from "react";

const App = () => {
  const [searchField, setSearchField] = useState(""); // [value , setValue]
  const [monsters, setMonsters] = useState([]);
  const [filterdMonsters, setfilterdMonsters] = useState(monsters);

  console.log("render");

  useEffect(() => {
    console.log("dd");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newFilterdMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });
    setfilterdMonsters(newFilterdMonsters);
  }, [monsters, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  };


  // console.log("last");

  return (
    <div className="App">
      <h1 className="app-title"> Monsters Rolodex </h1>
   
      <SearchBox
        className="monsters-search-box"
        onChangeHandler={onSearchChange}
        placeholder={"search monsters"}
      />
      {<CardList monsters={filterdMonsters} />}
    </div>
  );
};

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       monsters: [],
//       searchField: "",
//     };
//     // console.log("constructor");
//   }

//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((users) =>
//         this.setState(
//           () => {
//             return { monsters: users };
//           },
//           () => {}
//         )
//       );
//     // console.log("componentDidMount");
//   }

//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLowerCase();
//     this.setState(() => {
//       return { searchField };
//     });
//   };

//   render() {
//     // console.log("render");

//     const { monsters, searchField } = this.state;

//     const { onSearchChange } = this;

//     let filterdMonsters = monsters.filter((monster) => {
//       return monster.name.toLowerCase().includes(searchField);
//     });
//     return (
//       <div className="App">
//         <h1 className="app-title"> Monsters Rolodex </h1>
//         <SearchBox
//           className="monsters-search-box"
//           onChangeHandler={onSearchChange}
//           placeholder={"search monsters"}
//         />

//         <CardList monsters={filterdMonsters} />
//       </div>
//     );
//   }
// }
export default App;
