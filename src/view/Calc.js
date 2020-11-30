import {inject, Observer} from 'mobx-react';
import React, {useState} from 'react';
import {Keyboard, StyleSheet, Text, TextInput, View} from 'react-native';
import Keys from '../Components/Keys';
import Colors from '../theme/Colors';
import Helpers from '../theme/Helpers';
import {utils} from '../utils/Utils';

const Calc = (props) => {
  const {container, inputContainer, numbersContainer, input, rowView} = styles;

  var ref = null;
  const row1 = [
    {
      key: 'C',
      color: Colors.dark_grey,
    },
    {
      key: '+-',
      color: Colors.dark_grey,
      
    },
    {
      key: '%',
      color: Colors.dark_grey,
    },
    {
      key: '/',
      color: Colors.primary_color,
    },
  ];

  const row2 = [
    {
      key: '7',
      color: Colors.light_grey,
    },
    {
      key: '8',
      color: Colors.light_grey,
    },
    {
      key: '9',
      color: Colors.light_grey,
    },
    {
      key: 'x',
      color: Colors.primary_color,
    },
  ];

  const row3 = [
    {
      key: '4',
      color: Colors.light_grey,
    },
    {
      key: '5',
      color: Colors.light_grey,
    },
    {
      key: '6',
      color: Colors.light_grey,
    },
    {
      key: '-',
      color: Colors.primary_color,
    },
  ];

  const row4 = [
    {
      key: '1',
      color: Colors.light_grey,
    },
    {
      key: '2',
      color: Colors.light_grey,
    },
    {
      key: '3',
      color: Colors.light_grey,
    },
    {
      key: '+',
      color: Colors.primary_color,
    },
  ];
  const row5 = [
    {
      key: '0',
      color: Colors.light_grey,
      flex: 2,
    },
    {
      key: '.',
      color: Colors.light_grey,
    },
    {
      key: '=',
      color: Colors.light_grey,
    },
  ];

  useState(() => {}, []);

  return (
    <View style={container}>
      <View style={inputContainer}>
        <Observer>
          {() => (
            <TextInput
              editable={false}
              value={props.calcStore.text}
              style={input}
              keyboardType="number-pad"
              selectionColor={'black'}></TextInput>
          )}
        </Observer>
      </View>
      <View style={numbersContainer}>
        <View style={rowView}>
          {row1.map((item) => (
            <Keys
              key={item.key}
              bgColor={item.color}
              onClick={() => {
                props.calcStore.setValue(item.key);
              }}>
              {item.key}
            </Keys>
          ))}
        </View>
        <View style={rowView}>
          {row2.map((item) => (
            <Keys
              key={item.key}
              bgColor={item.color}
              onClick={() => {
                props.calcStore.setValue(item.key);
              }}>
              {item.key}
            </Keys>
          ))}
        </View>
        <View style={rowView}>
          {row3.map((item) => (
            <Keys
              key={item.key}
              bgColor={item.color}
              onClick={() => {
                props.calcStore.setValue(item.key);
              }}>
              {item.key}
            </Keys>
          ))}
        </View>
        <View style={rowView}>
          {row4.map((item) => (
            <Keys
              key={item.key}
              bgColor={item.color}
              onClick={() => {
                props.calcStore.setValue(item.key);
              }}>
              {item.key}
            </Keys>
          ))}
        </View>
        <View style={rowView}>
          {row5.map((item) => (
            <Keys
              key={item.key}
              bgColor={item.color}
              flex={item.flex}
              onClick={() => {
                props.calcStore.setValue(item.key);
              }}>
              {item.key}
            </Keys>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...Helpers.fill,
  },
  inputContainer: {
    flexBasis: '40%',
    backgroundColor: 'black',
    justifyContent: 'flex-end',
  },
  numbersContainer: {
    flexBasis: '60%',
  },
  input: {
    fontSize: 70,
    color: 'white',
    paddingHorizontal: 0,
    textAlign: 'right',
  },
  rowView: {
    ...Helpers.row,
    flex: 1,
    borderBottomColor: Colors.border_grey,
    borderBottomWidth: 1,
  },
});

export default inject('calcStore')(Calc);
