import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const CustomRadioButton = ({isSelected, onPress, label}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View
        style={[styles.radioButton, isSelected && styles.radioButtonSelected]}
      />
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 8,
    padding: 15,
    elevation: 2,
  },
  radioButton: {
    width: 17,
    height: 17,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#5286f3',
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioButtonSelected: {
    backgroundColor: '#5286f3',
  },
  label: {
    fontSize: 15,
    color: '#333',
    marginLeft: 8,
  },
});

export default CustomRadioButton;
