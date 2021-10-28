/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  View,
  NativeModules, 
  Button
} from 'react-native';
import CalendarModule from './src/Components/Calendar';

const App: () => Node = () => {

  const pressMe = () => {
    CalendarModule.createCalendarEvent('name', 'location')
  }

  return (
    <SafeAreaView>
      <StatusBar barStyle={'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        >
        <View>
          <Text>Hello World</Text>
          <Button title="Press me" onPress={pressMe}/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};


export default App;
