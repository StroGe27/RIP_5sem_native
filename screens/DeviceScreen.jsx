import { View, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { resetDevice, setDevice } from '../store/deviceSlice';
import { axiosInstance } from '../api';

export default function DeviceScreen({ route }) {
    const { id } = route.params;
    const dispatch = useDispatch();
    const { device } = useSelector((store) => store.device);
    useEffect(() => {
        async function getOneDevice() {
            await axiosInstance.get(`/orders/${id}/`).then((response) => dispatch(setDevice(response?.data)));
        }
        getOneDevice();
        return () => {
            dispatch(resetDevice());
        };
    }, [dispatch]);
    return (
        <View>
            <Text>Название: {device.title}</Text>
            <Text>Марка процессора: {device.processor}</Text>
            <Text>Цена: {device.cost} р/мес</Text>
            <Text>Герцовка: {device.ghz} Ghz</Text>

            {/* <Text>Цена: {device.processor} р/мес</Text> */}

        </View>
    );
}