import React from "react"
import "./LineChart.css"

class LineChart extends React.Component {
    // GET MAX & MIN X
    getMinX() {
      const {data} = this.props;
      return data[0].x;
    }
    getMaxX() {
      const {data} = this.props;
      return data[data.length - 1].x;
    }
    // GET MAX & MIN Y
    getMinY() {
      const {data} = this.props;
      return data.reduce((min, p) => p.y < min ? p.y : min, data[0].y);
    }
    getMaxY() {
      const {data} = this.props;
      return data.reduce((max, p) => p.y > max ? p.y : max, data[0].y);
    }
    // GET SVG COORDINATES
    getSvgX(x) {
      const {svgWidth} = this.props;
      return (x / this.getMaxX() * svgWidth);
    }
    getSvgY(y) {
      const {svgHeight} = this.props;
      return svgHeight - (y / this.getMaxY() * svgHeight);
    }
    // BUILD SVG PATH
    makePath() {
      const {data, color} = this.props;
      let pathD = "M " + this.getSvgX(data[0].x) + " " + this.getSvgY(data[0].y) + " ";
  
      pathD += data.map((point, i) => {
        return "L " + this.getSvgX(point.x) + " " + this.getSvgY(point.y) + " ";
      });
  
      return (
        <path className="linechart_path" d={pathD} style={{stroke: color}} />
      );
    }
    // BUILD GRID AXIS
    makeAxis() {
    const minX = this.getMinX(), maxX = this.getMaxX();
    const minY = this.getMinY(), maxY = this.getMaxY();
  
    return (
      <g className="linechart_axis">
        <line
          x1={this.getSvgX(minX)} y1={this.getSvgY(minY)}
          x2={this.getSvgX(maxX)} y2={this.getSvgY(minY)} />
        <line
          x1={this.getSvgX(minX)} y1={this.getSvgY(minY)}
          x2={this.getSvgX(minX)} y2={this.getSvgY(maxY)} />
      </g>
      );
    }
      makeArea() {
      const {data} = this.props;
      let pathD =
        "M " + this.getSvgX(data[0].x) + " " + this.getSvgY(data[0].y) + " ";
  
      data.map((point, i) => {
        pathD += "L " + this.getSvgX(point.x) + " " + this.getSvgY(point.y) + " ";
      });
  
      pathD += "L " + this.getSvgX(this.getMaxX()) + " " + this.getSvgY(this.getMinY()) + " "
      + "L " + this.getSvgX(this.getMinX()) + " " + this.getSvgY(this.getMinY()) + " ";
  
      return <path className="linechart_area" d={pathD} />
    }
    // RENDER & RETURN SVG PATH AND AXIS
    render() {
      const {svgHeight, svgWidth} = this.props;
  
      return (
        <svg viewBox={`0 0 ${svgWidth} ${svgHeight}`}>
          {this.makePath()}
          {this.makeArea()}
          {this.makeAxis()}
        </svg>
      );
    }
  }
  // DEFAULT PROPS
  LineChart.defaultProps = {
    data: [],
    color: '#1ae9aa',
    svgHeight: 300,
    svgWidth: 700
  }

export default LineChart;