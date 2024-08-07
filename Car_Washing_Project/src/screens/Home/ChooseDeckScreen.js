import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Modal,
} from 'react-native';

export default function ChooseDeckScreen({route}) {
  const {item} = route.params;
  const [selectedDeck, setSelectedDeck] = useState(null);
  const [serviceStarted, setServiceStarted] = useState(false);
  const [timestamps, setTimestamps] = useState({
    entered: null,
    started: null,
    completed: null,
    paymentReceived: null,
  });
  const [confirmationModalVisible, setConfirmationModalVisible] =
    useState(false);
  const [paymentModalVisible, setPaymentModalVisible] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);

  const deckNumbers = ['01', '02', '03', '04', '05', '06'];

  const handleStartService = () => {
    if (!serviceStarted) {
      const now = new Date().toLocaleString();
      setTimestamps({...timestamps, entered: now, started: now});
      setServiceStarted(true);
    } else {
      setConfirmationModalVisible(true);
    }
  };

  const handleConfirmServiceCompletion = () => {
    setConfirmationModalVisible(false);
    setPaymentModalVisible(true);
  };

  const handlePaymentMethodSelection = method => {
    setSelectedPaymentMethod(method);
  };

  const handlePaymentProceed = () => {
    const now = new Date().toLocaleString();
    setTimestamps({...timestamps, completed: now, paymentReceived: now});
    setPaymentModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>{item.plate}</Text>

        <Text style={styles.serviceDetailsText}>Service Details:</Text>

        <View style={styles.infoContainer}>
          <Text style={styles.label}>Service Status:</Text>
          <Text style={styles.value}>{item.status}</Text>
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.label}>Car Body Type:</Text>
          <Text style={styles.value}>{item.carBodyType}</Text>
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.label}>Car Plate Number:</Text>
          <Text style={styles.value}>{item.plate}</Text>
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.label}>Car Details:</Text>
          <Text style={styles.value}>{item.carDetails}</Text>
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.label}>Customer Name:</Text>
          <Text style={styles.value}>{item.username}</Text>
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.label}>Email:</Text>
          <Text style={styles.value}>{item.email}</Text>
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.label}>Contact Number:</Text>
          <Text style={styles.value}>{item.contact}</Text>
        </View>

        {/* Type of Service */}
        <View>
          <Text style={[styles.serviceDetailsText, {marginTop: 20}]}>
            Type of Service:
          </Text>

          <View style={styles.serviceTypesContainer}>
            <Text style={styles.serviceType}>{item.serviceType}</Text>
            <Text style={styles.serviceType}>{item.serviceType1}</Text>
            <Text style={styles.serviceType}>{item.serviceType2}</Text>
          </View>
        </View>

        {/* Total Cost */}
        <View style={styles.costContainer}>
          <Text style={[styles.serviceDetailsText, {marginTop: 20}]}>
            Total Cost:
          </Text>
          <Text style={styles.totalCost}>${item.totalCost}</Text>
        </View>

        {/* Deck Number */}
        {!serviceStarted && (
          <View>
            <Text style={styles.serviceDetailsText}>Choose a Deck Number:</Text>
            <View style={styles.deckContainer}>
              {deckNumbers.map(deck => (
                <TouchableOpacity
                  key={deck}
                  style={[
                    styles.deckButton,
                    selectedDeck === deck && styles.selectedDeckButton,
                  ]}
                  onPress={() => setSelectedDeck(deck)}>
                  <Text
                    style={[
                      styles.deckButtonText,
                      selectedDeck === deck && styles.selectedDeckButtonText,
                    ]}>
                    {deck}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        )}

        {/* Render Different Deck Details */}
        {serviceStarted && (
          <View>
            <View style={styles.infoContainer}>
              <Text style={styles.label}>Car Entered At:</Text>
              <Text style={styles.value}>{timestamps.entered}</Text>
            </View>
            <View style={styles.infoContainer}>
              <Text style={styles.label}>Service Started At:</Text>
              <Text style={styles.value}>{timestamps.started}</Text>
            </View>
            {selectedDeck === '01' && (
              <View style={styles.infoContainer}>
                <Text style={styles.label}>Deck 01 Details:</Text>
                <Text style={styles.value}>Specific details for Deck 01</Text>
              </View>
            )}
            {selectedDeck === '02' && (
              <View style={styles.infoContainer}>
                <Text style={styles.label}>Deck 02 Details:</Text>
                <Text style={styles.value}>Specific details for Deck 02</Text>
              </View>
            )}
            {selectedDeck === '03' && (
              <View style={styles.infoContainer}>
                <Text style={styles.label}>Deck 03 Details:</Text>
                <Text style={styles.value}>Specific details for Deck 03</Text>
              </View>
            )}
            {selectedDeck === '04' && (
              <View style={styles.infoContainer}>
                <Text style={styles.label}>Deck 04 Details:</Text>
                <Text style={styles.value}>Specific details for Deck 04</Text>
              </View>
            )}
            {selectedDeck === '05' && (
              <View style={styles.infoContainer}>
                <Text style={styles.label}>Deck 05 Details:</Text>
                <Text style={styles.value}>Specific details for Deck 05</Text>
              </View>
            )}
            {selectedDeck === '06' && (
              <View style={styles.infoContainer}>
                <Text style={styles.label}>Deck 06 Details:</Text>
                <Text style={styles.value}>Specific details for Deck 06</Text>
              </View>
            )}
            <View style={styles.infoContainer}>
              <Text style={styles.label}>Service Completed At:</Text>
              <Text style={styles.value}>
                {timestamps.completed || 'In Progress'}
              </Text>
            </View>
            <View style={styles.infoContainer}>
              <Text style={styles.label}>Payment Received At:</Text>
              <Text style={styles.value}>
                {timestamps.paymentReceived || 'Pending'}
              </Text>
            </View>
          </View>
        )}

        {/* Button */}
        <TouchableOpacity style={styles.button} onPress={handleStartService}>
          <Text style={styles.buttonText}>
            {serviceStarted ? 'Service Completed' : 'Start Service'}
          </Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Confirmation Modal */}
      <Modal
        visible={confirmationModalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setConfirmationModalVisible(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Confirm Service Completion</Text>
            <Text style={styles.modalMessage}>
              Are you sure you want to complete the service?
            </Text>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={handleConfirmServiceCompletion}>
              <Text style={styles.modalButtonText}>Proceed</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.modalButton, {backgroundColor: 'red'}]}
              onPress={() => setConfirmationModalVisible(false)}>
              <Text style={styles.modalButtonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Payment Method Modal */}
      <Modal
        visible={paymentModalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setPaymentModalVisible(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Select Payment Method</Text>
            <TouchableOpacity
              style={[
                styles.modalButton,
                selectedPaymentMethod === 'Card' &&
                  styles.selectedPaymentButton,
              ]}
              onPress={() => handlePaymentMethodSelection('Card')}>
              <Text style={styles.modalButtonText}>Card Online Payment</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.modalButton,
                selectedPaymentMethod === 'Cash' &&
                  styles.selectedPaymentButton,
              ]}
              onPress={() => handlePaymentMethodSelection('Cash')}>
              <Text style={styles.modalButtonText}>Cash</Text>
            </TouchableOpacity>
            {selectedPaymentMethod && (
              <Text style={styles.selectedPaymentFeedback}>
                Selected Payment Method: {selectedPaymentMethod}
              </Text>
            )}
            <TouchableOpacity
              style={styles.modalButton}
              onPress={handlePaymentProceed}>
              <Text style={styles.modalButtonText}>Proceed</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 20,
    textAlign: 'center',
    color: '#5286F3',
    textDecorationLine: 'underline',
  },
  serviceDetailsText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  label: {
    fontSize: 14,
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
  serviceTypesContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  serviceType: {
    fontSize: 14,
    padding: 10,
    backgroundColor: 'rgba(82,134,243,0.1)',
    marginRight: 5,
  },
  costContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  totalCost: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
  deckContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
  },
  deckButton: {
    backgroundColor: '#ddd',
    padding: 10,
    borderRadius: 5,
    margin: 5,
    width: 50,
    alignItems: 'center',
  },
  selectedDeckButton: {
    backgroundColor: '#5286F3',
  },
  deckButtonText: {
    color: '#333',
    fontWeight: 'bold',
  },
  selectedDeckButtonText: {
    color: '#fff',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  modalContent: {
    width: 350,
    padding: 25,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  modalMessage: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginBottom: 20,
  },
  modalButton: {
    backgroundColor: '#5286F3',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
    width: '100%',
  },
  modalButtonText: {
    color: 'white',
    fontSize: 16,
  },
  selectedPaymentButton: {
    backgroundColor: '#28A745',
  },
  selectedPaymentFeedback: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#28A745',
  },
  modalButtonCancel: {
    backgroundColor: '#DC3545',
  },
  modalButtonCancelText: {
    color: 'white',
    fontSize: 16,
  },
});
