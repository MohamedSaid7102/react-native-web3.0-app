import { View, Text, Button } from 'react-native';
import React from 'react';

const HomeHeader = () => {
  return (
    <View>
      <Button
        title="Press me"
        onPress={() => {
          alert('you pressed me');
        }}
      />
      <Text>HomeHeader</Text>
    </View>
  );
};

export default HomeHeader;
