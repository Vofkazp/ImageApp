import LottieView from 'lottie-react-native';
import {View, StyleSheet} from "react-native";
import {FOCUSED_BACKGROUND_COLOR} from "../constanrs/colors";

const ErrorPage = () => {
  return (
      <View style={styles.container}>
        <LottieView
            autoPlay
            loop
            source={require('../assets/animations/ErrorPage.json')}
            style={{width: 300, height: 300}}
        />
      </View>
  );
}

export default ErrorPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: FOCUSED_BACKGROUND_COLOR
  }
});