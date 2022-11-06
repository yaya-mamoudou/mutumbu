import { StyleSheet } from 'react-native';
import { Styles } from '../../constants';

export const styles = StyleSheet.create({
	container: {
		...Styles.paddingScreen,
		...Styles.row,
		justifyContent: 'space-between',
		alignItems: 'center',
	},
});
