import {View, StyleSheet} from "react-native";
import {FOCUSED_BACKGROUND_COLOR} from "../constanrs/colors";
import {useTemp} from "../context/ImageContext";
import {FlatGrid} from 'react-native-super-grid';
import ImageItem from "../components/ImageItem";
import Loading from "./Loading";
import {useState} from "react";
import ErrorPage from "./ErrorPage";

const Images = () => {
  const {imageData, getImageData, fetchError} = useTemp();
  const [visibleId, setVisibleId] = useState<number | null>(null);

  getImageData();

  if (fetchError) {
    return (<ErrorPage/>);
  } else {
    return (
        <View style={styles.container}>
          {imageData ?
              <FlatGrid
                  itemDimension={130}
                  data={imageData.hits}
                  renderItem={({item}) => (<ImageItem setVisibleId={setVisibleId} visibleId={visibleId} item={item}/>)}
                  spacing={15}
              /> :
              <Loading/>
          }
        </View>
    );
  }
}

export default Images;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: FOCUSED_BACKGROUND_COLOR,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  }
});