import React, { Component } from 'react';
import styled from 'styled-components';
const ButtonDefault = styled.button`
  background-color: #512da8ff;
  position: relative;
  display: inline-block;
  z-index: 3;
  color: white;
  justify-content: center;
  font-size: 16px;
  font-weight: bold;
  &:hover {
    background: #1ed23eff;
    border-color: #1ed23eff;
  }
`;

const More = styled.button`
  background-color: #e6000f;
  border: none;
  color: white;
  padding: 20px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  margin: 2px 2px;
  position: absolute;
  width: 45px;
  height: 45px;
  left: 304px;
  top: 582px;
  border-radius: 50%;
  &:hover {
  }
`;

const Next = styled.button`
  background-color: #222222;
  border: none;
  color: white;
  padding: 5px;
  font-size: 16px;
  width: 45px;
  height: 45px;
  &:hover {
  }
`;

const getComponentForType = (type) => {
  if (type === 'more') {
    return More;
  } else if (type === 'next') {
    return Next;
  } else {
    return ButtonDefault;
  }
};

class Button extends Component {
  render() {
    const Component = getComponentForType(this.props.type);
    return (
      <Component onClick={this.props.onClick}>{this.props.children}</Component>
    );
  }
}
export default Button;
