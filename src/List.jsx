import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import Button from './Button.jsx';
import { Icon, InlineIcon } from '@iconify/react';
import chevronRight from '@iconify/icons-mdi-light/chevron-right';
import chevronDoubleDown from '@iconify/icons-mdi-light/chevron-double-down';
class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sites: [],
      limit: 20,
    };
  }
  async componentDidMount() {
    const response = await fetch(
      'https://tracktik-challenge.staffr.com/sites?_start=0&_end=' +
        this.state.limit
    );
    console.log(response);
    const json = await response.json();
    this.setState({ sites: json });
    console.log(this.state);
  }
  handleLoadSites = () => {
    const response = fetch(
      'https://tracktik-challenge.staffr.com/sites?_start=0&_end=' +
        this.state.limit
    )
      .then((res) => res.json())
      .then((json) =>
        this.setState({ sites: json, limit: this.state.limit + 20 })
      );
  };
  render() {
    return (
      <>
        <Title>SITES</Title>
        <StyledList>
          {this.state.sites.map((site) => (
            <ListElement>
              <ListImg src={site.images[0]}></ListImg>
              <TextList>
                <TextTitle>{site.title}</TextTitle>
                <Text>{site.contacts.main.phoneNumber}</Text>
                <Text>{site.contacts.main.address.street}</Text>
              </TextList>
              <Button type="next">
                <Icon
                  icon={chevronRight}
                  style={{ color: 'white', fontSize: '35px' }}
                />
              </Button>
            </ListElement>
          ))}
        </StyledList>
        <Button type="more" onClick={this.handleLoadSites}>
          <Icon
            icon={chevronDoubleDown}
            style={{
              fontSize: '35px',
              left: '5px',
              top: '5px',
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

const ListElement = styled('li')`
  margin: 0;
  width: 360px;
  height: 75px;
  background-color: #222222;
  margin-bottom: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
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

export default List;