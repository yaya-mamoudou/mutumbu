import { StyleSheet } from 'react-native';
import { Layout } from '../../constants';
let { width } = Layout.window;
width -= 40;

export const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		marginVertical: 10,
		alignItems: 'center',
	},
	image: {
		backgroundColor: '#eee',
		width: width * 0.2,
		height: width * 0.25,
		borderRadius: 12,
	},
});
