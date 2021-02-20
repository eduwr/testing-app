import React from 'react';
import {Text, View} from 'react-native';

const Hello = ({name}) => (
  <View testID="greeting">
    <Text>Hello, {name}!</Text>
  </View>
);

export default Hello;
