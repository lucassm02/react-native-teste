import 'react-native-gesture-handler';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './pages/Main';
import User from './pages/User';

const Stack = createStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Inicio"
                screenOptions={{
                    headerTintColor: 'white',
                    headerTitleAlign: 'center',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                    headerBackTitle: false,
                    headerStyle: { backgroundColor: '#7159c1' },
                }}
            >
                <Stack.Screen name="Inicio" component={Main} />
                <Stack.Screen name="Usuários" component={User} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
