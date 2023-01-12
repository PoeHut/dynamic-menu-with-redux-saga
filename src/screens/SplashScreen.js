import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import tw from 'twrnc';
import {Container} from 'common/components';
import {COLORS} from 'common/constants';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('TobNav');
    }, 3000);
  }, []);

  return (
    <Container color={COLORS.primary}>
      <View style={tw`flex-1 items-center justify-center`}>
        <Text style={tw`text-2xl font-semibold text-white`}>Qutiq</Text>
      </View>
    </Container>
  );
};

export default SplashScreen;
