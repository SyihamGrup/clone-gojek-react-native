import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ backgroundColor: 'pink', flex: 1 }} />
        <View style={{ height: 54, flexDirection: 'row' }}>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              flex: 1
            }}>
            <Image
              source={require('./icons/home.png')}
              style={{ width: 26, height: 26 }}
            />
            <Text
              style={{
                fontSize: 10,
                color: '#545454',
                marginTop: 4
              }}>
              Home
            </Text>
          </View>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              flex: 1
            }}>
            <Image
              source={require('./icons/order.png')}
              style={{ width: 26, height: 26 }}
            />
            <Text style={{ fontSize: 10, color: '#545454', marginTop: 4 }}>
              Orders
            </Text>
          </View>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              flex: 1
            }}>
            <Image
              source={require('./icons/help.png')}
              style={{ width: 26, height: 26 }}
            />
            <Text style={{ fontSize: 10, color: '#545454', marginTop: 4 }}>
              Help
            </Text>
          </View>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              flex: 1
            }}>
            <Image
              source={require('./icons/inbox.png')}
              style={{ width: 26, height: 26 }}
            />
            <Text style={{ fontSize: 10, color: '#545454', marginTop: 4 }}>
              Inbox
            </Text>
          </View>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              flex: 1
            }}>
            <Image
              source={require('./icons/account.png')}
              style={{ width: 26, height: 26 }}
            />
            <Text style={{ fontSize: 10, color: '#545454', marginTop: 4 }}>
              Account
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
