import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//
import Transfers from '../screens/Transfers';
import Deposit from '../screens/Deposit';
import Plans from '../screens/Plans';
import DrawerNavigator from './drawer';
import { Image, Platform } from 'react-native';

const { Navigator, Screen } = createBottomTabNavigator();

export default function DashboardTabNavigator() {
    const isIos = Platform.OS === 'ios';
    return (
        <Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: () => {
                    type Routes = {
                        [key: string]: JSX.Element;
                    };

                    const routes: Routes = {
                        Home: (
                            <Image
                                source={require('../assets/icon-lancamentos.png')}
                                style={{ maxWidth: 41 }}
                            />
                        ),
                        Transfers: (
                            <Image
                                source={require('../assets/icon-transferir.png')}
                                style={{ maxWidth: 31 }}
                            />
                        ),
                        Deposit: (
                            <Image
                                source={require('../assets/icon-depositar.png')}
                                style={{ maxWidth: 37 }}
                            />
                        ),
                        Plans: (
                            <Image
                                source={require('../assets/icon-planos.png')}
                                style={{ maxWidth: 29 }}
                            />
                        ),
                    };
                    return routes[route.name];
                },
            })}
            tabBarOptions={{
                activeTintColor: 'white',
                inactiveTintColor: 'white',
                showLabel: true,
                style: {
                    borderTopWidth: 0,
                    position: 'absolute',
                    backgroundColor: '#68DE5A',
                    borderTopColor: 'transparent',
                    height: isIos ? 110 : 90,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderTopLeftRadius: 15,
                    borderTopRightRadius: 15,
                },
                tabStyle: {
                    backgroundColor: 'transparent',
                    justifyContent: 'center',
                    alignItems: 'center',
                },
                labelStyle: {
                    paddingBottom: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontSize: 12,
                    fontWeight: '600',
                    textAlign: 'center',
                },
            }}
        >
            <Screen name="Home" component={DrawerNavigator} />
            <Screen name="Transfers" component={Transfers} />
            <Screen name="Deposit" component={Deposit} />
            <Screen name="Plans" component={Plans} />
        </Navigator>
    );
}
