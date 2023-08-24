import React from 'react';
import { Image, View } from 'react-native';

import styles from './styles'

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Image
        source={require('../../../assets/logo-1.png')}
        style={styles.headerLogo}
      />
       <Image
        source={require('../../../assets/sesi-senai.svg')}
        style={styles.headerSenai}
      />
    </View>
  );
};

export default Header;
