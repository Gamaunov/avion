import './shared/config/i18n/i18n';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import App from 'app/App';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import store from 'app/store/store';
import 'app/styles/index.scss';

render(
	<ErrorBoundary>
		<ThemeProvider>
			<Provider store={store}>
				<App />
			</Provider>
		</ThemeProvider>
	</ErrorBoundary>,
	document.getElementById('root')
);
