import { Appearance } from 'react-native';

const theme = Appearance.getColorScheme();

const light = {
	text: '#e5e5e5',
	text_active: '#FFD159',
	background: '#313131',
	card_background: '#BBBBBB',
};

const dark = {
	text: '#e5e5e5',
	text_active: '#FFD159',
	background: '#313131',
	card_background: '#BBBBBB',
};

export default theme === 'light' ? light : dark;
