import React from "react";
import Header from "../components/Header";
import Cardlist from "../components/Cardlist";
import Scroll from "../components/Scroll";

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
    const { stats, searchField } = this.state;
    const filteredStates = stats.filter((stat) => {
      return stat.state.toLowerCase().includes(searchField.toLowerCase());
    });

    return !stats.length ? (
      <h1 className="white tc">Loading...</h1>
    ) : (
      <div>
        <Header searchChange={this.onSearchChange} />
        <Scroll>
          <Cardlist stats={filteredStates} />
        </Scroll>
      </div>
    );
  }
}

export default App;
