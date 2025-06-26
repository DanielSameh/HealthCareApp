import React, { useState } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { YStack, Text, Button, TextArea } from 'tamagui';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../App';
import MoodSelector from '../../components/MoodSelector';
import SleepHoursSelector from '../../components/SleepHoursSelector';
import useWellness from '../../hooks/useWellness';
import { SafeAreaView } from 'react-native-safe-area-context';

type Props = NativeStackScreenProps<RootStackParamList, 'WellnessForm'>;

const WellnessForm: React.FC<Props> = ({ navigation }) => {

  const { handleSubmit } = useWellness();

  const [selectedMood, setSelectedMood] = useState<number>(2);
  const [sleepHours, setSleepHours] = useState<number>(7);
  const [sleepHoursDisplay, setSleepHoursDisplay] = useState<string>('7');
  const [notes, setNotes] = useState<string>('');

  const onSubmit = () => {

    const formData = {
      mood: selectedMood,
      sleepHours,
      notes,
    };
    

    const { suggestion } = handleSubmit(formData);
    

    navigation.navigate('WellnessSuccess', {
      suggestion,
      selectedMood,
      sleepHours,
      notes
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <YStack gap="$4" padding="$4">
          <Text fontSize={28} fontWeight="bold" textAlign="center">
            Daily Wellness Check
          </Text>
          
          <YStack gap="$6" paddingTop="$4">

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


            <Button
              backgroundColor="$blue8"
              color="white"
              size="$4"
              fontWeight="bold"
              onPress={onSubmit}
            >
              Submit Check-in
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
});

export default WellnessForm;
