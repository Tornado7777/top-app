import { HTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

export interface TagProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	children: ReactNode;
	size?: 'small' | 'middle';
	color?: 'ghost' | 'red' | 'grey' | 'green' | 'primary';
	href?: string;
} 