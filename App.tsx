import React from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import { TamaguiProvider } from 'tamagui';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import config from './tamagui.config';


import WellnessForm from './src/screens/WellnessForm';
import WellnessSuccess from './src/screens/WellnessSuccess';


export type RootStackParamList = {
  WellnessForm: undefined;
  WellnessSuccess: {
    suggestion: string;
    selectedMood: number;
    sleepHours: number;
    notes: string;
  };
};


const Stack = createNativeStackNavigator<RootStackParamList>();

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <TamaguiProvider config={config}>
          <NavigationContainer>
            <Stack.Navigator 
              initialRouteName="WellnessForm"
              screenOptions={{ 
                headerShown: false,
                animation: 'fade'
              }}
            >
              <Stack.Screen name="WellnessForm" component={WellnessForm} />
              <Stack.Screen name="WellnessSuccess" component={WellnessSuccess} />
            </Stack.Navigator>
          </NavigationContainer>
      </TamaguiProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;
