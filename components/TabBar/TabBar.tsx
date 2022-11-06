import * as React from 'react';
import { MaterialTopTabBarProps } from '@react-navigation/material-top-tabs';
import { Colors } from '../../constants';
import { View, TouchableOpacity, Animated } from 'react-native';
import { styles } from './TabBar.styles';

export default function TabBar({ state, descriptors, navigation }: MaterialTopTabBarProps) {
	return (
		<View style={{ backgroundColor: Colors.background }}>
			<View style={styles.container}>
				{state.routes.map((route, index) => {
					const { options } = descriptors[route.key];
					const label: any =
						options.tabBarLabel !== undefined
							? options.tabBarLabel
							: options.title !== undefined
							? options.title
							: route.name;

					const isFocused = state.index === index;

					const onPress = () => {
						const event = navigation.emit({
							type: 'tabPress',
							target: route.key,
							canPreventDefault: true,
						});

						if (!isFocused && !event.defaultPrevented) {
							// The `merge: true` option makes sure that the params inside the tab screen are preserved
							navigation.navigate({ name: route?.name, merge: true });
						}
					};

					const onLongPress = () => {
						navigation.emit({
							type: 'tabLongPress',
							target: route.key,
						});
					};

					return (
						<TouchableOpacity
							key={index}
							accessibilityRole='button'
							accessibilityState={isFocused ? { selected: true } : {}}
							accessibilityLabel={options.tabBarAccessibilityLabel}
							testID={options.tabBarTestID}
							onPress={onPress}
							onLongPress={onLongPress}
							style={styles.tabItem}
						>
							{isFocused && (
								<Animated.Text style={[styles.textBold, { fontSize: 22 }]}>
									{label}
								</Animated.Text>
							)}
							{!isFocused && (
								<Animated.Text style={[styles.textLight, { fontSize: 16 }]}>
									{label}
								</Animated.Text>
							)}

							{isFocused && <View style={styles.indicator} />}
						</TouchableOpacity>
					);
				})}
			</View>
		</View>
	);
}
