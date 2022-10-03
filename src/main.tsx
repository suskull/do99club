import React from 'react';
import history from 'utils/history';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from 'utils/react-query';
import { store } from 'store';
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import App from './App';

import './utils/i18n';
import './index.scss';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <HistoryRouter history={history}>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </Provider>
    </HistoryRouter>
  </React.StrictMode>,
);
