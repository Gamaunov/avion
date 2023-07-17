import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';

import cls from './ErrorPage.module.scss';

interface ErrorPageProps {
	className?: string;
}

export const ErrorPage = ({ className }: ErrorPageProps) => {
	const { t } = useTranslation();

	const reloadPage = () => {
		location.reload();
	};

	return (
		<section className={classNames(cls.ErrorPage, {}, [className])}>
			<h1>{t('Произошла непредвиденная ошибка')}</h1>
			<Button className={cls.button} onClick={reloadPage}>
				{t('Обновить страницу')}
			</Button>
		</section>
	);
};
