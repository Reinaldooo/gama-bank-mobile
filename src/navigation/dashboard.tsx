import React from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome5";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
//
import DashboardHome from "../screens/DashboardHome";
import Transfers from "../screens/Transfers";
import Deposit from "../screens/Deposit";
import Plans from "../screens/Plans";

const { Navigator, Screen } = createBottomTabNavigator();

export default function DashboardTabNavigator() {
  return (
    <Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          return (
            <FontAwesome name="money-bill-wave-alt" size={size} color={color} />
          );
        },
      })}
      tabBarOptions={{
        activeTintColor: "white",
        inactiveTintColor: "white",
        showLabel: true,
        style: {
          backgroundColor: "#8C52E5",
          borderTopColor: "transparent",
          borderRadius: 30,
          height: 80,
        },
      }}
    >
      <Screen name="DashboardHome" component={DashboardHome} />
      <Screen name="Transfers" component={Transfers} />
      <Screen name="Deposit" component={Deposit} />
      <Screen name="Plans" component={Plans} />
    </Navigator>
  );
}
