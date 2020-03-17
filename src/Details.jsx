import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import emailIcon from '@iconify/icons-mdi-light/email';
import accountIcon from '@iconify/icons-mdi-light/account';
import phoneIcon from '@iconify/icons-mdi-light/phone';
import mapMarker from '@iconify/icons-mdi-light/map-marker';
import { Icon } from '@iconify/react';

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = { details: [], isLoading: true };
  }
  async componentDidMount() {
    fetch('https://tracktik-challenge.staffr.com/sites/' + this.props.siteID)
      .then((res) => res.json())
      .then((json) => {
        this.setState({ details: json, isLoading: false });
      });
  }

  render() {
    if (this.state.isLoading === true) {
      return <Title>Loading</Title>;
    } else
      return (
        <>
          <Title>{this.state.details.title}</Title>
          <SiteDiv>
            <ImgDiv>
              {this.state.details.images.map((image) => (
                <SiteImg src={image}></SiteImg>
              ))}
            </ImgDiv>
            <TextList>
              <Text>
                <Icon
                  icon={accountIcon}
                  style={{ color: 'white', fontSize: '22px' }}
                />
                {this.state.details.contacts.main.lastName},
                {this.state.details.contacts.main.firstName}
              </Text>
              <Text>
                <Icon
                  icon={mapMarker}
                  style={{ color: 'white', fontSize: '22px' }}
                />
                {this.state.details.contacts.main.address.street}
              </Text>
              <Text>
                <Icon
                  icon={emailIcon}
                  style={{ color: 'white', fontSize: '22px' }}
                />
                {this.state.details.contacts.main.email}
              </Text>
              <Text>
                <Icon
                  icon={phoneIcon}
                  style={{ color: 'white', fontSize: '22px' }}
                />
                {this.state.details.contacts.main.phoneNumber}
              </Text>
            </TextList>
          </SiteDiv>
        </>
      );
  }
}

const Title = styled('div')`
  width: 360px;
  height: 30px;
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
  height: 330px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ImgDiv = styled('div')`
  height: 160px;
  display: flex;
  flex-direction: row;
  width: 360px;
  overflow-x: auto;
`;
const SiteImg = styled('img')`
  width: 350px;
  padding: 5px;
  height: auto;
  border-radius: 5px;
  border-style: none;
`;

const TextList = styled('ul')`
  list-style-type: none;
  width: 250px;
  margin: 0;
  padding: 0;
  color: #ffffff;
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
