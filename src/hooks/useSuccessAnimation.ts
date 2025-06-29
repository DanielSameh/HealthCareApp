import { useEffect, useCallback } from 'react';
import { useSharedValue, withSpring, withTiming, withSequence, Easing as REasing } from 'react-native-reanimated';

type WellnessCategory = 'low' | 'medium' | 'high';

interface AnimationOptions {
  category?: WellnessCategory;
}

const useSuccessAnimation = (options: AnimationOptions = {}) => {
  const { category = 'medium' } = options;
  
  const circleScale = useSharedValue(0);
  const textOpacity = useSharedValue(0);
  const cardY = useSharedValue(50);
  const successBackgroundColor = useSharedValue('#4CAF50');
  const backgroundScale = useSharedValue(0);
  
  const getCategoryColors = useCallback(() => {
    switch (category) {
      case 'low':
        return { primary: '#5C6BC0', secondary: '#7986CB' };
      case 'medium':
        return { primary: '#4CAF50', secondary: '#8BC34A' };
      case 'high':
        return { primary: '#FF9800', secondary: '#FFC107' };
      default:
        return { primary: '#4CAF50', secondary: '#8BC34A' };
    }
  }, [category]);

  useEffect(() => {
    const colors = getCategoryColors();
    
    const animationDuration = category === 'high' ? 600 : 800;
    
    backgroundScale.value = withTiming(1, { 
      duration: animationDuration, 
      easing: REasing.inOut(REasing.cubic) 
    });
    
    successBackgroundColor.value = withSequence(
      withTiming(colors.secondary, { duration: 500 }),
      withTiming(colors.primary, { duration: 500 })
    );
    
    if (category === 'high') {
      circleScale.value = withSequence(
        withTiming(1.3, { duration: 300, easing: REasing.inOut(REasing.cubic) }),
        withTiming(0.9, { duration: 150, easing: REasing.inOut(REasing.cubic) }),
        withTiming(1.1, { duration: 150, easing: REasing.inOut(REasing.cubic) }),
        withTiming(1, { duration: 100, easing: REasing.inOut(REasing.cubic) })
      );
    } else {
      circleScale.value = withSequence(
        withTiming(1.2, { duration: 300, easing: REasing.inOut(REasing.cubic) }),
        withTiming(1, { duration: 200, easing: REasing.inOut(REasing.cubic) })
      );
    }
    
    textOpacity.value = withTiming(1, { 
      duration: 500, 
      easing: REasing.inOut(REasing.cubic) 
    });
    
    cardY.value = withSpring(0, { 
      damping: category === 'high' ? 12 : 15,
      stiffness: category === 'high' ? 120 : 100
    });
    
  }, [category, getCategoryColors, backgroundScale, circleScale, textOpacity, cardY, successBackgroundColor]);

  return {
    circleScale,
    textOpacity,
    cardY,
    successBackgroundColor,
    backgroundScale,
    category
  };
};

export default useSuccessAnimation;
