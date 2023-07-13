import { useTranslation } from 'react-i18next';

import Logo from 'shared/assets/logo.svg';
import { classNames } from 'shared/lib/classNames/classNames';

import { LangSwitcher } from 'widgets/ui/LangSwitcher/LangSwitcher';
import { ThemeSwitcher } from 'widgets/ui/ThemeSwitcher';

import cls from './Header.module.scss';

interface HeaderProps {
	className?: string;
}
export const Header = ({ className }: HeaderProps) => {
	const { t } = useTranslation();

	return (
		<div className={classNames(cls.Header, {}, [className])}>
			<div className={cls.logo}>
				<Logo />
				<h1>{t('Поиск авиабилетов')}</h1>
			</div>

			<div className={cls.mode}>
				<p>{t('Темная тема')}</p>
				<ThemeSwitcher className={cls.icon} />
				<LangSwitcher className={cls.lang} />
			</div>
		</div>
	);
};
