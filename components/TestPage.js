import React, { Component } from 'react';
import { Text, ScrollView} from 'react-native';
import { StackNavigator } from 'react-navigation'


class TestPage extends Component {

  render() {
    return <ScrollView>
      <Text>{this.props.data}</Text>
    </ScrollView>;
  }
}


export default TestPage
