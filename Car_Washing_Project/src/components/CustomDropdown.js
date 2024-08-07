import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const CustomDropdown = ({options, selectedValue, onValueChange}) => {
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
        <Text style={styles.buttonText}>
          {selectedValue || 'Select an option'}
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
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() => handlePress(item.value)}
                style={styles.option}>
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
    borderColor: '#e0e0e0',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 10,
    // flex: 1,
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
    maxHeight: 300,
    borderRadius: 10,
    elevation: 2,
    marginTop: 5,
  },
  option: {
    padding: 12,
  },
  optionText: {
    fontSize: 16,
    color: '#333',
  },
});

export default CustomDropdown;
