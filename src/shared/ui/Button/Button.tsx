import { ButtonHTMLAttributes, ReactNode, memo } from 'react';

import { Mods, classNames } from 'shared/lib/classNames/classNames';

import cls from './Button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	square?: boolean;
	disabled?: boolean;
	children?: ReactNode;
}

export const Button = memo((props: ButtonProps) => {
	const { className, children, square, disabled, ...otherProps } = props;

	const mods: Mods = {
		[cls.disabled]: disabled,
	};

	return (
		<button
			type="button"
			className={classNames(cls.Button, mods, [className])}
			disabled={disabled}
			{...otherProps}
		>
			{children}
		</button>
	);
});
