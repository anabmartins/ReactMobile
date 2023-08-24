import React from 'react';
import { View, StyleSheet, Button} from 'react-native';

import { useNavigation } from '@react-navigation/native';


export function ProductDetails() {
    const navigation = useNavigation();
  
    function openScreen(){
        navigation.navigate('productProfile')
    }
  
    return (
    <View style={styles.container}>
        <Button
            title="Ir para Product Profile"
            onPress={openScreen}
            color="#fff"
        />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "orange",
        justifyContent: "center"
    }
})