import { View, Image } from 'react-native';
import React from 'react';
import { styles } from './ArtistItem.styles';
import { Images } from '../../constants';
import Text from '../Text/Text';

export default function ArtistItem() {
	return (
		<View style={styles.container}>
			<View style={styles.imageContainer}>
				<Image source={Images.splash_screen} style={styles.artImage} />
			</View>
			<View style={{ marginLeft: 10 }}>
				<Text.Bold md style={{ marginBottom: 6 }}>
					Norman
				</Text.Bold>
				<Text>1 album | 10 Tracks</Text>
			</View>
		</View>
	);
}
