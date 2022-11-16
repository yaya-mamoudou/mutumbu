import { View, Text, FlatList } from 'react-native';
import React from 'react';
import { styles } from './Albums.styles';
import { AlbumItem } from '../../components';
import { Colors } from '../../constants';

export default function Albums() {
	return (
		<FlatList
			style={{ backgroundColor: Colors.background }}
			numColumns={3}
			contentContainerStyle={styles.container}
			data={Array(5).fill(0)}
			renderItem={({ item, index }) => <AlbumItem index={index} />}
		/>
	);
}
