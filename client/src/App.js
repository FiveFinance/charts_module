import React, { Component } from 'react';


export default class FetchStockQuotes extends Component {
  
  state = {
    loading: true,
    date: null,
    price: null
  };

  async componentDidMount(){
    const url = 'http://localhost:3000/AAPL';
    const response = await fetch(url);
    const data = await response.json();
    this.setState({loading: false, date: data[0].time, price: data[0].price})
    console.log(data)
  }
  
  render() {
    return <div>
            {this.state.loading || !this.state.date ? (
              <div>loading...</div>
            ) : (
            <div>
                <div>{`${this.state.date} : ${this.state.price}`}</div>
            </div>
            )}
          </div>;
  }
}

/* <LineChart data={this.state.data} */