import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {data} from '../../assets/data/HomeTableData';

const dataSections = [
  {
    id: 1,
    text: 'All',
  },
  {
    id: 2,
    text: 'New Entry',
  },
  {
    id: 3,
    text: 'Pending',
  },
  {
    id: 4,
    text: 'On Deck',
  },
];

export default function Home({route, navigation}) {
  const [selectedSection, setSelectedSection] = useState('All');
  const [filteredData, setFilteredData] = useState(data);

  const filterData = section => {
    setSelectedSection(section);
    if (section === 'All') {
      setFilteredData(data);
    } else {
      const filtered = data.filter(item => item.status === section);
      setFilteredData(filtered);
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={dataSections}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => filterData(item.text)}>
            <View
              style={[
                styles.items,
                selectedSection === item.text && styles.selectedItem,
              ]}>
              <Text style={styles.sectionText}>{item.text}</Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
      <ScrollView>
        <View style={styles.tableContainer}>
          {/* Header */}
          <View style={styles.row}>
            <Text style={[styles.cell, styles.header]}>
              Car No.plate/Customer Name
            </Text>
            <Text style={[styles.cell, styles.header]}>
              Contact No/Email Address
            </Text>
            <Text style={[styles.cell, styles.header]}>Status</Text>
          </View>

          {/* Data Rows */}
          {filteredData.map((item, index) => (
            <TouchableOpacity
              onPress={() => navigation.navigate('ChooseDeck', {item: item})}>
              <View key={index} style={styles.row}>
                <Text style={styles.cell}>
                  {item.plate}/{item.username}
                </Text>
                <Text style={styles.cell}>
                  {item.contact}/{item.email}
                </Text>
                <View style={styles.cell}>
                  <Text style={styles.status}>{item.status}</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
  },
  items: {
    backgroundColor: '#ddd',
    marginRight: 20,
    gap: 10,
    height: 50,
    width: 100,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    borderRadius: 10,
  },
  selectedItem: {
    backgroundColor: '#5286F3',
  },
  sectionText: {
    fontSize: 14,
  },
  tableContainer: {
    marginBottom: 30,
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  cell: {
    flex: 1,
    padding: 10,
    fontSize: 13,
  },
  header: {
    backgroundColor: '#5286F3',
    paddingVertical: 15,
    fontWeight: 'bold',
  },
  status: {
    borderWidth: 0.5,
    borderColor: '#aaa',
    textAlign: 'center',
    padding: 10,
    paddingVertical: 13,
  },
});
