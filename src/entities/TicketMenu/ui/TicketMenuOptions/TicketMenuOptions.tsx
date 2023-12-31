import { TicketMenuSidebar } from 'entities/TicketMenu/ui/TicketMenuSidebar/TicketMenuSidebar';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaChevronDown } from 'react-icons/fa';

import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';

import cls from './TicketMenuOptions.module.scss';

interface TicketMenuOptionsProps {
	className?: string;
}
export const TicketMenuOptions = ({ className }: TicketMenuOptionsProps) => {
	const { t } = useTranslation();
	const [showOption, setShowOption] = useState(false);

	const handleShowOption = () => {
		setShowOption((prev) => !prev);
	};
	return (
		<div className={classNames(cls.TicketMenuOptions, {}, [className])}>
			<div className={cls.options}>
				<p> {t('Любая авиакомпания, любое кол-во пересадок')}</p>
				<Button className={cls.button} onClick={handleShowOption}>
					<span className={cls.dropdown}>
						{t('Открыть настройки')}
						<FaChevronDown />
					</span>
				</Button>
			</div>
			<TicketMenuSidebar
				className={classNames('', {}, [!showOption ? cls.showOptions : ''])}
			/>
		</div>
	);
};
