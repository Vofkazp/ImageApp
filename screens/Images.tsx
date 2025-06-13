import {View, StyleSheet} from "react-native";
import {FOCUSED_BACKGROUND_COLOR} from "../constanrs/colors";
import {useTemp} from "../context/ImageContext";
import {FlatGrid} from 'react-native-super-grid';
import ImageItem from "../components/ImageItem";
import Loading from "./Loading";
import {useEffect, useState} from "react";
import ErrorPage from "./ErrorPage";
import Paginator from "../components/Paginator";

const Images = () => {
  const {imageData, getImageData, fetchError} = useTemp();
  const [visibleId, setVisibleId] = useState<number | null>(null);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(20);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    getImageData(page, perPage);
  }, [page, perPage]);

  useEffect(() => {
    if (imageData) {
      setTotalPages(Math.ceil(imageData.totalHits / perPage));
    }
  }, [imageData]);

  if (fetchError) {
    return (<ErrorPage/>);
  } else {
    return (
        <View style={styles.container}>
          {imageData ?
              <View style={{flex: 1}}>
                <FlatGrid
                    itemDimension={130}
                    data={imageData.hits}
                    renderItem={({item}) => (
                        <ImageItem setVisibleId={setVisibleId} visibleId={visibleId} item={item}/>)}
                    spacing={15}
                    style={{backgroundColor: "transparent"}}
                />
                <Paginator totalPages={totalPages} currentPage={page} toPage={setPage}/>
              </View> :
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