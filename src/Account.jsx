import React, { Component } from 'react';
import styled from 'styled-components';
import Button from './Button.jsx';

class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {
      account: [],
    };
  }
  async componentDidMount() {
    const response = await fetch('https://tracktik-challenge.staffr.com/me');
    const json = await response.json();
    this.setState({ sites: json });
    console.log(this.state);
  }
  render() {
    return (
      <>
        <Title>Account</Title>
        <StyledList>
          {this.state.sites.map((site) => (
            <ListElement>
              <img src={site.logo}></img>
              <Text>{site.title}</Text>
              <Text>{site.contacts.main.phoneNumber}</Text>
              <Text>{site.contacts.main.address.street}</Text>
            </ListElement>
          ))}
        </StyledList>
        <Button type="next" />
      </>
    );
  }
}

const Title = styled('div')`
  width: 360px;
  height: 80px;
  background-color: #362b2b;
  color: white;
  text-align: center;

  margin-bottom: 5px;
`;

const StyledList = styled('ul')`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  overflow-y: scroll;
`;

const ListElement = styled('li')`
  margin: 0;
  width: 360px;
  height: 75px;
  background-color: #362b2b;

  margin-bottom: 5px;
`;
const Text = styled('span')`
  color: white;
  font-family: 'Averta Light';
`;
const Next = styled('div')`
  bottom: 5px;
  right: 5px;
`;

export default List;
