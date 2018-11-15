import React, { Component } from 'react';
import { Text, View, TouchableHighlight, ScrollView } from 'react-native';
import { Card, Avatar, Divider } from 'react-native-elements';
import { header, cardLeft, cardRight } from './styles';
import { Feed } from '../Feed/index';

class ChannelMemberView extends Component {
  render() {
    let { reportNav } = this.props;
    const { navigate } = this.props.navigation;

    const goToHomepage = () => {
      reportNav(); // this is an example of how you can listen to navigation
      // but you can also subscribe to actual navigation events
      navigate('TaskList');
    };

    return (
      <View>
        <View style={header.container}>
          <Text style={header.title}>#Leetcoders</Text>
          <Avatar
            size={100}
            rounded
            source={require('../../images/leetcodeIcon.png')}
            containerStyle={header.avatar}
          />
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'stretch' }}>
          <Card containerStyle={cardLeft.container}>
            <View style={cardLeft.statsContainer}>
              <Text style={cardLeft.stats}>Rank</Text>
              <Text style={[cardLeft.stats, cardLeft.number]}>Top 10%</Text>
            </View>
            <View style={cardLeft.statsContainer}>
              <Text style={cardLeft.stats}>Rating</Text>
              <Text style={[cardLeft.stats, cardLeft.number]}>1830</Text>
            </View>
          </Card>

          <Card containerStyle={cardRight.container}>
            <View style={cardRight.taskContainer}>
              <Text style={cardRight.task}>LeetCode Daily</Text>
              <Text style={cardRight.task}>30</Text>
            </View>
            <View style={cardRight.taskContainer}>
              <Text style={cardRight.task}>LeetCode Daily 2x</Text>
              <Text style={cardRight.task}>60</Text>
            </View>
            <View style={cardRight.taskContainer}>
              <Text style={cardRight.task}>Learn Data Struct</Text>
              <Text style={cardRight.task}>100</Text>
            </View>
            <View style={cardRight.taskContainer}>
              <Text style={cardRight.task}>Solve 100 Probs</Text>
              <Text style={cardRight.task}>500</Text>
            </View>

            <Divider style={{ backgroundColor: '#bbb', height: 1 }} />

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                alignItems: 'center'
              }}
            >
              <TouchableHighlight
                style={cardRight.taskButton}
                underlayColor="#aaa"
                onPress={() => goToHomepage()}
              >
                <Text style={cardRight.taskButtonText}>More</Text>
              </TouchableHighlight>
              <TouchableHighlight
                style={cardRight.taskButton}
                underlayColor="#aaa"
                onPress={() => console.log('Go to create task page')}
              >
                <Text style={cardRight.taskButtonText}>Add</Text>
              </TouchableHighlight>
            </View>
          </Card>
        </View>

        <Divider
          style={{
            backgroundColor: '#999',
            marginTop: 20,
            marginHorizontal: 20
          }}
        />

        <ScrollView>
          <Feed
            name="QM"
            taskTitle="LeetCode Daily"
            comment="solved problem 251!"
            timestamp="3 hours ago"
            points="+30"
          />
          <Feed
            name="BB"
            taskTitle="LeetCode Daily 2x"
            comment="yay makin progress"
            timestamp="5 hours ago"
            points="+60"
          />
          <Feed
            name="SY"
            taskTitle="Learn Data Struct"
            comment=""
            timestamp="8 hours ago"
            points="+100"
          />
          <Feed
            name="BZ"
            taskTitle="Solve 100 Problems"
            comment="wow this group is so fun"
            timestamp="1 day ago"
            points="+30"
          />
          <Feed
            name="JS"
            taskTitle="LeetCode Daily"
            comment="xxx xxxx xxxxx"
            timestamp="2 days ago"
            points="+30"
          />
        </ScrollView>
      </View>
    );
  }
}

export default ChannelMemberView;