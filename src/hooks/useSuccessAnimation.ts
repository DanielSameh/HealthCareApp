import { useEffect } from 'react';
import { useSharedValue, withSpring, withTiming, withSequence, Easing as REasing } from 'react-native-reanimated';

const useSuccessAnimation = () => {
  const circleScale = useSharedValue(0);
  const textOpacity = useSharedValue(0);
  const cardY = useSharedValue(50);
  const successBackgroundColor = useSharedValue('#4CAF50');
  const backgroundScale = useSharedValue(0);

  useEffect(() => {
    backgroundScale.value = withTiming(1, { 
      duration: 800, 
      easing: REasing.inOut(REasing.cubic) 
    });
    
    successBackgroundColor.value = withSequence(
      withTiming('#8BC34A', { duration: 500 }),
      withTiming('#4CAF50', { duration: 500 })
    );
    
    circleScale.value = withSequence(
      withTiming(1.2, { duration: 300, easing: REasing.inOut(REasing.cubic) }),
      withTiming(1, { duration: 200, easing: REasing.inOut(REasing.cubic) })
    );
    
    textOpacity.value = withTiming(1, { 
      duration: 500, 
      easing: REasing.inOut(REasing.cubic) 
    });
    
    cardY.value = withSpring(0);
  }, [backgroundScale, circleScale, textOpacity, cardY, successBackgroundColor]);

  return {
    circleScale,
    textOpacity,
    cardY,
    successBackgroundColor,
    backgroundScale
  };
};

export default useSuccessAnimation;
