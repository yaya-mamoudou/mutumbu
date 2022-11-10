import { View, Image } from 'react-native';
import React from 'react';
import { styles } from './SongItem.styles';
import Text from '../Text/Text';
import ThreeDots from '@expo/vector-icons/Entypo';
import { Colors, Images, Layout } from '../../constants';
import { SongItemType } from './SongItem.types';

export default function SongItem(props: SongItemType) {
	const {
		artist = 'James Smith',
		artwork = Images.splash_screen,
		title = 'Never The Same',
	} = props;

	return (
		<View style={styles.container}>
			<Image source={artwork} style={styles.image} />
			<View style={{ marginLeft: 10, flex: 1 }}>
				<Text.Bold lg style={{ marginBottom: 8 }}>
					{title}
				</Text.Bold>
				<Text>{artist}</Text>
			</View>
			<ThreeDots name='dots-three-vertical' size={20} color={Colors.text} />
		</View>
	);
}
