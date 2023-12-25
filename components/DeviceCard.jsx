import { View, Text, StyleSheet, Image, Button } from 'react-native';
import React from 'react';

export default function DeviceCard({ navigation, ...props }) {
    const handlePress = () => {
        navigation.navigate('Device', { id: props.id });
    };
    const src = props.img !== "NULL" ? `http://192.168.43.172:9000/test/user_img/${props.img}` : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoE0zLabFrxYyaVJ-BZsuUdFNCo2iOTnGKyVFfGr_AYQ&s";
    // const src = `http://192.168.43.172:9000/test/user_img/${props.img}`
    return (
        <View style={styles.card}>

            {/* <Image
                style={styles.image}
                source={{ uri: 'https://www.solaredge.com/us/sites/nam/files/Placeholders/Placeholder-4-3.jpg' }}
                resizeMode='contain'
            /> */}
            <Image source={{uri: src}} style={ styles.image } />
            <View style={styles.container}>
                {/* <Text style={styles.brandTitle}>{src}</Text> */}
                <Text style={styles.brandTitle}>{props.title}</Text>
                <View style={styles.row}>
                    <Text style={styles.text}>{props.cost} р.</Text>
                </View>
            </View>
            <Button title='View details' onPress={handlePress} />
        </View>
    );
}
const styles = StyleSheet.create({
    card: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'column',
        width: 320,
        backgroundColor: '#303030',
        borderRadius: 12,
        padding: 24,
        gap: 12,
        margin: 8,
    },
    image: { height: 320, alignSelf: 'stretch' },
    container: { display: 'flex', width: '100%', margin: 8 },
    row: { display: 'flex', flexDirection: 'row', justifyContent: 'space-between' },
    brandTitle: { color: '#4287f5', fontSize: 16 },
    text: { color: '#f0f0f0', fontSize: 16 },
});
