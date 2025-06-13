import {Text, View, StyleSheet} from "react-native";
import {FOCUSED_BACKGROUND_COLOR} from "../constanrs/colors";

const Videos = () => {
  return(
      <View style={styles.container}>
        <Text style={styles.title}>Videos</Text>
      </View>
  );
}

export default Videos;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: FOCUSED_BACKGROUND_COLOR
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  }
});