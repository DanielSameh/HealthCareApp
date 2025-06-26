import React from 'react';
import { YStack, XStack, Text, Card, Separator } from 'tamagui';

interface SuggestionCardProps {
  suggestion: string;
  selectedMood: number;
  sleepHours: number;
  notes: string;
  moodOptions: string[];
}

const SuggestionCard: React.FC<SuggestionCardProps> = ({
  suggestion,
  selectedMood,
  sleepHours,
  notes,
  moodOptions,
}) => {
  return (
    <YStack gap="$4" width="100%">
      <Card
        elevate
        bordered
        animation="bouncy"
        scale={0.95}
        width="100%"
        padding="$4"
        backgroundColor="$blue2"
      >
        <YStack gap="$2">
          <Text fontSize={16} fontWeight="600" color="$blue9" textAlign="center">
            Wellness Suggestion
          </Text>
          <Text fontSize={20} fontWeight="bold" textAlign="center" paddingVertical="$2">
            {suggestion}
          </Text>
        </YStack>
      </Card>

      <Card
        elevate
        bordered
        animation="bouncy"
        scale={0.95}
        width="100%"
        padding="$4"
      >
        <YStack gap="$2">
          <Text fontSize={16} fontWeight="600" textAlign="center" paddingBottom="$2">
            Your Check-in Summary
          </Text>
          <Separator marginVertical="$2" />
          <XStack gap="$2" paddingVertical="$1">
            <Text fontWeight="bold" width={60}>Mood:</Text>
            <Text>{moodOptions[selectedMood]}</Text>
          </XStack>
          <XStack gap="$2" paddingVertical="$1">
            <Text fontWeight="bold" width={60}>Sleep:</Text>
            <Text>{sleepHours} hours</Text>
          </XStack>
          {notes ? (
            <YStack paddingVertical="$1">
              <Text fontWeight="bold">Notes:</Text>
              <Text paddingTop="$1">{notes}</Text>
            </YStack>
          ) : null}
        </YStack>
      </Card>
    </YStack>
  );
};

export default SuggestionCard;
