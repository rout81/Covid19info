import React from "react";
import Header from "./Header";
import Cardlist from "./Cardlist";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      stats: [],
      searchField: "",
    };
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
  };

  componentDidMount() {
    fetch(`https://api.covid19india.org/data.json`)
      .then((response) => response.json())
      .then((user) => {
        this.setState({ stats: user.statewise });
      });
  }

  render() {
    const filteredStates = this.state.stats.filter((stat) => {
      return stat.state
        .toLowerCase()
        .includes(this.state.searchField.toLowerCase());
    });

    if (this.state.stats.length === 0) {
      return <h1 className="white tc">Loading...</h1>
    } else {
      return (
        <div>
          <Header searchChange={this.onSearchChange} />
          <Cardlist stats={filteredStates} />
        </div>
      );
    }
  }
}

export default App;
