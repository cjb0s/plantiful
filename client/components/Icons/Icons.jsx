import React from 'react';
import { Image } from 'react-native';
import styles from './Icons.style';

export default function Icon({ plantName }) {
  switch (plantName) {
    case 'Aloe Vera':
      return (
        <Image
          source={require('../../assets/images/AloeVera.jpeg')}
          style={styles.image}
        />
      );
    case 'Cactus':
      return (
        <Image
          source={require('../../assets/images/Cactus.jpeg')}
          style={styles.image}
        />
      );
    case 'Chinese Money Plant':
      return (
        <Image
          source={require('../../assets/images/ChineseMoneyPlant.jpeg')}
          style={styles.image}
        />
      );
    case 'Dragon Tree':
      return (
        <Image
          source={require('../../assets/images/DragonTree.jpeg')}
          style={styles.image}
        />
      );
    case 'Orchid':
      return (
        <Image
          source={require('../../assets/images/Orchid.jpeg')}
          style={styles.image}
        />
      );
    case 'Radiator Plant':
      return (
        <Image
          source={require('../../assets/images/RadiatorPlant.jpeg')}
          style={styles.image}
        />
      );
    case 'Spider Plant':
      return (
        <Image
          source={require('../../assets/images/SpiderPlant.jpeg')}
          style={styles.image}
        />
      );
    case 'String Of Pearls':
      return (
        <Image
          source={require('../../assets/images/StringOfPearls.jpeg')}
          style={styles.image}
        />
      );
    case 'Swiss Cheese Plant':
      return (
        <Image
          source={require('../../assets/images/SwissCheesePlant.jpeg')}
          style={styles.image}
        />
      );
    case 'Yucca':
      return (
        <Image
          source={require('../../assets/images/AloeVera.jpeg')}
          style={styles.image}
        />
      );
  }
}
