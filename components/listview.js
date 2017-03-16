import React, { Component } from 'react';
import { ListView, StyleSheet, Text, Image, View, TouchableOpacity} from 'react-native';

import { StackNavigator } from 'react-navigation'
class ListViewTest  extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    };
  }

  static navigationOptions = {
    title: 'Menu'
  };

  componentDidMount() {
    fetch('http://128.97.14.140:3000/dashboard')
      .then(function(response) {
        return response.json();
      })
      .then(function(ResponseData) {
        this.setState({ dataSource: this.state.dataSource.cloneWithRows(ResponseData)});
      }.bind(this))
      .catch(function(error) {
        console.log(error)
      });
  }



  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{flex: 1, paddingTop: 40, paddingLeft: 20}}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) =>
            <TouchableOpacity onPress={() => navigate('Page')}>
              <View>
                <Text style={styles.title}>{rowData.title}</Text>
                <Image source={{uri: 'http://128.97.14.140:3000/' + rowData.img }}
                       style={{width: 50 , height: 50}} />
              </View>
            </TouchableOpacity>
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
  }
});


export default ListViewTest
