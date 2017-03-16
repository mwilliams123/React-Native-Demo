import React from 'react';
import {StyleSheet, Text, Image, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation'

export function renderRow(data) {
  var imgURL = 'http://128.97.14.140:3000/' + data.img
  //const { navigate } = this.props.navigation;
  return (
    <View>
      <Button
        onPress={() => navigate('Page')}
        title={data.title}
      />
      <Image source={{uri: imgURL}}
             style={{width: 50 , height: 50}} />

    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
  }
});
