import { View, Text, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  console.log(navigation);
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>

      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Component')}
      />

      <Button
        title="Go to List Page"
        onPress={() => navigation.navigate('List')}
      />

      <Button
        title="Go to Image Page "
        onPress={() => navigation.navigate('Image')}
      />

      <Button
        title="Go to Counter Page "
        onPress={() => navigation.navigate('Counter')}
      />
      {/* <TouchableOpacity onPress={() => console.log('List Pressed')}>
        <Text>Go To List Demo</Text>
      </TouchableOpacity> */}
    </View>
  );
};

export default HomeScreen;
