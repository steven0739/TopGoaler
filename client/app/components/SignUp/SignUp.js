import React, { Component } from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import { Card, Input, Icon } from 'react-native-elements';
import { card, alt } from './styles';

class SignUp extends Component {
  _submit = () => {
    this.props.submit(this.state.username, this.state.password);
  };
  _signIn = () => {
    this.props.navigation.navigate('signIn');
  };
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: ''
    };
  }
  render() {
    return (
      <View style={card.container}>
        <Text style={card.title}>Top Goaler</Text>
        <Card title="Sign up for free">
          <Input
            containerStyle={{ marginBottom: 10 }}
            placeholder="Username"
            autoCapitalize="none"
            onChangeText={text => this.setState({ username: text })}
            leftIcon={<Icon name="person" size={24} color="grey" />}
          />
          <Input
            containerStyle={{ marginVertical: 10 }}
            placeholder="Password"
            autoCapitalize="none"
            textContentType="password"
            onChangeText={text => this.setState({ password: text })}
            leftIcon={<Icon name="lock" size={24} color="grey" />}
          />
          <Input
            containerStyle={{ marginVertical: 10 }}
            autoCapitalize="none"
            placeholder="Email"
            onChangeText={text => this.setState({ email: text })}
            leftIcon={<Icon name="email" size={24} color="grey" />}
          />
          <TouchableHighlight
            style={card.button}
            underlayColor="#aaa"
            onPress={this._submit}
          >
            <Text style={card.buttonText}> Create Account </Text>
          </TouchableHighlight>
        </Card>

        <Text style={alt.text}>Or you can also:</Text>
        <TouchableHighlight
          style={[alt.button, alt.facebook]}
          underlayColor="#aaa"
        >
          <View style={alt.container}>
            <Icon name="facebook-square" type="font-awesome" color="white" />
            <Text style={alt.buttonText}> Log in with Facebook </Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          style={[alt.button, alt.google]}
          underlayColor="#aaa"
        >
          <View style={alt.container}>
            <Icon name="google-plus" type="font-awesome" color="white" />
            <Text style={alt.buttonText}> Log in with Google </Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          style={[alt.button, alt.twitter]}
          underlayColor="#aaa"
        >
          <View style={alt.container}>
            <Icon name="twitter" type="font-awesome" color="white" />
            <Text style={alt.buttonText}> Log in with Twitter </Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight
          style={alt.button}
          underlayColor="#aaa"
          onPress={this._signIn}
        >
          <Text style={alt.buttonText}> I have an account </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export default SignUp;