import React, { Component } from 'react';
import styled from 'styled-components';

const StyledDetails = styled('div')``;

class Details extends Component {
  render() {
    return <StyledDetails>{this.props.children}</StyledDetails>;
  }
}

export default Details;
