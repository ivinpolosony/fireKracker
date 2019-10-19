import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { css, jsx } from "@emotion/core";

const style = {
  width: "100%",
  height: "500px"
};

class Camera extends Component {
  componentDidMount() {}

  handleIcon = () => {
    this.props.onPay();
  };

  render() {
    return (
      <div
        onClick={this.handleIcon}
        className={css`
          bottom: 1rem;
          right: 5%;
          // position: fixed;
          display: flex;
          background-color: var(--main-color);
          padding: 20px;
          width: 70px;
          height: 70px;
          color: #ffff;
          text-align: center;
          border-radius: 50%;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          font-size: 1.7rem;
        `}
      >
        <FontAwesomeIcon
          className={css`
            display: flex;
            justify-content: center;
            align-items: center;
          `}
          icon={faCamera}
          size="lg"
        />
      </div>
    );
  }
}

export default Map;
