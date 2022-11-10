import { View, Text, FlatList } from 'react-native';
import React from 'react';
import { styles } from './Albums.styles';
import { AlbumItem } from '../../components';

export default function Albums() {
	return (
		<FlatList
			contentContainerStyle={styles.container}
			data={Array(10).fill(0)}
			renderItem={({ item }) => <AlbumItem />}
		/>
	);
}
