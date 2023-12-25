import { ScrollView, StyleSheet, View, TextInput, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { axiosInstance } from '../api';
import { setDevices } from '../store/deviceSlice';
import DeviceCard from '../components/DeviceCard';

export default function ShopScreen({ navigation }) {
  const dispatch = useDispatch();
  const { devices } = useSelector((store) => store.device);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    getAllDevices();
  }, []);

  const getAllDevices = async () => {
    const response = await axiosInstance.get('/orders/');
    dispatch(setDevices(response?.data));
  };

  const searchDevices = async () => {
    if (searchQuery) {
      const response = await axiosInstance.get(`/orders/search/?title=${encodeURIComponent(searchQuery)}`);
      dispatch(setDevices(response?.data));
    } else {
      getAllDevices();
    }
  };

  return (  
    <ScrollView>
      <View style={styles.page}>
        <View style={styles.searchContainer}>
        <TextInput
            style={[styles.searchInput, { backgroundColor: 'white' }]}
            placeholder="Search"
            value={searchQuery}
            onChangeText={(text) => setSearchQuery(text)}
            />
            <Button title="Search" onPress={searchDevices} />
        </View>
        {!!devices && devices.map((device) => <DeviceCard key={device.id} {...device} navigation={navigation} />)}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  page: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2a2a2a',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  searchInput: {
    marginRight: 10,
    padding: 5,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    width: '70%',
  },
});
