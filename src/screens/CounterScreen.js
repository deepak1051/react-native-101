import { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const CounterScreen = () => {
  const [count, setCount] = useState(0);
  return (
    <View>
      <Button onPress={() => setCount((p) => p + 1)} title="Increase" />
      <Button onPress={() => setCount((p) => p - 1)} title="Decrease" />
      <Text>Current Count: {count}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
