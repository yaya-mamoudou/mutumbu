import { View, Text, FlatList } from 'react-native';
import React from 'react';
import { styles } from './Playlist.styles';
import { PlaylistItem } from '../../components';
import { Colors } from '../../constants';

export default function Playlists() {
	return (
		<FlatList
			style={{ backgroundColor: Colors.background }}
			contentContainerStyle={styles.container}
			data={Array(4).fill(0)}
			numColumns={3}
			renderItem={({ item, index }) => <PlaylistItem index={index} />}
		/>
	);
}
