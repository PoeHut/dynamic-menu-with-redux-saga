import React from 'react';
import LottieView from 'lottie-react-native';

const Spinner = () => (
  <>
    <LottieView
      source={require('./SpinnerAnimation/LottieLego.json')}
      autoPlay
      loop
    />
  </>
);
export default Spinner;
