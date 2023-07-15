import './shared/config/i18n/i18n';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import App from 'app/App';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import store from 'app/store/store';
import 'app/styles/index.scss';

render(
	<ThemeProvider>
		<Provider store={store}>
			<App />
		</Provider>
	</ThemeProvider>,
	document.getElementById('root')
);
