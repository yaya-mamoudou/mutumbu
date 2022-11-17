import { StyleSheet } from 'react-native';
import { Colors } from '../../constants';

export const styles = StyleSheet.create({
	container: {
		height: 80,
		backgroundColor: Colors.player_background,
		borderTopRightRadius: 10,
		borderTopLeftRadius: 10,
		paddingHorizontal: 20,
		paddingVertical: 10,
		position: 'absolute',
		bottom: 0,
		width: '100%',
	},
});
