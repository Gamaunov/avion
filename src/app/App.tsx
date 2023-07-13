import { useTheme } from 'app/providers/ThemeProvider';

import { classNames } from 'shared/lib/classNames/classNames';

import { Header } from 'widgets/Header/ui/Header';

function App() {
	const { theme } = useTheme();
	return (
		<section className={classNames('app', {}, [theme])}>
			<div className="container">
				<Header />
			</div>
		</section>
	);
}

export default App;
