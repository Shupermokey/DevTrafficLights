import { Component } from "react";

export class ClassTrafficLight extends Component {
  state = {
    lightColor: ["red", "yellow", "green"],
    activeColor: 0,
  };

  changeColor = () => {
    if (this.state.activeColor < 3) {
      this.setState({ activeColor: this.state.activeColor + 2 });
    } else {
      this.setState({ activeColor: 0 });
    }
  };

  returnClassNameColor = (num: number) => {
    return `circle ${
      this.state.activeColor % 3 === num
        ? this.state.lightColor[this.state.activeColor]
        : "black"
    }`;
  };
  render() {
    return (
      <div className="traffic-light-box">
        <h2>Class Traffic Light</h2>
        <div className="traffic-light">
          {/* Background color can be black | yellow | red | green */}
          <div className={this.returnClassNameColor(0)}></div>
          <div className={this.returnClassNameColor(1)}></div>
          <div className={this.returnClassNameColor(2)}></div>
        </div>
        <button onClick={this.changeColor} className="next-state-button">
          Next State
        </button>
      </div>
    );
  }
}
