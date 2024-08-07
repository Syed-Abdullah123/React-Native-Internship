import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import CustomDropdown from '../../components/CustomDropdown';
import ColorPickerComponent from '../../components/ColorPickerComponent';
import CustomDatePicker from '../../components/CustomDatePicker';

export default function CarDetailsScreen({navigation}) {
  const [name, setName] = useState('');
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedCountryCode, setSelectedCountryCode] = useState('+92');
  const [selectedDate, setSelectedDate] = useState(null);
  const [carNumberPlate, setCarNumberPlate] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [chasisNumber, setChasisNumber] = useState('');
  const [engineNumber, setEngineNumber] = useState('');
  const [insuranceCompany, setInsuranceCompany] = useState('');
  const [insuranceExpiryDate, setInsuranceExpiryDate] = useState(null);
  const [vehicleLicenseExpiryDate, setVehicleLicenseExpiryDate] =
    useState(null);

  const options = [
    {label: 'Option 1', value: 'option1'},
    {label: 'Option 2', value: 'option2'},
    {label: 'Option 3', value: 'option3'},
  ];

  const colorOptions = [
    {label: 'Black', value: '#000000'},
    {label: 'White', value: '#FFFFFF'},
    {label: 'Gray', value: '#808080'},
    {label: 'Silver', value: '#C0C0C0'},
    {label: 'Blue', value: '#0000FF'},
    {label: 'Red', value: '#FF0000'},
  ];

  const countryCodeOptions = [
    {label: 'Pakistan (+92)', value: '+92'},
    {label: 'India (+91)', value: '+91'},
    {label: 'USA (+1)', value: '+1'},
    {label: 'Australia (+61)', value: '+61'},
    {label: 'UK (+44)', value: '+44'},
  ];

  const handleAddVehicle = () => {
    const newVehicle = {
      plate: `${carNumberPlate} / ${name}`,
      contact: `${selectedCountryCode}-${phoneNumber} / ${email}`,
      status: 'New Entry',
    };

    navigation.navigate('Home', {newVehicle});
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Options Container */}
        <View style={styles.optionsContainer}>
          <Text style={styles.label}>Username:</Text>
          <TextInput
            placeholder="Enter username"
            style={styles.input}
            value={name}
            onChangeText={setName}
          />
        </View>

        {/* Color Selection */}
        <View style={styles.optionsContainer}>
          <Text style={styles.label}>Select a Color:</Text>
          <ColorPickerComponent
            options={colorOptions}
            selectedValue={selectedColor}
            onValueChange={setSelectedColor}
          />
        </View>

        {/* Number Plate Container */}
        <View style={styles.optionsContainer}>
          <Text style={styles.label}>Car Number Plate:</Text>
          <View style={styles.input}>
            <TextInput
              placeholder="Enter car number plate"
              value={carNumberPlate}
              onChangeText={setCarNumberPlate}
            />
          </View>
        </View>

        {/* Phone Number Container */}
        <View style={styles.optionsContainer}>
          <Text style={styles.label}>Country Code:</Text>
          <View style={styles.contryCodeContainer}>
            <View style={{width: 100}}>
              <CustomDropdown
                options={countryCodeOptions}
                selectedValue={selectedCountryCode}
                onValueChange={setSelectedCountryCode}
              />
            </View>
            <TextInput
              style={styles.input1}
              placeholder="Enter Phone number"
              value={phoneNumber}
              onChangeText={setPhoneNumber}
            />
          </View>
        </View>

        {/* Email Container */}
        <View style={styles.optionsContainer}>
          <Text style={styles.label}>Email: </Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Your Email"
            value={email}
            onChangeText={setEmail}
          />
        </View>

        {/* Additional Details Container */}
        <View style={styles.optionsContainer}>
          <Text style={styles.additionalTitle}>Additional Details:</Text>
        </View>

        {/* Chasis Number */}
        <View style={styles.optionsContainer}>
          <Text style={styles.label}>Chasis Number:</Text>
          <View style={styles.input}>
            <TextInput
              placeholder="Enter chasis number"
              value={chasisNumber}
              onChangeText={setChasisNumber}
            />
          </View>
        </View>

        {/* Engine Number */}
        <View style={styles.optionsContainer}>
          <Text style={styles.label}>Engine Number:</Text>
          <View style={styles.input}>
            <TextInput
              placeholder="Enter engine number"
              value={engineNumber}
              onChangeText={setEngineNumber}
            />
          </View>
        </View>

        {/* Insurance Company */}
        <View style={styles.optionsContainer}>
          <Text style={styles.label}>Insurance Company:</Text>
          <View style={styles.input}>
            <TextInput
              placeholder="Enter insurance company"
              value={insuranceCompany}
              onChangeText={setInsuranceCompany}
            />
          </View>
        </View>

        {/* Insurance Expriry Date */}
        <View style={styles.optionsContainer}>
          <Text style={styles.label}>Insurance Expiry Date:</Text>
          <CustomDatePicker
            selectedDate={selectedDate}
            onDateChange={setSelectedDate}
          />
        </View>

        {/* Vehicle License Expiry Date */}
        <View style={styles.optionsContainer}>
          <Text style={styles.label}>Vehicle License Expiry Date:</Text>
          <CustomDatePicker
            selectedDate={selectedDate}
            onDateChange={setSelectedDate}
          />
        </View>

        {/* Button */}
        <TouchableOpacity style={styles.button} onPress={handleAddVehicle}>
          <Text style={styles.buttonText}>Add Vehicle</Text>
        </TouchableOpacity>

        <View style={{height: 30}}></View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    paddingTop: 20,
  },
  optionsContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
  },
  input: {
    borderColor: '#e0e0e0',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  input1: {
    borderColor: '#e0e0e0',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 10,
    flex: 1,
  },
  contryCodeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  additionalTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 0,
    marginTop: 10,
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
