import React, { Component } from 'react';
import { AppRegistry, ListView, StyleSheet, Platform, Text, Image, View } from 'react-native';

import ListViewTest from './components/listview.js';
import Tabs from './components/Tab'
import { StackNavigator, TabNavigator } from 'react-navigation';

const TestProject = StackNavigator({
  Home: {screen: ListViewTest},
  Page: {screen: Tabs}
});

AppRegistry.registerComponent('TestProject', () => TestProject);
