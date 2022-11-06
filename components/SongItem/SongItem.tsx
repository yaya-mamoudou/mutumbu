import { View, Image } from 'react-native';
import React from 'react';
import { styles } from './SongItem.styles';
import Text from '../Text/Text';
import ThreeDots from '@expo/vector-icons/Entypo';
import { Colors, Images } from '../../constants';
import { SongItemType } from './SongItem.types';

export default function SongItem(props: SongItemType) {
	const { artist = 'James Smith', artwork = Images.home_logo, title = 'Never The Same' } = props;

	return (
		<View style={styles.container}>
			<Image
				source={artwork}
				style={{ backgroundColor: '#eee', width: 60, height: 50, borderRadius: 8 }}
			/>
			<View style={{ marginLeft: 10, flex: 1 }}>
				<Text.Bold lg>{title}</Text.Bold>
				<Text>{artist}</Text>
			</View>

			<ThreeDots name='dots-three-vertical' size={20} color={Colors.text} />
		</View>
	);
}
