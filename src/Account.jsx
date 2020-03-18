import React, { Component } from 'react';
import { Redirect } from 'react-router';
import styled from 'styled-components';
import Button from './Button.jsx';
import { Icon } from '@iconify/react';
import chevronDoubleLeft from '@iconify/icons-mdi-light/chevron-double-left';

class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {
      account: '',
      isLoading: true,
      redirect: false,
    };
  }
  async componentDidMount() {
    fetch('https://tracktik-challenge.staffr.com/me')
      .then((res) => res.json())
      .then((json) => {
        this.setState({ account: json, isLoading: false });
      });
  }
  render() {
    if (this.state.redirect) {
      return <Redirect push to="/list" />;
    }
    if (this.state.isLoading === true) {
      return <Title>Loading</Title>;
    } else
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
          <Button
            type="more"
            onClick={() => {
              this.handleBack();
            }}
          >
            <Icon
              icon={chevronDoubleLeft}
              style={{
                fontSize: '35px',
                left: '4px',
                top: '4px',
                position: 'absolute',
              }}
            />
          </Button>
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
