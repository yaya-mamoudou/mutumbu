import { StyleSheet } from 'react-native';
import { Colors, Styles } from '../../constants';

export const styles = StyleSheet.create({
	container: {
		...Styles.paddingScreen,
		backgroundColor: Colors.background,
		flexDirection: 'row',
		flexWrap: 'wrap',
	},
});
