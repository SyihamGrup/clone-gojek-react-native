import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ backgroundColor: 'white', flex: 1 }}>
          <View
            style={{
              marginHorizontal: 17,
              flexDirection: 'row',
              paddingTop: 15
            }}>
            <View style={{ position: 'relative', flex: 1 }}>
              <TextInput
                placeholder="What do you want to eat?"
                style={{
                  borderWidth: 1,
                  borderRadius: 25,
                  borderColor: '#E8E8E8',
                  height: 40,
                  fontSize: 13,
                  paddingLeft: 45,
                  paddingRight: 20,
                  backgroundColor: 'white',
                  marginRight: 18
                }}
              />
              <Image
                source={require('./icons/help.png')}
                style={{ position: 'absolute', top: 5, left: 6 }}
              />
            </View>
            <View
              style={{
                width: 35,
                alignItems: 'center',
                justifyContent: 'center'
              }}>
              <Image source={require('./icons/help.png')} />
            </View>
          </View>
        </View>

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
