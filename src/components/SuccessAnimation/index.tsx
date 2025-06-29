import React from 'react';
import { View } from 'react-native';
import Animated, { useAnimatedStyle, SharedValue } from 'react-native-reanimated';
import { styles } from './styles';
import { useConfettiAnimation, useCategoryConfig } from '../../hooks/useConfettiAnimation';

type WellnessCategory = 'low' | 'medium' | 'high';

interface SuccessAnimationProps {
  circleScale: SharedValue<number>;
  textOpacity: SharedValue<number>;
  backgroundScale: SharedValue<number>;
  successBackgroundColor: SharedValue<string>;
  category?: WellnessCategory;
}

interface ConfettiPieceProps {
  index: number;
  category: WellnessCategory;
}


const ConfettiPiece: React.FC<ConfettiPieceProps> = ({ index, category }) => {

  const { scale, translateX, translateY, rotate, opacity, color } = useConfettiAnimation({ index, category });


  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { scale: scale.value },
      { translateX: translateX.value },
      { translateY: translateY.value },
      { rotate: `${rotate.value}rad` as string },
    ],
    opacity: opacity.value,
    backgroundColor: color,
  }));

  return <Animated.View style={[styles.confettiPiece, animatedStyle]} />;
};

const SuccessAnimation: React.FC<SuccessAnimationProps> = ({
  circleScale,
  textOpacity,
  backgroundScale,
  successBackgroundColor,
  category = 'medium',
}) => {

  const { icon, confettiIndices } = useCategoryConfig(category);

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
      

      {confettiIndices.map((index) => (
        <ConfettiPiece 
          key={index}
          index={index}
          category={category}
        />
      ))}
      
      <Animated.View style={[styles.circleContainer, circleStyle]}>
        <Animated.Text style={[styles.checkmark, textStyle]}>
          {icon}
        </Animated.Text>
      </Animated.View>
    </View>
  );
};

export default SuccessAnimation;
