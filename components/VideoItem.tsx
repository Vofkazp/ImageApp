import {Text, View, StyleSheet} from "react-native";

const VideoItem = () => {
  return(
      <View style={styles.container}>
        <Text style={styles.title}>Paginator</Text>
      </View>
  );
}

export default VideoItem;

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