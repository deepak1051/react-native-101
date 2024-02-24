import React from 'react';

import { Text, View, StyleSheet, Button } from 'react-native';

const ComponentScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.textStyle}>This is the component screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.navigate('Component')}
      />

      <Button title="Touch me!" onPress={() => console.log('Clicked')} />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
});

export default ComponentScreen;
