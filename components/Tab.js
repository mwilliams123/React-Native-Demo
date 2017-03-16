import React, { Component } from 'react';
import { Text, View} from 'react-native';

import { StackNavigator } from 'react-navigation'
var ScrollableTabView = require('react-native-scrollable-tab-view');
import TestPage from './TestPage';
import Swiper from 'react-native-swiper';

const str = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc turpis risus, scelerisque a ultrices at, accumsan in tellus. Nullam id purus vel libero vestibulum pellentesque. Mauris consequat pretium luctus. Cras id rutrum nunc, a sollicitudin felis. Curabitur dignissim neque in scelerisque vehicula. Praesent ac felis leo. Duis rutrum ligula odio, et sollicitudin purus ornare ut. Pellentesque quis ante non sem condimentum convallis. Curabitur varius eros ac turpis egestas bibendum. Donec eget pulvinar nulla. Integer ac elit nec neque scelerisque dignissim. Vestibulum interdum ex id ante auctor ultrices.'
const str2 = str + str + str + str + str
class Tabs extends Component {
  static navigationOptions = {
    cardStack: {
      gesturesEnabled: false
    }
  }
  constructor(props) {
    super(props)
    this.state = {
      items: []
    }
  }
  componentDidMount() {
    this.setState({
      items: [
        { data: 'This is page 1'},
        { data: 'String'},
        { data: 'This is page 3'}
      ]
    })
  }

  render() {
    return (
      <Swiper loop={false}>
        {this.state.items.map((item, key) => {
          return (
            <View key={key} style={styles.page}>
              <Text>{item.data}</Text>
            </View>
          )
        })}
      </Swiper>
    )
  }
}

const styles = {
  page: {
    flex: 1
  }
}

export default Tabs
