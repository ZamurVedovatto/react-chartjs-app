import React, { Component } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';

export default class Chart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      chartData: props.chartData
    }
  };

  static defaultProps = {
    displayTitle: true,
    displayLegend: true,
    position: 'bottom'

  }

  render() {
    const { chartData } = this.state;
    return (
      <div className="chart">
        <Bar
          data={chartData}
          options={{
            title: {
              display: this.props.displayTitle,
              text: 'Largest Cities',
              fontSize: 25
            },
            legend: {
              display: this.props.displayLegend,
              position: this.props.position,
              labels: {
                fontColor: "#000000"
              }
            }
          }}
        />        
      </div>
    )
  }
}