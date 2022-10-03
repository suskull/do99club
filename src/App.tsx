import React from 'react';
import theme from 'utils/theme';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import routes from './routes';
import NotFound from './pages/404';
import Blank from './layouts';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        {routes.map((route, index) => {
          const Layout = route.layout ?? React.Fragment;
          return (
            <Route
              key={index}
              path={route.path}
              element={(
                <Blank>
                  <Layout>
                    <route.component />
                  </Layout>
                </Blank>
              )}
            />
          );
        })}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
