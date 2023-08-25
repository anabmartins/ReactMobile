import React from 'react';
import { View, TouchableOpacity, Text} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import styles from './styles'

export function product() {
    const navigation = useNavigation();
  
    function back(){
        navigation.navigate('Productdetails')
    }
  
    return (
        <View style={styles.container}>
          <View style={styles.card}>
            <Text>Teclados</Text>
          </View>
        <TouchableOpacity style={styles.button} onPress={(back)}>
        <Text style={styles.buttonText}>Voltar</Text>
        </TouchableOpacity>
       
    </View>
  );
}