import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ColorPickerComponent = ({options, selectedValue, onValueChange}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handlePress = value => {
    onValueChange(value);
    setIsExpanded(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => setIsExpanded(!isExpanded)}
        style={styles.button}>
        <Text style={[styles.buttonText, {color: selectedValue || '#777'}]}>
          {selectedValue || 'Select a color'}
        </Text>
        <Icon
          name={isExpanded ? 'chevron-up' : 'chevron-down'}
          size={24}
          color="#5286F3"
        />
      </TouchableOpacity>
      {isExpanded && (
        <View style={styles.dropdown}>
          <FlatList
            data={options}
            keyExtractor={item => item.value}
            numColumns={3}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() => handlePress(item.value)}
                style={styles.option}>
                <View
                  style={[styles.colorCircle, {backgroundColor: item.value}]}
                />
                <Text style={styles.optionText}>{item.label}</Text>
              </TouchableOpacity>
            )}
            scrollEnabled={false}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    position: 'relative',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    backgroundColor: 'white',
    // elevation: 2,
    borderRadius: 10,
    borderColor: '#e0e0e0',
    borderWidth: 1,
    paddingHorizontal: 10,
    flex: 1,
  },
  buttonText: {
    fontSize: 16,
    flex: 1,
  },
  dropdown: {
    position: 'absolute',
    top: '100%',
    left: 0,
    right: 0,
    backgroundColor: 'white',
    zIndex: 1,
    maxHeight: 200,
    borderRadius: 10,
    elevation: 2,
    marginTop: 5,
    padding: 10,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 5,
    padding: 5,
  },
  optionText: {
    fontSize: 16,
    color: '#333',
    marginLeft: 10,
  },
  colorCircle: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
});

export default ColorPickerComponent;
