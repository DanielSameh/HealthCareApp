import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  animationContainer: {
    width: 300,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  animatedBackground: {
    width: 200,
    height: 100,
    borderRadius: 20,
    position: 'absolute',
  },
  circleContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  checkmark: {
    fontSize: 36,
    color: '#4CAF50',
  },
});
