import { View, Image } from 'react-native';
import React from 'react';
import { styles } from './PlaylistItem.styles';
import { PlaylistItemType } from './PlaylistItem.types';
import { Layout, Images } from '../../constants';
import Text from '../Text/Text';

export default function PlaylistItem({
	playlistName = 'Recent',
	totalTracks = 15,
	index,
}: PlaylistItemType) {
	const width = Layout.window.width - 40;

	return (
		<View
			style={[styles.container, { marginRight: index + (1 % 3) === 0 ? 0 : width * 0.028 }]}
		>
			<View style={styles.cardContainer}>
				<Image source={Images.splash_screen} style={styles.artImage} />
			</View>
			<Text.Bold md style={{ marginBottom: 5, marginTop: 4 }}>
				{playlistName}
			</Text.Bold>
			<Text>{totalTracks} Tracks</Text>
		</View>
	);
}
