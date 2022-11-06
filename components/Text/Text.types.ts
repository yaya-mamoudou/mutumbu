import { TextStyle } from 'react-native';

type TextType = {
	color?: string;
	style?: TextStyle;
	children: React.ReactNode;
};

type SizeProps =
	| { sm?: boolean; xs?: never; md?: never }
	| { sm?: never; xs?: boolean; md?: never }
	| { sm?: never; xs?: never; md?: boolean };

type SizeBoldProps =
	| {
			xs?: boolean;
			sm?: never;
			md?: never;
			lg?: never;
			xl?: never;
			xxl?: never;
	  }
	| {
			xs?: never;
			sm?: boolean;
			md?: never;
			lg?: never;
			xl?: never;
			xxl?: never;
	  }
	| {
			xs?: never;
			sm?: never;
			md?: boolean;
			lg?: never;
			xl?: never;
			xxl?: never;
	  }
	| {
			xs?: never;
			sm?: never;
			md?: never;
			lg?: boolean;
			xl?: never;
			xxl?: never;
	  }
	| {
			xs?: never;
			sm?: never;
			md?: never;
			lg?: never;
			xl?: boolean;
			xxl?: never;
	  }
	| {
			xs?: never;
			sm?: never;
			md?: never;
			lg?: never;
			xl?: never;
			xxl?: boolean;
	  };

export type TextBoldProps = SizeBoldProps & TextType;
export type TextProps = SizeProps & TextType;
