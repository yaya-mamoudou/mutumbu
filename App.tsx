import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from './constants';
import { DeviceEventEmitter } from 'react-native';
import MusicFiles from 'react-native-get-music-files';

import useCachedResources from './hooks/useCachedResources';
import Navigation from './navigation';
import { useEffect, useState } from 'react';

export default function App() {
	const isLoadingComplete = useCachedResources();
	const [isMounted, setisMounted] = useState(false);
	const [songs, setSongs] = useState([]);

	useEffect(() => {
		if (!isMounted) {
			DeviceEventEmitter.addListener('onBatchReceived', ({ batch }: { batch: [] }) => {
				setSongs([...songs, ...batch]);
			});
		}
	}, [isMounted]);

	useEffect(() => {
		MusicFiles.getAll({
			id: true,
			blured: false,
			artist: true,
			duration: true, //default : true
			cover: true, //default : true,
			title: true,
			batchNumber: 5, //get 5 songs per batch
			minimumSongDuration: 10000, //in miliseconds,
			fields: ['title', 'artwork', 'duration', 'artist', 'genre', 'lyrics', 'albumTitle'],
		});
	}, []);

	console.log(songs);

	//In order to get blocks of songs, for fix performance issues at least in Android, use next

	if (!isLoadingComplete) {
		return null;
	} else {
		return (
			<SafeAreaProvider>
				<SafeAreaView style={{ flex: 1, backgroundColor: Colors.background }}>
					<Navigation />
				</SafeAreaView>
				<StatusBar style='light' />
			</SafeAreaProvider>
		);
	}
}
