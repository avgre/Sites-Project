import React, { Component } from 'react';
import styled from 'styled-components';
import Button from './Button.jsx';

class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {
      account: '',
    };
  }
  async componentDidMount() {
    const response = await fetch('https://tracktik-challenge.staffr.com/me');
    console.log(response);
    const json = await response.json();
    this.setState({ account: json });
    console.log(this.state);
  }
  render() {
    return (
      <>
        <Title>Account</Title>

        <AccountDiv>
          <ListImg src={this.state.account.avatar}></ListImg>
          <TextList>
            <TextTitle>{this.state.account.givenName}</TextTitle>
            <Text>{'Username:  ' + this.state.account.username}</Text>
            <Text>{'Email:     ' + this.state.account.email}</Text>
            <Text>{'Country:   ' + this.state.account.locale}</Text>
          </TextList>
        </AccountDiv>
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
const AccountDiv = styled('div')`
  margin: 0;
  width: 360px;
  height: 200px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ListImg = styled('img')`
  margin-top: 20px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;
const TextList = styled('ul')`
  list-style-type: none;
  width: 360px;
  height: 300px;
  margin: 20px;
  padding: 0;
  color: #ffffff;
  background-color: #222222;
`;
const TextTitle = styled('li')`
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 16px;
  margin-bottom: 5px;
  padding: 7px;
`;
const Text = styled('li')`
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 11px;
  line-height: 13px;
  padding: 7px;
`;

export default Account;
