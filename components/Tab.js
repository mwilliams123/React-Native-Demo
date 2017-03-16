import React, { Component } from 'react';
import { Text, View} from 'react-native';
import { StackNavigator } from 'react-navigation'
import TestPage from './TestPage';
import Swiper from 'react-native-swiper';

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
        { data: 'This is page 2'},
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
