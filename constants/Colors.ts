import { Appearance } from 'react-native';

const theme = Appearance.getColorScheme();

const light = {
	text: '#313131',
	text_active: '#FFD159',
	background: '#e5e5e5',
	card_background: '#BBBBBB',
};

const dark = {
	text: '#e5e5e5',
	text_active: '#FFD159',
	background: '#313131',
	card_background: '#BBBBBB',
};

// export default theme === 'light' ? light : dark;
export default dark;
