import React from 'react';
import { View } from 'react-native';
import Animated, { useAnimatedStyle, SharedValue } from 'react-native-reanimated';
import { styles } from './styles';

interface SuccessAnimationProps {
  circleScale: SharedValue<number>;
  textOpacity: SharedValue<number>;
  backgroundScale: SharedValue<number>;
  successBackgroundColor: SharedValue<string>;
}

const SuccessAnimation: React.FC<SuccessAnimationProps> = ({
  circleScale,
  textOpacity,
  backgroundScale,
  successBackgroundColor,
}) => {

  const circleStyle = useAnimatedStyle(() => ({
    transform: [{ scale: circleScale.value }],
  }));

  const textStyle = useAnimatedStyle(() => ({
    opacity: textOpacity.value,
  }));

  const backgroundStyle = useAnimatedStyle(() => ({
    backgroundColor: successBackgroundColor.value,
    transform: [{ scale: backgroundScale.value }],
    opacity: backgroundScale.value,
  }));

  return (
    <View style={styles.animationContainer}>
      <Animated.View style={[styles.animatedBackground, backgroundStyle]} />
      <Animated.View style={[styles.circleContainer, circleStyle]}>
        <Animated.Text style={[styles.checkmark, textStyle]}>✓</Animated.Text>
      </Animated.View>
    </View>
  );
};

export default SuccessAnimation;
