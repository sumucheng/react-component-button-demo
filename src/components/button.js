import React from "react";
import "./button.css";

class Button extends React.Component {
  constructor() {
    super();
    this.state = {
      active: false,
      x: 0,
      y: 0
    };
    this.myRef = React.createRef();
  }

  fn(event) {
    let { x: buttonX, y: buttonY } = this.myRef.current.getBoundingClientRect();
    let { clientX, clientY } = event;
    this.setState({
      active: true,
      x: clientX - buttonX - 5,
      y: clientY - buttonY - 5
    });
    this.props.onClick && this.props.onClick.call(null, "ryoko");
  }
  animationEnd() {
    this.setState({
      active: false
    });
  }

  render(props) {
    return (
      <button ref={this.myRef} className="xButton" onClick={this.fn.bind(this)}>
        <span className="value">{this.props.value}</span>
        {this.state.active ? (
          <span
            className="dot"
            onAnimationEnd={this.animationEnd.bind(this)}
            style={{ left: this.state.x, top: this.state.y }}
          ></span>
        ) : (
          ""
        )}
      </button>
    );
  }
}

export default Button;
