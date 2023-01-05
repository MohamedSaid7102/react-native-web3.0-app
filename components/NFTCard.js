import { View, Text } from 'react-native';
import React from 'react';

const NFTCard = ({ data }) => {
  return (
    <View>
      <Text>{data.name}</Text>
    </View>
  );
};

export default NFTCard;
