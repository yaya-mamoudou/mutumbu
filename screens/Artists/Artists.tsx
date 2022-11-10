import { View, Text, FlatList } from 'react-native';
import React from 'react';
import { styles } from './Artists.styles';
import { ArtistItem } from '../../components';
import { Colors, Styles } from '../../constants';

export default function Artists() {
	return (
		<FlatList
			style={{ backgroundColor: Colors.background }}
			contentContainerStyle={styles.container}
			data={Array(10).fill(0)}
			renderItem={({}) => <ArtistItem />}
		/>
	);
}
