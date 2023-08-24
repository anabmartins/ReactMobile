import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import styles from './styles'

export function Home() {
    const navigation = useNavigation();
  
    function openScreen(){
        navigation.navigate('Profile')
    }
  
    return (
        <View style={styles.container}>
       
        <TouchableOpacity style={styles.button} onPress={(openScreen)}>
        <Text style={styles.buttonText}>Proximo</Text>
        </TouchableOpacity>
       
    </View>
  );
}
