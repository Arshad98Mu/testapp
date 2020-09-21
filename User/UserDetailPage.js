import React from 'react';
import {View} from 'native-base';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Body,
  Text,
  Title,
  Left,
  Right,
} from 'native-base';

export default class UserDetailPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.userData.data.Users.firstname,
      address: this.props.userData.data.Users.street_address,
      contact: this.props.userData.data.Users.phone_number,
    };

    console.log(this.props.userData);
  }

  render() {
    return (
      <Container>
        <Header>
          <Left style={{flex: 1}} />
          <Body style={{flex: 0}}>
            <Title>Profile</Title>
          </Body>
          <Right style={{flex: 1}} />
        </Header>
        <Content>
          <Card>
            <CardItem style={{height: 100, margin: 10}}>
              <Body style={{alignContent: 'center', justifyContent: 'center'}}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 20,
                    paddingVertical: 10,
                  }}>
                  Name
                </Text>
                <Text>{this.state.name}</Text>
              </Body>
            </CardItem>
          </Card>
          <Card>
            <CardItem style={{height: 100, margin: 10}}>
              <Body
                style={{
                  alignContent: 'center',
                  justifyContent: 'flex-start',
                }}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 20,
                    paddingVertical: 10,
                  }}>
                  Address
                </Text>
                <Text>{this.state.address}</Text>
              </Body>
            </CardItem>
            <CardItem style={{height: 100, margin: 10}}>
              <Body
                style={{
                  alignContent: 'center',
                  justifyContent: 'flex-start',
                }}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 20,
                    paddingVertical: 10,
                  }}>
                  Contact
                </Text>
                <Text>{this.state.contact}</Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
