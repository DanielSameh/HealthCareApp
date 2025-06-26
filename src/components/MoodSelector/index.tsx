import React from 'react';
import { XStack, Text, Button } from 'tamagui';
import { MOOD_OPTIONS } from '../../constants';

interface MoodSelectorProps {
  selectedMood: number;
  onMoodSelect: (index: number) => void;
}

const MoodSelector: React.FC<MoodSelectorProps> = ({ selectedMood, onMoodSelect }) => {
  return (
    <XStack justifyContent="space-between" width="100%">
      {MOOD_OPTIONS.map((emoji, index) => (
        <Button
          key={index}
          size="$5"
          circular
          backgroundColor={selectedMood === index ? '$blue8' : '$gray4'}
          onPress={() => onMoodSelect(index)}
          pressStyle={{ transform: [{ scale: 0.92 }] }}
        >
          <Text fontSize={24}>{emoji}</Text>
        </Button>
      ))}
    </XStack>
  );
};

export default MoodSelector;
