import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import CustomRadioButton from '../../components/CustomRadioButton';
import CustomCheckbox from '../../components/CustomCheckbox';
import {carData} from '../../assets/data/CarData';

export default function AddVehicleScreen({navigation}) {
  const [selectedService, setSelectedService] = useState(null);
  const [selectedAdditionalServices, setSelectedAdditionalServices] = useState(
    [],
  );

  const handleRadioButtonChange = value => {
    setSelectedService(value);
  };

  const handleCheckboxChange = value => {
    if (selectedAdditionalServices.includes(value)) {
      setSelectedAdditionalServices(
        selectedAdditionalServices.filter(service => service !== value),
      );
    } else {
      setSelectedAdditionalServices([...selectedAdditionalServices, value]);
    }
  };

  return (
    <View style={styles.container}>
      {/* Displaying cars in FlatList */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <FlatList
            data={carData}
            renderItem={({item}) => (
              <View style={styles.itemContainer}>
                <Image
                  source={item.image}
                  style={styles.itemImage}
                  resizeMode="contain"
                />
                <Text style={styles.itemName}>{item.name}</Text>
              </View>
            )}
            keyExtractor={item => item.id.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            contentContainerStyle={styles.flatListContainer}
          />
        </View>

        {/* Service Type Selection */}
        <Text style={styles.serviceTypeTitle}>Service Type</Text>
        <View style={styles.serviceTypesContainer}>
          <CustomRadioButton
            isSelected={selectedService === 'Full Wash'}
            onPress={() => handleRadioButtonChange('Full Wash')}
            label={'Full Wash'}
          />
          <CustomRadioButton
            isSelected={selectedService === 'Body Wash'}
            onPress={() => handleRadioButtonChange('Body Wash')}
            label={'Body Wash'}
          />
        </View>

        {/* Additional Services Selection */}
        <Text style={styles.serviceTypeTitle}>Additional Services</Text>
        <View style={styles.additionalServicesContainer}>
          <CustomCheckbox
            isChecked={selectedAdditionalServices.includes(
              'Nano Ceramic Coating',
            )}
            onPress={() => handleCheckboxChange('Nano Ceramic Coating')}
            label="Nano Ceramic Coating"
          />
          <CustomCheckbox
            isChecked={selectedAdditionalServices.includes('Exterior Cleaning')}
            onPress={() => handleCheckboxChange('Exterior Cleaning')}
            label="Exterior Cleaning"
          />
          <CustomCheckbox
            isChecked={selectedAdditionalServices.includes('Interior Detail')}
            onPress={() => handleCheckboxChange('Interior Detail')}
            label="Interior Detail"
          />
          <CustomCheckbox
            isChecked={selectedAdditionalServices.includes('Body Polish')}
            onPress={() => handleCheckboxChange('Body Polish')}
            label="Body Polish"
          />
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('CarDetails')}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
        <View style={{height: 40}}></View>
      </ScrollView>
    </View>
  );
}

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  flatListContainer: {
    alignItems: 'center',
    height: 200,
  },
  itemContainer: {
    marginRight: 20,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    width: width - 60,
    height: 200,
  },
  itemImage: {
    width: 180,
    height: 150,
  },
  itemName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  serviceTypeTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
  serviceTypesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  serviceType: {
    backgroundColor: '#eee',
    padding: 10,
    borderRadius: 5,
  },
  serviceTypeText: {
    fontSize: 16,
  },
  button: {
    backgroundColor: '#5286F3',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginTop: 30,
    alignSelf: 'center',
    width: 270,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
