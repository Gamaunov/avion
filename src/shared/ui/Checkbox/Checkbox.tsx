import { classNames } from 'shared/lib/classNames/classNames';

import cls from './Checkbox.module.scss';

export enum variant {
	CHECKBOX = 'checkboxStyle',
	RADIO = 'radioStyle',
}
interface CheckboxProps {
	className?: string;
	type?: string;
	style?: variant;
	label?: string;
	labelStyle?: string;
}
export const Checkbox = ({
	className,
	type = 'checkbox',
	style = variant.CHECKBOX,
	label,
	labelStyle,
}: CheckboxProps) => {
	return (
		<>
			<label className={cls.inputInner}>
				<input className={cls.input} type={type} />
				<span
					className={classNames(
						style === variant.CHECKBOX ? cls.checkboxStyle : cls.radioStyle,
						{},
						[className]
					)}
				/>
				<p className={labelStyle}>{label}</p>
			</label>
		</>
	);
};
