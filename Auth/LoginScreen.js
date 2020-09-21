import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  ToastAndroid,
} from 'react-native';
import axios from 'axios';
import validator from 'validator';

export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      name: '',
      password: '',
    };
  }

  input = (label, img) => {
    return (
      <View
        style={{
          width: '90%',
          backgroundColor: 'white',
          borderRadius: 25,
          height: 50,
          elevation: 6,
          marginBottom: 20,
          justifyContent: 'space-between',
          flexDirection: 'row-reverse',
        }}>
        <Image
          source={img}
          style={{
            height: 25,
            width: 25,
            margin: 10,
          }}
        />
        <TextInput
          style={{height: 50, color: 'black', paddingLeft: 20}}
          placeholder={label}
          placeholderTextColor="black"
          onChangeText={(text) => {
            if (label === 'Username') {
              this.setState({
                name: text,
              });
            } else if (label === 'Email') {
              this.setState({
                email: text,
              });
            } else {
              this.setState({
                password: text,
              });
            }
          }}
        />
      </View>
    );
  };

  showToast = (val) => {
    ToastAndroid.showWithGravity(val, ToastAndroid.SHORT, ToastAndroid.TOP);
  };

  login = () => {
    if (validator.isEmail(this.state.email.trim())) {
      if (this.state.name.trim() != '') {
        if (this.state.password.trim() != '') {
          this.loginApiCall();
        } else {
          this.showToast('Please enter password');
        }
      } else {
        this.showToast('Please enter valid name');
      }
    } else {
      this.showToast('Please enter valid email');
    }
  };

  loginApiCall = () => {
    axios
      .post(`https://devapi.fiiviq.com/users/commonlogin.json`, {
        username: this.state.email,
        password: this.state.password,
        url: 'wertyu.fiiviq.com',
        multiple_user_login: {
          app_version: '1.0',
          device_model: 'SM-N750',
          device_name: 'samsung',
          device_token: 'asdasdasd',
          device_type: 'android',
          device_uid: '5fd489c904abbaee',
          device_version: '5.1.1',
        },
      })
      .then((res) => {
        console.log(res.data.code);
        if (res.data.code == 200) this.props.checkLoggedin(true, res.data);
        else this.showToast('Please check your credentials and try again');
      })
      .catch((e) => {
        this.showToast('Server Error');

        console.log(e);
      });
  };

  render() {
    return (
      <View style={{flex: 1, flexDirection: 'column'}}>
        <View style={{flex: 0.25, backgroundColor: 'black'}}>
          <Image
            resizeMode={'contain'}
            style={{width: '100%', height: '100%'}}
            source={require('../assets/ic_app_icon.png')}
          />
        </View>
        <View
          style={{
            flex: 0.75,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          {this.input('Username', require('../assets/ic_workshp_url.png'))}
          {this.input('Email', require('../assets/ic_user.png'))}
          {this.input('Password', require('../assets/ic_password.png'))}
          <TouchableOpacity
            onPress={() => {
              this.showToast('Loading');
              this.login();
            }}
            style={{
              width: '90%',
              backgroundColor: '#15ddf1',
              borderRadius: 25,
              height: 50,
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 40,
              marginBottom: 10,
            }}>
            <Text style={{color: 'white'}}>LOGIN</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
