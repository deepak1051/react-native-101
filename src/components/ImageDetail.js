import { StyleSheet, Text, View, Image } from 'react-native';

const ImageDetail = ({ title, imageSource }) => {
  return (
    <View>
      <Image source={imageSource} />
      <Text>Show Image OF {title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});
export default ImageDetail;
