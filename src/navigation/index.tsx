import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
//
import Login from "../screens/Login";
import CreateAccount from "../screens/CreateAccount";
import ForgotPasswd from "../screens/ForgotPasswd";
import DashboardTabNavigator from "./dashboard";

const RootStack = createStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <RootStack.Navigator headerMode="none">
        <RootStack.Screen name="Login" component={Login} />
        <RootStack.Screen name="CreateAccount" component={CreateAccount} />
        <RootStack.Screen name="ForgotPasswd" component={ForgotPasswd} />
        <RootStack.Screen
          name="DashboardTabNavigator"
          component={DashboardTabNavigator}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
