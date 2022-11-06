import { View } from 'react-native';
import React from 'react';
import { styles } from './Songs.styles';
import { Text } from '../../components';

export default function Songs() {
	return (
		<View style={styles.container}>
			<Text>Songs</Text>
		</View>
	);
}
