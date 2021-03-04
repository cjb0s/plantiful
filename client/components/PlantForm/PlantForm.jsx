import React, { useState } from 'react';
import { View, Text } from 'react-native';

export default function PlantForm({ data }) {
  const [query, setQuery] = useState('');
  const [filtered, setFiltered] = useState(data.slice());

  return (
    <View>
      <Text>I'm a form!</Text>
    </View>
  );
}
