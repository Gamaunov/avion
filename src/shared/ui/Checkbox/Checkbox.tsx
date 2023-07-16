import { fetchTicket } from 'entities/TicketMenu';
import { Path } from 'entities/TicketMenu/model/types/path';
import React, { ChangeEvent } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

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
	disabled?: boolean;
	onClick?: (limit: number, path?: string) => void;
	limit?: number;
	path?: string;
}
export const Checkbox = ({
	className,
	type = 'checkbox',
	style = variant.CHECKBOX,
	label,
	labelStyle,
	disabled = false,
	limit = 3,
	path = Path.TRANSFER_0,
}: CheckboxProps) => {
	const dispatch = useAppDispatch();
	const handleLabelClick = (event: ChangeEvent<HTMLInputElement>) => {
		if (event.target.checked) {
			dispatch(fetchTicket({ limit: limit, search: path }));
		}
	};
	return (
		<>
			<label className={cls.inputInner}>
				<input
					onChange={handleLabelClick}
					disabled={disabled}
					className={cls.input}
					type={type}
				/>
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
