import { TicketMenu } from 'entities/TicketMenu';
import { Suspense } from 'react';

import { useTheme } from 'app/providers/ThemeProvider';

import { classNames } from 'shared/lib/classNames/classNames';

import { Header } from 'widgets/Header';

function App() {
	const { theme } = useTheme();

	return (
		<section className={classNames('app', {}, [theme])}>
			<Suspense fallback="">
				<div className="container">
					<Header />
					<TicketMenu />
				</div>
			</Suspense>
		</section>
	);
}

export default App;
