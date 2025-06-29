import { useMemo } from 'react';
import { useSharedValue, withDelay, withTiming, withSequence, Easing, SharedValue } from 'react-native-reanimated';

type WellnessCategory = 'low' | 'medium' | 'high';

interface ConfettiPieceConfig {
  index: number;
  category: WellnessCategory;
}

interface ConfettiAnimationValues {
  scale: SharedValue<number>;
  translateX: SharedValue<number>;
  translateY: SharedValue<number>;
  rotate: SharedValue<number>;
  opacity: SharedValue<number>;
  color: string;
}

export const useConfettiAnimation = ({ index, category }: ConfettiPieceConfig): ConfettiAnimationValues => {
  const scale = useSharedValue(0);
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const rotate = useSharedValue(0);
  const opacity = useSharedValue(0);


  const confettiColors = useMemo(() => {
    switch (category) {
      case 'low':
        return ['#5C6BC0', '#7986CB', '#9FA8DA', '#C5CAE9', '#8C9EFF'];
      case 'medium':
        return ['#4CAF50', '#66BB6A', '#81C784', '#A5D6A7', '#C8E6C9'];
      case 'high':
        return ['#FF9800', '#FFA726', '#FFB74D', '#FFCC80', '#FFE0B2', '#FFC107'];
      default:
        return ['#4CAF50', '#8BC34A', '#CDDC39', '#FFEB3B', '#FFC107'];
    }
  }, [category]);

  const color = confettiColors[index % confettiColors.length];


  const animationDuration = useMemo(() => {
    switch (category) {
      case 'low': return 2000 + Math.random() * 1000;
      case 'high': return 1000 + Math.random() * 500;
      default: return 1500 + Math.random() * 800;
    }
  }, [category]);


  const randomX = (index % 2 === 0 ? -1 : 1) * (Math.random() * 100 + 10);
  const randomY = -Math.random() * 100 - 20;
  const randomRotate = (Math.random() - 0.5) * 2 * Math.PI;
  const randomDelay = Math.random() * 500;


  scale.value = withDelay(
    randomDelay,
    withSequence(
      withTiming(1, { duration: 200 }),
      withTiming(0.8, { duration: animationDuration })
    )
  );


  translateX.value = withDelay(
    randomDelay,
    withTiming(randomX, { duration: animationDuration, easing: Easing.out(Easing.quad) })
  );
  
  translateY.value = withDelay(
    randomDelay,
    withTiming(randomY, { duration: animationDuration, easing: Easing.out(Easing.quad) })
  );


  rotate.value = withDelay(
    randomDelay,
    withTiming(randomRotate, { duration: animationDuration })
  );


  opacity.value = withDelay(
    randomDelay,
    withSequence(
      withTiming(1, { duration: 200 }),
      withTiming(0, { duration: animationDuration })
    )
  );

  return {
    scale,
    translateX,
    translateY,
    rotate,
    opacity,
    color
  };
};

export const useCategoryConfig = (category: WellnessCategory = 'medium') => {

  const icon = useMemo(() => {
    switch (category) {
      case 'low':
        return '🌱';
      case 'medium':
        return '👍';
      case 'high':
        return '🌟';
      default:
        return '✓';
    }
  }, [category]);


  const confettiCount = useMemo(() => {
    switch (category) {
      case 'low': return 8;
      case 'high': return 20;
      default: return 12;
    }
  }, [category]);


  const confettiIndices = useMemo(() => 
    Array.from({ length: confettiCount }, (_, i) => i), 
  [confettiCount]);

  return {
    icon,
    confettiCount,
    confettiIndices
  };
};
