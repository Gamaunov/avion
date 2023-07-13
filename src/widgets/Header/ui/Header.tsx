import { classNames } from 'shared/lib/classNames/classNames';

// @ts-ignore
import cls from './Header.module.scss';

interface HeaderProps {
	className?: string;
}
export const Header = ({ className }: HeaderProps) => {
	return <div className={classNames(cls.Header, {}, [className])}>Header</div>;
};
