import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Albums, Artists, Playlists, Songs } from '../screens';
import { Header, TabBar } from '../components';

const Tab = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator();

function RootNavigator() {
	return (
		<Stack.Navigator screenOptions={{ headerShown: true }}>
			<Stack.Screen
				options={{ header: (props) => <Header {...props} /> }}
				name='Home'
				component={TabNavigator}
			/>
		</Stack.Navigator>
	);
}

function TabNavigator() {
	return (
		<Tab.Navigator screenOptions={{}} tabBar={(props) => <TabBar {...props} />}>
			<Tab.Screen name='Songs' component={Songs} />
			<Tab.Screen name='Albums' component={Albums} />
			<Tab.Screen name='Artists' component={Artists} />
			<Tab.Screen name='Playlists' component={Playlists} />
		</Tab.Navigator>
	);
}

export default function Navigation() {
	return (
		<NavigationContainer>
			<RootNavigator />
		</NavigationContainer>
	);
}
