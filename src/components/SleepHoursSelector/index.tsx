import React from 'react';
import { YStack, Text, Slider } from 'tamagui';

interface SleepHoursSelectorProps {
  sleepHours: number;
  sleepHoursDisplay: string;
  onSleepHoursChange: (hours: number) => void;
  onSleepHoursDisplayChange: (display: string) => void;
}

const SleepHoursSelector: React.FC<SleepHoursSelectorProps> = ({
  sleepHours,
  sleepHoursDisplay,
  onSleepHoursChange,
  onSleepHoursDisplayChange,
}) => {
  return (
    <YStack>
      <Slider
        size="$1"
        width="100%"
        defaultValue={[sleepHours]}
        min={1}
        max={12}
        step={1}
        onValueChange={(values) => {
          const value = Math.round(values[0]);
          onSleepHoursChange(value);
          onSleepHoursDisplayChange(value.toString());
        }}
      >
        <Slider.Track>
          <Slider.TrackActive backgroundColor="$blue8" />
        </Slider.Track>
        <Slider.Thumb
          index={0}
          size="$1"
          circular
          backgroundColor="$blue8"
        />
      </Slider>
      <YStack flexDirection="row" justifyContent="space-between" paddingTop="$2">
        <Text>1 hour</Text>
        <Text fontWeight="bold" color="$blue8">{sleepHoursDisplay} hours</Text>
        <Text>12 hours</Text>
      </YStack>
    </YStack>
  );
};

export default SleepHoursSelector;
