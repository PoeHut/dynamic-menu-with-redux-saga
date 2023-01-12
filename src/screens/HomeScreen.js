import React from 'react';
import {ScrollView} from 'react-native';
import {Container} from 'common/components';
import {MyDashboard, Birthday, Holidays} from 'components';

const HomeScreen = () => {
  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        <MyDashboard />
        <Birthday />
        <Holidays />
      </ScrollView>
    </Container>
  );
};

export default HomeScreen;
