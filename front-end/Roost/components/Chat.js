import React, { Component } from 'react';
import { Container, Content, Button, Text, Footer, 
Icon, FooterTab, Header, View, Left, Body, Title,
Right, DeckSwiper, Card, CardItem, Thumbnail, H1, List, ListItem} from 'native-base';
var styles = require('./styles'); 
import {
  AppRegistry,
  StyleSheet,
  Navigator,
  Image,
  TouchableHighlight,
} from 'react-native';
var GiftedMessenger = require('react-native-gifted-messenger');
var {Dimensions} = React;

/*  
    
*/

var threads = [{title: 'baseball', description: 'come play!'},
            {category: 'Sports', title: 'soccer', description: 'come play!'},
            {category: 'Sports', title: 'tennis', description: 'come play!'},
            {category: 'Sports', title: 'hockey', description: 'come play!'},
            {category: 'Eat', title: 'breakfast', description: 'come get breakfast!'},
            {category: 'Adventures', title: 'Hiking', description: 'come Hiking!'},
            {category: 'Study Groups', title: 'CS307', description: 'Looking for a group!'}]


export default class Chat extends Component {
  constructor(threadsHandler, id) {
        super()
        this.state = {
            page: 'chat',
            messages: []
        }
     this.onSend = this.onSend.bind(this)
     this.renderPage = this.renderPage.bind(this) 
    
    }
    onSend(messages = []) {
        this.setState((previousState) => {
        return {
            messages: GiftedChat.append(previousState.messages, messages),
        };
        });
    }

    renderPage() {
        if (this.state.page === 'chat') {
            return (
                <Container>
        <Header>
            <Left>
                <Button transparent onPress={() => this.props.threadsHandler()}>
                    <Icon name='arrow-back' />
                </Button>
            </Left>
            <Body>
                <Title>Chat_ID</Title>
            </Body>
            <Right>
                <Button transparent onPress={() => this.setState({page: 'menu'})}>
                    <Icon name='menu' />
                </Button>
            </Right>
        </Header>
        <Content>
          
        </Content>
      </Container>
      )
        }
        
        else if (this.state.page === 'menu') {
            return (
                <Container>
        <Header>
            <Left>
                <Button transparent onPress={() => this.setState({page: 'chat'})}>
                    <Icon name='arrow-back' />
                </Button>
            </Left>
            <Body>
                <Title>Chat Menu</Title>
            </Body>
            <Right>
            </Right>
        </Header>
        <Content>
          
        </Content>
      </Container>
            )
        }
    }

    componentWillMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          text: 'Hello developer',
          createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://facebook.github.io/react/img/logo_og.png',
          },
        },
      ],
    });
  }

  render() {
    return (
      <Container>
        {this.renderPage()}
      </Container>
    );
  }
}


