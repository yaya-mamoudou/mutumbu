import { View, Text, Animated, GestureResponderEvent } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { PlayerType } from './Player.types';
import { styles } from './Player.styles';
import { Layout } from '../../constants';

export default function Player(props: PlayerType) {
	const windowHeight = Layout.window.height;

	const [topPosition, setTopPosition] = useState(100);

	const onMove = (e: GestureResponderEvent) => {
		let position = windowHeight - e.nativeEvent.pageY;
		setTopPosition(position);
	};

	const onTouchEnd = (e: GestureResponderEvent) => {
		let position = windowHeight - e.nativeEvent.pageY;
		if (position > windowHeight / 2) return setTopPosition(windowHeight);

		setTopPosition(80);
	};

	return (
		<Animated.View
			onTouchEnd={onTouchEnd}
			onTouchMove={onMove}
			style={[styles.container, { height: topPosition }]}
		>
			<Text>Player</Text>
		</Animated.View>
	);
}
