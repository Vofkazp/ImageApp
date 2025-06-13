import {Text, TouchableOpacity, View, StyleSheet} from "react-native";
import {BORDER_COLOR, ICON_COLOR} from "../constanrs/colors";
import {Feather} from "@expo/vector-icons";

interface Button {
  name?: keyof typeof Feather.glyphMap;
  title?: string;
  onPress: () => void;
  disabled?: boolean;
  active?: boolean;
}

const Button = ({name, title, onPress, disabled, active}: Button) => {

  const clickToButton = () => {
    if (disabled || active) return;
    onPress();
  }

  return (
      <TouchableOpacity onPress={clickToButton} activeOpacity={disabled || active ? 1 : .5}>
        <View style={[
          styles.container,
          {backgroundColor: active ? ICON_COLOR : "transparent"},
          {borderColor: active ? BORDER_COLOR : disabled ? "#8a8989" : ICON_COLOR},
        ]}>
          {name ? <Feather name={name} size={18} color={disabled?"#8a8989":ICON_COLOR}/> :
              <Text style={[styles.title, active ? {color: BORDER_COLOR} : {color: ICON_COLOR}]}>{title}</Text>
          }
        </View>
      </TouchableOpacity>
  );
}

export default Button;

const styles = StyleSheet.create({
  container: {
    width: 25,
    height: 25,
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
  }
});