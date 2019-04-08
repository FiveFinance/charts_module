import React, { Component } from 'react';
import LineChart from './LineChart';
import ToolTip from './ToolTip';

class App extends Component {
  constructor(props) {
  super(props);
  this.state = {
    loading: true,
    data: null,
    hoverLoc: null,
    activePoint: null
  };
}

  handleChartHover(hoverLoc, activePoint){
    this.setState({
      hoverLoc: hoverLoc,
      activePoint: activePoint
    })
  }

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
                    { !this.state.loading ?
              <LineChart data={this.state.data} onChartHover={ (a,b) => this.handleChartHover(a,b) }/>
              : null }
      </div>
    );
  }
}

export default App;
