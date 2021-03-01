import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
//
import DashboardTabNavigator from './dashboard';
import DrawerNavigator from './drawer';

export type AuthRoutesParamList = {
    DashboardTabNavigator: undefined;
    DrawerNavigator: undefined;
};

const { Navigator, Screen } = createStackNavigator<AuthRoutesParamList>();

export default function AuthRoutes() {
    return (
        <Navigator headerMode="none">
            <Screen
                name="DashboardTabNavigator"
                component={DashboardTabNavigator}
            />
            <Screen name="DrawerNavigator" component={DrawerNavigator} />
        </Navigator>
    );
}
