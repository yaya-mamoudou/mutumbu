import { View, Text, Image } from 'react-native';
import React from 'react';
import {} from './Header.types';
import { styles } from './Header.styles';
import { Colors, Images } from '../../constants';
import Feather from '@expo/vector-icons/Feather';

export default function Header({ navigation }: any) {
	return (
		<View style={styles.container}>
			<Image
				source={Images.home_logo}
				style={{
					resizeMode: 'contain',
					width: '30%',
				}}
			/>

			<Feather name='search' size={22} color={Colors.text} />
		</View>
	);
}
