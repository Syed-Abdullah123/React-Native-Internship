import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.profileHeader}>
        <Image
          source={{uri: 'https://example.com/profile-picture.png'}} // Replace with actual image URI
          style={styles.profileImage}
        />
        <View style={styles.headerTextContainer}>
          <Text style={styles.name}>Abdullah</Text>
          <Text style={styles.position}>Car Cleaning Specialist</Text>
        </View>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.label}>Email:</Text>
        <Text style={styles.value}>abdullah@example.com</Text>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.label}>Phone:</Text>
        <Text style={styles.value}>+92 123-456-7890</Text>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.label}>Employee ID:</Text>
        <Text style={styles.value}>EMP123456</Text>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.label}>Joined:</Text>
        <Text style={styles.value}>January 15, 2022</Text>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.label}>Shift Timing:</Text>
        <Text style={styles.value}>9:00 AM - 5:00 PM</Text>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.label}>Location:</Text>
        <Text style={styles.value}>123 Car Cleaning Kamra, Attock</Text>
      </View>

      {/* Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Sign out</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 20,
    backgroundColor: '#eee',
  },
  headerTextContainer: {
    flex: 1,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  position: {
    fontSize: 16,
    color: '#777',
    marginTop: 4,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  label: {
    fontSize: 16,
    color: '#333',
    fontWeight: 'bold',
  },
  value: {
    fontSize: 14,
    color: '#666',
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
