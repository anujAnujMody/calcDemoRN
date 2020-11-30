import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Colors from '../theme/Colors';
import Helpers from '../theme/Helpers';

const Keys = (props) => {
  const {container, text} = styles;
  const {children, bgColor, flex = 1} = props;

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={props.onClick}
      style={[container, {backgroundColor: bgColor, flex: flex}]}>
      <Text style={text}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    ...Helpers.fillCenter,
    borderLeftWidth: 0.5,
  },
  text: {
    textAlign: 'center',
    fontSize: 25,
  },
});

export default Keys;
