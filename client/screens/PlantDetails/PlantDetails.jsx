import React from 'react';
import { View, Text } from 'react-native';

export default function NestedScreen({ route }) {
  console.log(route);
  return (
    <View>
      <Text>{route.params.userPlant.common_name}</Text>
    </View>
  );
}
