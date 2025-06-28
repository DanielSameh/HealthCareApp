import React, { useState } from 'react';
import { StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import { YStack, Text, Button, TextArea, XStack } from 'tamagui';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../App';
import MoodSelector from '../../components/MoodSelector';
import SleepHoursSelector from '../../components/SleepHoursSelector';
import useWellness from '../../hooks/useWellness';
import { SafeAreaView } from 'react-native-safe-area-context';

type Props = NativeStackScreenProps<RootStackParamList, 'WellnessForm'>;

const WellnessForm: React.FC<Props> = ({ navigation }) => {

  const { handleSubmit, isLoading, error } = useWellness();

  const [selectedMood, setSelectedMood] = useState<number>(2);
  const [sleepHours, setSleepHours] = useState<number>(7);
  const [sleepHoursDisplay, setSleepHoursDisplay] = useState<string>('7');
  const [notes, setNotes] = useState<string>('');

  const onSubmit = async () => {
    const formData = {
      mood: selectedMood,
      sleepHours,
      notes,
    };
    
    try {
      const result = await handleSubmit(formData);
      navigation.navigate('WellnessSuccess', {
        suggestion: result.suggestion,
        selectedMood,
        sleepHours,
        notes
      });
    } catch (err) {
      console.error('Error submitting wellness form:', err);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <YStack gap="$4" padding="$4">
          <Text fontSize={28} fontWeight="bold" textAlign="center">
            Daily Wellness Check
          </Text>
          <YStack gap="$10" paddingTop="$4">
            <YStack gap="$2">
              <Text fontSize={18} fontWeight="600">
                How are you feeling today?
              </Text>
              <MoodSelector 
                selectedMood={selectedMood} 
                onMoodSelect={setSelectedMood} 
              />
            </YStack>


            <YStack gap="$2">
              <Text fontSize={18} fontWeight="600">
                How many hours did you sleep last night?
              </Text>
              <SleepHoursSelector
                sleepHours={sleepHours}
                sleepHoursDisplay={sleepHoursDisplay}
                onSleepHoursChange={setSleepHours}
                onSleepHoursDisplayChange={setSleepHoursDisplay}
              />
            </YStack>


            <YStack gap="$2">
              <Text fontSize={18} fontWeight="600">
                Any notes about how you're feeling?
              </Text>
              <TextArea
                size="$4"
                placeholder="Enter any additional notes here..."
                value={notes}
                onChangeText={setNotes}
                autoCapitalize="sentences"
              />
            </YStack>
            <YStack gap="$2">
            <Button
              backgroundColor="$blue8"
              color="white"
              size="$4"
              fontWeight="bold"
              onPress={onSubmit}
              disabled={isLoading}
            >
              {isLoading ? (
                <XStack gap="$2" alignItems="center">
                  <ActivityIndicator color="white" size="small" />
                  <Text color="white">Loading...</Text>
                </XStack>
              ) : (
                'Submit Check-in'
              )}
            </Button>
            {error && (
              <Text color="$red10" textAlign="center">
                {error}
              </Text>
            )}
            </YStack>
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
});

export default WellnessForm;
