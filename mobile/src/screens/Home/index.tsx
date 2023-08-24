import * as React from 'react';
import { View, Text} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import styles from './styles'

export function Home() {
    // const navigation = useNavigation();
  
    // function profile(){
    //     navigation.navigate('profile')
    // }
  
    return (
    <View style={styles.container}>
        <Text>Bem-Vindo</Text>
    </View>
  );
}

