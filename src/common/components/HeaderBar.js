import {View, Text} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import {COLORS} from 'common/constants';

const HeaderBar = ({title, status}) => {
  return (
    <View style={tw`flex flex-row bg-[${COLORS.lightGray2}] p-4`}>
      <Text style={tw`flex-1 font-semibold text-lg text-[${COLORS.primary}]`}>
        {title}
      </Text>
      {status && (
        <Text
          style={tw`flex-1 font-semibold text-lg text-[${COLORS.lightGray5}]`}>
          {status}
        </Text>
      )}
    </View>
  );
};

export default HeaderBar;
