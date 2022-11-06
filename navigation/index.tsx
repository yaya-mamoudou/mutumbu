import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Albums, Artists, Playlists, Songs } from '../screens';

export default function Navigation() {
	return (
		<NavigationContainer>
			<RootNavigator />
		</NavigationContainer>
	);
}

const Stack = createNativeStackNavigator();

function RootNavigator() {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name='Home' component={TabNavigator} />
		</Stack.Navigator>
	);
}

const Tab = createMaterialTopTabNavigator();

function TabNavigator() {
	return (
		<Tab.Navigator>
			<Tab.Screen name='Songs' component={Songs} />
			<Tab.Screen name='Albums' component={Albums} />
			<Tab.Screen name='Artists' component={Artists} />
			<Tab.Screen name='Playlists' component={Playlists} />
		</Tab.Navigator>
	);
}
