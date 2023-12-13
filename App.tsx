import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello, React Native! This is my first React Native App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: 'top',
    alignItems: 'center',
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
  },
});

export default App;
