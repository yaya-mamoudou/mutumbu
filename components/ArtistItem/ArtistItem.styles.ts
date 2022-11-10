import { StyleSheet } from 'react-native';
import { Colors, Layout, Styles } from '../../constants';

let { width } = Layout.window;
width -= 40;
export const styles = StyleSheet.create({
	container: {
		marginVertical: 10,
		flexDirection: 'row',
		alignItems: 'center',
	},
	imageContainer: {
		height: width * 0.25,
		width: width * 0.2,
		borderRadius: 15,
		backgroundColor: Colors.card_background,
		...Styles.centerBox,
	},
	artImage: {
		height: '95%',
		width: '95%',
		borderRadius: 12,
	},
});
