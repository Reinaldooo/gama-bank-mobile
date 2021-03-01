import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
//
import Transfers from "../screens/Transfers";
import Deposit from "../screens/Deposit";
import Plans from "../screens/Plans";
import DrawerNavigator from "./drawer";
import {Image} from "react-native";

const {Navigator, Screen} = createBottomTabNavigator();

interface Icons {
    [key: string]: string
}

export default function DashboardTabNavigator() {
    return (
        <Navigator
            screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                    if (route.name === "Home") {
                        return <Image source={require('../assets/icon-transferir.png')} style={{maxWidth: 31}}/>;
                    } else if (route.name === "Transferências") {
                        return <Image source={require('../assets/icon-lancamentos.png')} style={{maxWidth: 41}}/>;
                    } else if (route.name === "Depositos") {
                        return <Image source={require('../assets/icon-depositar.png')} style={{maxWidth: 37}}/>;
                    } else if (route.name === "Planos") {
                        return <Image source={require('../assets/icon-planos.png')} style={{maxWidth: 29}}/>;
                    }
                },
            })}
            tabBarOptions={{
                activeTintColor: "white",
                inactiveTintColor: "white",
                showLabel: true,
                style: {
                    borderTopWidth: 0,
                    position: 'absolute',
                    backgroundColor: "#68DE5A",
                    borderTopColor: "transparent",
                    height: 90,
                    justifyContent: "center",
                    alignItems: "center",
                    borderTopLeftRadius: 15,
                    borderTopRightRadius: 15
                },
                tabStyle: {
                    backgroundColor: "transparent",
                    justifyContent: "center",
                    alignItems: "center",
                },
                labelStyle: {
                    paddingBottom: 10,
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: 12,
                    fontWeight: "600",
                    textAlign: "center",

                }
            }}
        >
            <Screen name="Home" component={DrawerNavigator}/>
            <Screen name="Transferências" component={Transfers}/>
            <Screen name="Depositos" component={Deposit}/>
            <Screen name="Planos" component={Plans}/>
        </Navigator>
    );
}
