import { View, Image } from 'react-native';
import React from 'react';
import { styles } from './AlbumItem.styles';
import { AlbumItemType } from './AlbumItem.types';
import { Colors, Images } from '../../constants';
import Text from '../Text/Text';

export default function AlbumItem({ album = 'Lover Boy', artist = 'Big Ben' }: AlbumItemType) {
	return (
		<View style={[styles.container]}>
			<View style={styles.cardContainer}>
				<Image source={Images.splash_screen} style={styles.artImage} />
			</View>
			<Text.Bold md style={{ marginBottom: 5, marginTop: 4 }}>
				{album}
			</Text.Bold>
			<Text>{artist}</Text>
		</View>
	);
}
