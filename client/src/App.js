import React, { Component } from 'react';
import LineChart from './LineChart';

export default class FetchStockQuotes extends Component {
  
  state = {
    loading: true,
    data: null
  };

  async componentDidMount(){
    const url = 'http://localhost:3000/AAPL';
    const response = await fetch(url);
    const data = await response.json();
  
    this.setState({
      loading: false,
      data: data
    })
  }
  
  render() {
    return (
      <div className="App">
        <div className="header"> Apple</div>
        <div className="header"> $188.47</div>
        {this.state.data && <LineChart data={this.state.data}/>} 
      </div>
    );
  }
}
