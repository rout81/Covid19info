import React from "react";
import Header from "../components/Header";
import Cardlist from "../components/Cardlist";
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";
import { setSearchField } from "../redux/actions";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return { searchField: state.searchField };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
  };
};

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      stats: [],
    };
  }

  componentDidMount() {
    fetch(`https://api.covid19india.org/data.json`)
      .then((response) => response.json())
      .then((user) => {
        this.setState({ stats: user.statewise });
      });
  }

  render() {
    const { stats } = this.state;
    const { searchField, onSearchChange } = this.props;
    const filteredStates = stats.filter((stat) => {
      return stat.state.toLowerCase().includes(searchField.toLowerCase());
    });

    return !stats.length ? (
      <h1 className="white tc">Loading...</h1>
    ) : (
      <div>
        <Header searchChange={onSearchChange} />
        <Scroll>
          <ErrorBoundry>
            <Cardlist stats={filteredStates} />
          </ErrorBoundry>
        </Scroll>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
