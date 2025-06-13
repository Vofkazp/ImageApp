import {Text, View, StyleSheet} from "react-native";

const ImageItem = () => {
  return(
      <View style={styles.container}>
        <Text style={styles.title}>Paginator</Text>
      </View>
  );
}

export default ImageItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  }
});