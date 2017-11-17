import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { connect }  from 'react-redux';
import { fetchCheese } from './actions';

class App extends Component {

  componentDidMount() {
    this.props.dispatch(fetchCheese());
  }
  render() {
    return (
      <div className="App">
        {this.props.cheeses.map((cheese, index) => (
          <ul>
            <li key={index}>
            {cheese}
            </li>
          </ul>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  cheeses: state.cheeses
})
export default connect(mapStateToProps)(App);
 