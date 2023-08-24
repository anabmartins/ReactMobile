import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import styles from './styles'

export function Home() {
    const navigation = useNavigation();
  
    function openScreen(){
        navigation.navigate('product')
    }
  
    return (
        <View style={styles.container}>
        <Text style={styles.title}>Bem-Vindo</Text>
        <Text style={styles.subtitle}>ao Controle de estoque</Text>
        <TouchableOpacity style={styles.button} onPress={(openScreen)}>
        <Text style={styles.buttonText}>Cadastrar Produto</Text>
        </TouchableOpacity>
       
    </View>
  );
}
