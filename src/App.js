import React, { Component } from 'react';
import Chart from './components/Chart';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      chartData: {}
    }
  };

  componentWillMount() {
    this.getChartData();
  }

  getChartData = () => {
    // make requests here
    this.setState({
      chartData:  {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'Bar Chart Dataset',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: [65, 59, 80, 81, 56, 55, 40, 75]
          }
        ]
      }
    })
  }

  render() {
    return (
      <div className="App">
        <Chart chartData={this.state.chartData} />
      </div>
    );    
  }
}