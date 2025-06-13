import LottieView from 'lottie-react-native';
import {View, StyleSheet} from "react-native";
import {FOCUSED_BACKGROUND_COLOR} from "../constanrs/colors";

const Loading = () => {
  return (
      <View style={styles.container}>
        <LottieView
            autoPlay
            loop
            source={require('../assets/animations/LoadingAnimation.json')}
            style={{width: 250, height: 250}}
        />
      </View>
  );
}

export default Loading;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: FOCUSED_BACKGROUND_COLOR
  }
});