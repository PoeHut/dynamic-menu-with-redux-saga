import {View, Text} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import tw from 'twrnc';
import {HeaderBar} from 'common/components';
import {COLORS} from 'common/constants';

const MyDashboard = () => {
  return (
    <View>
      <HeaderBar title="My Dashboard" status="Attendance Status" />

      <View style={tw`flex flex-row justify-between py-5 px-4`}>
        <View>
          <View
            style={tw`shadow-sm self-center px-7 py-10 rounded-full bg-red-500`}>
            <Text style={tw`text-[${COLORS.white}]  text-2xl font-bold`}>
              TEST
            </Text>
          </View>
          <View style={tw`flex flex-row mt-4 justify-around`}>
            <Text>
              <AntDesign name="star" color={COLORS.primary} size={24} /> 56
            </Text>

            <Text>
              <AntDesign name="like1" color={COLORS.green} size={24} /> 560
            </Text>
          </View>
        </View>

        <View style={tw`mt-2`}>
          <Text style={tw`text-[${COLORS.lightGray5}] font-semibold leading-6`}>
            Yug
          </Text>
          <Text style={tw`text-[${COLORS.lightGray5}] font-semibold leading-6`}>
            General Manager - PMO
          </Text>
          <Text style={tw`text-[${COLORS.lightGray5}] font-semibold leading-6`}>
            Amara RTT
          </Text>
          <Text style={tw`text-[${COLORS.lightGray5}] font-semibold leading-6`}>
            Working Since: 4 May 2019
          </Text>
          <Text style={tw`text-[${COLORS.lightGray5}] font-semibold leading-6`}>
            Reporting to: Admin Test
          </Text>
        </View>
      </View>
    </View>
  );
};

export default MyDashboard;
