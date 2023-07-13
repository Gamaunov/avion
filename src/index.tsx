import './shared/config/i18n/i18n';
import { Suspense } from 'react';
import { render } from 'react-dom';

import App from 'app/App';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import 'app/styles/index.scss';

render(
	<Suspense fallback="">
		<ThemeProvider>
			<App />
		</ThemeProvider>
	</Suspense>,
	document.getElementById('root')
);
