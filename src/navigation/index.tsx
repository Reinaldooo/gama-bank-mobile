import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
//
import Login from "../screens/Login";
import CreateAccount from "../screens/CreateAccount";
import ForgotPasswd from "../screens/ForgotPasswd";
import RedefinePassword from "../screens/RedefinePassword";
import DashboardTabNavigator from "./dashboard";
import DrawerNavigator from "./drawer";

export type RootStackParamList = {
  Login: undefined;
  CreateAccount: undefined;
  ForgotPasswd: undefined;
  RedefinePassword: undefined;
  DrawerNavigator: undefined;
  DashboardTabNavigator: undefined;
};

const RootStack = createStackNavigator<RootStackParamList>();

export default function Navigation() {
  return (
    <NavigationContainer>
      <RootStack.Navigator headerMode="none">
        <RootStack.Screen name="Login" component={Login} />
        <RootStack.Screen name="ForgotPasswd" component={ForgotPasswd} />
        <RootStack.Screen name="CreateAccount" component={CreateAccount} />
        <RootStack.Screen name="RedefinePassword" component={RedefinePassword} />
        <RootStack.Screen
          name="DashboardTabNavigator"
          component={DashboardTabNavigator}
        />
        <RootStack.Screen name="DrawerNavigator" component={DrawerNavigator} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
