import React from 'react';
import { Image } from 'react-native';

export default function Icon({ plantName, plantStyle }) {
  switch (plantName) {
    case 'Aloe Vera':
      return (
        <Image
          source={require('../../assets/images/AloeVera.jpeg')}
          style={plantStyle}
        />
      );
    case 'Cactus':
      return (
        <Image
          source={require('../../assets/images/Cactus.jpeg')}
          style={plantStyle}
        />
      );
    case 'Chinese Money Plant':
      return (
        <Image
          source={require('../../assets/images/ChineseMoneyPlant.jpeg')}
          style={plantStyle}
        />
      );
    case 'Dragon Tree':
      return (
        <Image
          source={require('../../assets/images/DragonTree.jpeg')}
          style={plantStyle}
        />
      );
    case 'Orchid':
      return (
        <Image
          source={require('../../assets/images/Orchid.jpeg')}
          style={plantStyle}
        />
      );
    case 'Radiator Plant':
      return (
        <Image
          source={require('../../assets/images/RadiatorPlant.jpeg')}
          style={plantStyle}
        />
      );
    case 'Snake Plant':
      return (
        <Image
          source={require('../../assets/images/SnakePlant.jpeg')}
          style={plantStyle}
        />
      );
    case 'Spider Plant':
      return (
        <Image
          source={require('../../assets/images/SpiderPlant.jpeg')}
          style={plantStyle}
        />
      );
    case 'String Of Pearls':
      return (
        <Image
          source={require('../../assets/images/StringOfPearls.jpeg')}
          style={plantStyle}
        />
      );
    case 'Swiss Cheese Plant':
      return (
        <Image
          source={require('../../assets/images/SwissCheesePlant.jpeg')}
          style={plantStyle}
        />
      );
    case 'Yucca':
      return (
        <Image
          source={require('../../assets/images/AloeVera.jpeg')}
          style={plantStyle}
        />
      );
  }
}
