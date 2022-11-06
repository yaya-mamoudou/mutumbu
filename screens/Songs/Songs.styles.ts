import { StyleSheet } from 'react-native';
import { Colors, Styles } from '../../constants';

export const styles = StyleSheet.create({
	container: {
		backgroundColor: Colors.background,
		flex: 1,
		...Styles.paddingScreen,
	},
});
