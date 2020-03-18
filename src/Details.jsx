import React, { Component } from 'react';
import styled from 'styled-components';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import emailIcon from '@iconify/icons-mdi-light/email';
import accountIcon from '@iconify/icons-mdi-light/account';
import phoneIcon from '@iconify/icons-mdi-light/phone';
import mapMarker from '@iconify/icons-mdi-light/map-marker';
import Button from './Button.jsx';
import { Icon } from '@iconify/react';
import chevronDoubleLeft from '@iconify/icons-mdi-light/chevron-double-left';
class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
    };
  }
  componentDidUpdate() {
    if (this.props.details.id === this.props.siteID) {
      this.props.dispatch({
        type: 'REHYDRATE',
      });
    }
  }
  handleBack() {
    this.setState({ redirect: true });
  }

  render() {
    if (this.state.redirect) {
      return <Redirect push to="/list" />;
    }
    if (this.props.rehydrated !== true) {
      return <Title>Loading</Title>;
    } else
      return (
        <>
          <SiteDiv>
            <Title>{this.props.details.title}</Title>
            <ImgDiv>
              {this.props.details.images.map((image) => (
                <SiteImg src={image}></SiteImg>
              ))}
            </ImgDiv>
            <TextList>
              <Text>
                <Icon
                  icon={accountIcon}
                  style={{ color: '#ffffff', fontSize: '30px', padding: '3px' }}
                />
                {' ' + this.props.details.contacts.main.lastName},
                {' ' + this.props.details.contacts.main.firstName}
              </Text>
              <Text2>{' ' + this.props.details.contacts.main.jobTitle}</Text2>
              <Text>
                <Icon
                  icon={mapMarker}
                  style={{ color: '#ffffff', fontSize: '30px', padding: '3px' }}
                />
                {' ' + this.props.details.contacts.main.address.street}
              </Text>
              <Text>
                <Icon
                  icon={emailIcon}
                  style={{ color: '#ffffff', fontSize: '30px', padding: '3px' }}
                />
                {' ' + this.props.details.contacts.main.email}
              </Text>
              <Text>
                <Icon
                  icon={phoneIcon}
                  style={{ color: '#ffffff', fontSize: '30px', padding: '3px' }}
                />
                {' ' + this.props.details.contacts.main.phoneNumber}
              </Text>
            </TextList>
          </SiteDiv>
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
  height: 20px;
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
const SiteDiv = styled('div')`
  margin: 0;
  width: 360px;
  height: 580px;

  display: flex;
  flex-direction: column;

  align-items: center;
`;
const ImgDiv = styled('div')`
  height: 215px;
  display: flex;
  flex-direction: row;
  width: 360px;
  flex-wrap: nowrap;
  overflow-x: auto;
  margin-bottom: 20px;
`;
const SiteImg = styled('img')`
  min-width: 350px;
  padding: 5px;
  height: 205px;
  border-radius: 5px;
  border-style: none;
`;

const TextList = styled('ul')`
  list-style-type: none;
  width: 300px;
  margin: 0;
  padding: 0;
  color: #ffffff;
`;
const Text2 = styled('li')`
  padding: 0px;
  font-family: 'Montserrat', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  font-style: italic;
  font-size: 14px;
  line-height: 16px;
  text-align: left;
`;

const Text = styled('li')`
  padding: 4px;
  font-family: 'Montserrat', sans-serif;
  display: flex;
  justify-content: left;
  align-items: center;
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
  text-align: left;
`;
const mapStateToProps = (state) => {
  return {
    siteID: state.siteID,
    details: state.details,
    rehydrated: state.rehydrated,
  };
};
export default connect(mapStateToProps)(Details);
