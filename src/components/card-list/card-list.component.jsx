import { Component } from "react";
import "./card-list.styles.css"
import Card from "../card/card.component";



class CardList extends Component {
  constructor() {
    super();
  }

  componentDidMount() {}

  render() {
    console.log("render from card list");
    const { monsters } = this.props;

    return (
      <div className="card-list">
        {monsters.map((monster) => {
          // const { id, name, email } = monster;

          return (
            <Card monster = {monster} />
          );
        })}
      </div>
    );
  }
}

export default CardList;
