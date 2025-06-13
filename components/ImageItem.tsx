import {Text, View, StyleSheet, Image, TouchableOpacity} from "react-native";
import {image_item} from "../interfaces/mainInterfsce";
import {BORDER_COLOR} from "../constanrs/colors";
import {useEffect, useState} from "react";

const ImageItem = ({item, visibleId, setVisibleId}:
                       { item: image_item; visibleId: number | null; setVisibleId: (id: number) => void }) => {
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    if(visibleId && visibleId !== item.id) {
      setVisible(false);
    }
  }, [visibleId]);

  const toMegabyte = (num: number) => {
    const megabytes = num / (1024 * 1024);
    return megabytes.toFixed(2);
  }

  const changeVisible = () => {
    setVisible(!isVisible);
    setVisibleId(item.id);
  }

  const ViewInfo = () => {
    return (
        <View style={styles.info}>
          <Text style={[styles.text, styles.size]}>Розмір файлу: {toMegabyte(item.imageSize)} Mb</Text>
          <Text style={[styles.text, styles.widthAndHeight]}>{item.imageWidth} X {item.imageHeight}</Text>
        </View>
    );
  }

  return (
      <TouchableOpacity onPress={changeVisible}>
        <View style={styles.container}>
          <Image
              source={{
                uri: item.webformatURL,
              }}
              style={styles.image}
              resizeMode={isVisible ? "contain" : "cover"}
          />
          {isVisible && <ViewInfo/>}
        </View>
      </TouchableOpacity>
  );
}

export default ImageItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: BORDER_COLOR,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 200
  },
  info: {
    position: 'absolute',
    left: 5,
    top: 5,
    right: 5,
    bottom: 5,
  },
  text: {
    position: 'absolute',
    fontSize: 12,
    lineHeight: 12,
    padding: 5,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    borderRadius: 5,
    color: "#fff"
  },
  size: {
    top: 27,
    left: 0,
  },
  widthAndHeight: {
    top: 0,
    left: 0,
  }
});