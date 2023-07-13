import { memo } from 'react';
import { BsToggleOff, BsToggleOn } from 'react-icons/bs';

import { Theme, useTheme } from 'app/providers/ThemeProvider';

import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';

interface ThemeSwitcherProps {
	className?: string;
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
	const { theme, toggleTheme } = useTheme();

	return (
		<Button className={classNames('', {}, [className])} onClick={toggleTheme}>
			{theme === Theme.DARK ? <BsToggleOn /> : <BsToggleOff />}
		</Button>
	);
});
