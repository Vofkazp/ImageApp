import {StatusBar} from 'expo-status-bar';
import {SafeAreaView} from "react-native-safe-area-context";
import ImageContextProvider from "./context/ImageContext";
import RootNavigator from "./components/RootNavigator";
import {FOCUSED_BACKGROUND_COLOR} from "./constanrs/colors";

export default function App() {
  return (
      <SafeAreaView style={{flex: 1, backgroundColor: FOCUSED_BACKGROUND_COLOR}}>
        <StatusBar style='inverted'/>
        <ImageContextProvider>
          <RootNavigator/>
        </ImageContextProvider>
      </SafeAreaView>
  );
}
