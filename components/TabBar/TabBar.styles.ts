import { StyleSheet } from 'react-native';
import { Colors, Fonts } from '../../constants';

export const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		backgroundColor: Colors.background,
		paddingHorizontal: 20,
		borderBottomColor: Colors.text,
		borderBottomWidth: StyleSheet.hairlineWidth,
		overflow: 'visible',
		marginBottom: 4,
		paddingVertical: 3,
	},
	tabItem: {
		justifyContent: 'center',
		margin: 1,
		marginRight: 25,
		overflow: 'visible',
	},
	textLight: {
		fontFamily: Fonts.roboto_light,
		color: Colors.text,
		fontSize: 16.5,
	},
	textBold: {
		fontFamily: Fonts.roboto_medium,
		color: Colors.text,
		fontSize: 21,
	},
	indicator: {
		height: 3,
		borderRadius: 4,
		width: '100%',
		backgroundColor: Colors.card_background,
		position: 'absolute',
		bottom: -5.5,
	},
});
