import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {toppings: 'Cheese'};
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  render(){

      return (
        <div>
          <h1>Did someone say pizza?</h1>
          <h2>{this.state.toppings}</h2>
        </div>
    )
  }
}

export default App;