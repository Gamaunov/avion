import { useTranslation } from 'react-i18next';
import { v4 as uuidv4 } from 'uuid';

import { classNames } from 'shared/lib/classNames/classNames';
import { Checkbox, variant } from 'shared/ui/Checkbox/Checkbox';

import cls from './TicketMenuSidebar.module.scss';

interface TicketMenuSidebarProps {
	className?: string;
}
export const TicketMenuSidebar = ({ className }: TicketMenuSidebarProps) => {
	const { t } = useTranslation();
	return (
		<div className={classNames(cls.TicketMenuSidebar, {}, [className])}>
			<div className={cls.checkboxInner}>
				<h4 className={cls.checkboxTitle}>Количество пересадок</h4>
				<div className={cls.checkboxItems}>
					<Checkbox
						key={uuidv4()}
						style={variant.CHECKBOX}
						label={t('Без пересадок')}
						labelStyle={cls.checkboxLabel}
						className={cls.additional}
					/>
					<Checkbox
						key={uuidv4()}
						style={variant.CHECKBOX}
						label={t('1 пересадка')}
						labelStyle={cls.checkboxLabel}
					/>
					<Checkbox
						key={uuidv4()}
						style={variant.CHECKBOX}
						label={t('2 пересадки')}
						labelStyle={cls.checkboxLabel}
					/>
					<Checkbox
						key={uuidv4()}
						style={variant.CHECKBOX}
						label={t('3 пересадки')}
						labelStyle={cls.checkboxLabel}
					/>
				</div>
			</div>

			<div className={cls.checkboxInner}>
				<h4 className={cls.checkboxTitle}>Компании</h4>
				<div className={cls.checkboxItems}>
					<Checkbox
						key={uuidv4()}
						type="radio"
						style={variant.RADIO}
						label="Победа"
						labelStyle={cls.checkboxLabel}
					/>
					<Checkbox
						key={uuidv4()}
						type="radio"
						style={variant.RADIO}
						label="Red Wings"
						labelStyle={cls.checkboxLabel}
					/>
					<Checkbox
						key={uuidv4()}
						type="radio"
						style={variant.RADIO}
						label="S& Airlines"
						labelStyle={cls.checkboxLabel}
					/>
				</div>
			</div>
		</div>
	);
};
