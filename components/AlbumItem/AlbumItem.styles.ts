import { StyleSheet } from 'react-native';
import { Colors, Layout, Styles } from '../../constants';

let { width } = Layout.window;
width -= 40;

export const styles = StyleSheet.create({
	container: {
		width: width * 0.315,
		marginBottom: 40,
		marginTop: 10,
	},
	cardContainer: {
		width: '100%',
		height: width * 0.315,
		backgroundColor: Colors.card_background,
		borderRadius: 15,
		...Styles.centerBox,
	},
	artImage: {
		width: '95%',
		height: '95%',
		borderRadius: 12,
	},
});
