import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = { details: '' };
  }
  async componentDidMount() {
    const response = await fetch(
      'https://tracktik-challenge.staffr.com/sites/' + this.props.siteID
    );
    const json = await response.json();
    this.setState({ details: json });
    console.log(this.state);
  }
  render() {
    return (
      <>
        <Title></Title>
      </>
    );
  }
}

const Title = styled('div')`
  width: 360px;
  height: 40px;
  background-color: black;
  color: white;
  text-align: center;
  align-items: center;
  margin-top: 5px;
  margin-bottom: 5px;
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 600;
`;
const ListImg = styled('img')`
  width: 40px;
  height: 40px;
  border-radius: 5px;
  border-style: none;
  padding: 5px;
  margin-left: 10px;
`;

const StyledList = styled('ul')`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  overflow-y: scroll;
`;

const TextList = styled('ul')`
  list-style-type: none;
  width: 200px;
  margin: 0;
  padding: 0;
  color: #ffffff;
`;

const TextTitle = styled('li')`
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 16px;
  margin-bottom: 5px;
`;

const Text = styled('li')`
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 11px;
  line-height: 13px;
`;
const mapStateToProps = (state) => {
  return {
    siteID: state.siteID,
  };
};

export default connect(mapStateToProps)(Details);
