import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const CustomCheckbox = ({isChecked, onPress, label}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={[styles.checkbox, isChecked && styles.checkboxChecked]}>
        {isChecked && <View style={styles.checkmark} />}
      </View>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 8,
    padding: 10,
    backgroundColor: 'rgba(82,134,243,0.1)',
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#5286f3',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxChecked: {
    backgroundColor: '#5286f3',
  },
  checkmark: {
    width: 15,
    height: 15,
    borderRadius: 10,
    backgroundColor: '#5286f3',
  },
  label: {
    fontSize: 14,
    color: '#333',
    marginLeft: 8,
  },
});

export default CustomCheckbox;
