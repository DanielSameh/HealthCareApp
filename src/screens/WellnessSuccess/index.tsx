import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { YStack, Button, Text } from 'tamagui';
import Animated from 'react-native-reanimated';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../App';
import { MOOD_OPTIONS } from '../../constants';
import SuccessAnimation from '../../components/SuccessAnimation';
import SuggestionCard from '../../components/SuggestionCard';
import useSuccessAnimation from '../../hooks/useSuccessAnimation';

type Props = NativeStackScreenProps<RootStackParamList, 'WellnessSuccess'>;

const WellnessSuccess: React.FC<Props> = ({ route, navigation }) => {

  const { suggestion, selectedMood, sleepHours, notes } = route.params;

  const {
    circleScale,
    textOpacity,
    cardY,
    successBackgroundColor,
    backgroundScale
  } = useSuccessAnimation();

  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <YStack gap="$4" padding="$4">
          <Text fontSize={28} fontWeight="bold" textAlign="center">
            Wellness Check-in
          </Text>
          
          <YStack gap="$6" alignItems="center" paddingTop="$4">
            <YStack height={200} width="100%" alignItems="center" justifyContent="center">
              <SuccessAnimation
                circleScale={circleScale}
                textOpacity={textOpacity}
                backgroundScale={backgroundScale}
                successBackgroundColor={successBackgroundColor}
              />
            </YStack>
            <Animated.View style={[styles.fullWidth, { transform: [{ translateY: cardY }] }]}>
              <SuggestionCard
                suggestion={suggestion}
                selectedMood={selectedMood}
                sleepHours={sleepHours}
                notes={notes}
                moodOptions={MOOD_OPTIONS}
              />
            </Animated.View>
            <Button
              backgroundColor="$blue8"
              color="white"
              size="$4"
              fontWeight="bold"
              onPress={() => navigation.navigate('WellnessForm')}
            >
              Start Over
            </Button>
          </YStack>
        </YStack>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  scrollContent: {
    flexGrow: 1,
  },
  fullWidth: {
    width: '100%',
  },
});

export default WellnessSuccess;
