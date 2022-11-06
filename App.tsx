import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from './constants';

import useCachedResources from './hooks/useCachedResources';
import Navigation from './navigation';

export default function App() {
	const isLoadingComplete = useCachedResources();

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
