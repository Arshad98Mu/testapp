/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import LoginScreen from './Auth/LoginScreen';
import UserDetailPage from './User/UserDetailPage';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedin: false,
      userData: null,
    };
  }

  checkLoggedin = (isLoggedin, userData) => {
    this.setState({
      isLoggedin,
      userData,
    });
  };

  render() {
    return (
      <>
        {!this.state.isLoggedin ? (
          <LoginScreen checkLoggedin={this.checkLoggedin} />
        ) : (
          <UserDetailPage userData={this.state.userData} />
        )}
      </>
    );
  }
}
