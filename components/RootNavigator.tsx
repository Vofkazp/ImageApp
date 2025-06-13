import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {NavigationContainer} from "@react-navigation/native";
import Images from "../screens/Images";
import Videos from "../screens/Videos";
import {ColorfulTabBar as TabBar} from 'react-navigation-tabbar-collection';
import {View} from "react-native";
import {Feather} from '@expo/vector-icons';
import {BACKGROUND_COLOR, FOCUSED_BACKGROUND_COLOR, ICON_COLOR} from "../constanrs/colors";

const Tab = createBottomTabNavigator();

const RootNavigator = () => {
  return (
      <NavigationContainer>
        <Tab.Navigator
            screenOptions={{
              headerShown: false
            }}
            tabBar={(props: any) => <TabBar
                colorPalette={{
                  primary: FOCUSED_BACKGROUND_COLOR,
                  secondary: '#6c757d',
                  success: '#198754',
                  danger: '#c9379d',
                  warning: '#e6a919',
                  info: '#00bcd4',
                  light: ICON_COLOR,
                  dark: BACKGROUND_COLOR
                }}
                maxWidth={320} height={55} darkMode={true} {...props}
            />}
        >
          <Tab.Screen
              options={{
                title: "Зображення",
                tabBarShowLabel: false,
                tabBarIcon: ({focused}: { focused: boolean }) => {
                  const c = focused ? ICON_COLOR : '#6c6c6c';
                  return (
                      <View>
                        <Feather name="image" size={24} color={c}/>
                      </View>
                  );
                }
              }}
              name="Image"
              component={Images}
          />
          <Tab.Screen
              options={{
                title: "Відео",
                tabBarShowLabel: false,
                tabBarIcon: ({focused}: { focused: boolean }) => {
                  const c = focused ? ICON_COLOR : '#6c6c6c';
                  return (
                      <View>
                        <Feather name="youtube" size={24} color={c}/>
                      </View>
                  );
                }
              }}
              name="Video"
              component={Videos}
          />
        </Tab.Navigator>
      </NavigationContainer>
  );
}

export default RootNavigator;