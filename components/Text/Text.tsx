import { Text as RNText } from 'react-native';
import React from 'react';
import { styles } from './Text.styles';
import { TextProps, TextBoldProps } from './Text.types';

function Text(props: TextProps) {
	let { color, style, sm, xs, md, ...rest } = props;
	let textStyle = {};

	xs && (textStyle = { fontSize: 12 });
	sm && (textStyle = { fontSize: 14 });
	md && (textStyle = { fontSize: 16 });

	const extraStyles = {
		...(color && { color }),
		...textStyle,
		...style,
	};

	return <RNText {...rest} style={[styles.textStyle, extraStyles]} />;
}

Text.Bold = (props: TextBoldProps) => {
	let { color, style, sm, xs, md, lg, xl, xxl, ...rest } = props;
	let textStyle = {};

	xs && (textStyle = { fontSize: 12 });
	sm && (textStyle = { fontSize: 14 });
	md && (textStyle = { fontSize: 16 });
	lg && (textStyle = { fontSize: 18 });
	xl && (textStyle = { fontSize: 19 });

	const extraStyles = {
		...(color && { color }),
		...textStyle,
		...style,
	};
	return <RNText {...rest} style={[styles.textBoldStyle, extraStyles]} />;
};

export default Text;
