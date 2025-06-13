import {View, StyleSheet, Dimensions} from "react-native";
import Button from "./Button";
import {useEffect, useState} from "react";

const {width} = Dimensions.get("window");

const Paginator = ({totalPages, currentPage, toPage}: {
  totalPages: number;
  currentPage: number;
  toPage: (page: number) => void
}) => {
  const [pages, setPages] = useState<number[]>([]);

  useEffect(() => {
    const array: number[] = [];
    const freeWidth = width - 150;
    const countButton = Math.floor(freeWidth / 35);

    let visibleCount = Math.min(totalPages, countButton);
    let start = 1;

    if (totalPages > visibleCount) {
      const half = Math.floor(visibleCount / 2);

      if (currentPage <= half) {
        start = 1;
      } else if (currentPage >= totalPages - half) {
        start = totalPages - visibleCount + 1;
      } else {
        start = currentPage - half;
      }
    }

    for (let i = 0; i < visibleCount; i++) {
      array.push(start + i);
    }

    setPages(array);
  }, [totalPages, currentPage]);

  return (
      <View style={styles.container}>
        <Button disabled={currentPage === 1} name="chevrons-left" onPress={() => toPage(1)}/>
        <Button disabled={currentPage === 1} name="chevron-left" onPress={() => toPage(currentPage - 1)}/>
        {pages.map((el, i) => <Button key={i} active={currentPage === el} title={el.toString()}
                                      onPress={() => toPage(el)}/>)}
        <Button disabled={currentPage === totalPages} name="chevron-right" onPress={() => toPage(currentPage + 1)}/>
        <Button disabled={currentPage === totalPages} name="chevrons-right" onPress={() => toPage(totalPages)}/>
      </View>
  );
}

export default Paginator;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    padding: 10,
    gap: 10
  }
});