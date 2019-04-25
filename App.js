import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ backgroundColor: 'blue', flex: 1 }} />
        <View
          style={{ height: 54, backgroundColor: 'pink', flexDirection: 'row' }}>
          <View
            style={{
              backgroundColor: 'green',
              alignItems: 'center',
              justifyContent: 'center',
              flex: 1
            }}>
            <Text>Home</Text>
          </View>
          <View
            style={{
              backgroundColor: 'green',
              alignItems: 'center',
              justifyContent: 'center',
              flex: 1
            }}>
            <Text>Orders</Text>
          </View>
          <View
            style={{
              backgroundColor: 'green',
              alignItems: 'center',
              justifyContent: 'center',
              flex: 1
            }}>
            <Text>Help</Text>
          </View>
          <View
            style={{
              backgroundColor: 'green',
              alignItems: 'center',
              justifyContent: 'center',
              flex: 1
            }}>
            <Text>Inbox</Text>
          </View>
          <View
            style={{
              backgroundColor: 'green',
              alignItems: 'center',
              justifyContent: 'center',
              flex: 1
            }}>
            <Text>Account</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
