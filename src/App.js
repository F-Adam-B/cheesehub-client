import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import  AddCheese  from './components/add-cheese';
import { connect }  from 'react-redux';
import { fetchCheese, } from './actions';
import { addCheeseSuccess } from './actions/cheese';

class App extends Component {

  componentDidMount() {
    this.props.dispatch(fetchCheese());
  }

  addCheeseSuccess(text) {
        this.props.dispatch(addCheeseSuccess(text))
    }

  render() {
    return (
      
      <div className="App">
      <div className="addCheese">
        <AddCheese />
      </div>
      <ul>
        {this.props.cheeses.map((cheese, index) => (
          
            <li key={index}>
              {cheese}
            </li>
          
        ))}
      </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  cheeses: state.cheeses
})
export default connect(mapStateToProps)(App);
 