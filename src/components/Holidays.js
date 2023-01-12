import {View} from 'react-native';
import React from 'react';
import {List} from 'react-native-paper';
import tw from 'twrnc';
import {HeaderBar} from 'common/components';
import {COLORS} from 'common/constants';

const Holidays = () => {
  return (
    <View>
      <HeaderBar title="Holidays" />

      {[...Array(3)].map((_, i) => (
        <List.Item
          key={i}
          style={tw`border-b-2 border-[${COLORS.lightGray2}]`}
          title="PriYanKa yadav Purchasing Office"
          description="Purchase & Inventory Working Since: 20-6-2022"
          right={props => (
            <List.Icon
              {...props}
              icon="comment-edit-outline"
              color={COLORS.primary}
            />
          )}
        />
      ))}
    </View>
  );
};

export default Holidays;
