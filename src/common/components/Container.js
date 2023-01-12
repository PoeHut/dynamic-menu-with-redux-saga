import React from 'react';
import {StatusBar, View} from 'react-native';
import tw from 'twrnc';
import {COLORS} from 'common/constants';

const Container = ({children, color}) => {
  return (
    <View
      style={tw`flex-1 ios:pt-8 ${
        color ? `bg-[${color}]` : `bg-[${COLORS.white}]`
      }`}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={color ? color : COLORS.white}
      />
      {children}
    </View>
  );
};

export default Container;
