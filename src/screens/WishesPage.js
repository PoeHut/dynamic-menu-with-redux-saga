import {View, Text} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import {Container} from 'common/components';

const WishesPage = () => {
  return (
    <Container>
      <View style={tw`flex-1 items-center justify-center`}>
        <Text>WishesPage Screen</Text>
      </View>
    </Container>
  );
};

export default WishesPage;
