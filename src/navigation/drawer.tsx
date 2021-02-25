import React from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome5"
import { createDrawerNavigator } from "@react-navigation/drawer";
//
import DashboardHome from "../screens/DashboardHome";

export type DrawerParamList = {
  DashboardHome: undefined;
};

const { Navigator, Screen } = createDrawerNavigator<DrawerParamList>();

export default function DrawerNavigator() {
  return (
    <Navigator>
      <Screen name="DashboardHome" component={DashboardHome} />
    </Navigator>
  );
}
