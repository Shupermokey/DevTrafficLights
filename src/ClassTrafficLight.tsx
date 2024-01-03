import { Component } from "react";

export class ClassTrafficLight extends Component {
  state = {
    lightColor: ["red", "yellow", "green", "black"],
    activeColor: 0,
    inactiveColor: 3,
  };

  changeColor = () => {
    if (this.state.activeColor < 2) {
      this.setState({ activeColor: this.state.activeColor + 1 });
    } else {
      this.setState({ activeColor: 0 });
    }
  };

  returnLightColor = (num: number) => {
    return `circle ${
      this.state.activeColor % 3 === num
        ? this.state.lightColor[this.state.activeColor]
        : this.state.lightColor[this.state.inactiveColor]
    }`;
  };
  render() {
    return (
      <div className="traffic-light-box">
        <h2>Class Traffic Light</h2>
        <div className="traffic-light">
          {/* Background color can be black | yellow | red | green */}
          <div className={this.returnLightColor(0)}></div>
          <div className={this.returnLightColor(1)}></div>
          <div className={this.returnLightColor(2)}></div>
        </div>
        <button onClick={this.changeColor} className="next-state-button">
          Next State
        </button>
      </div>
    );
  }
}
