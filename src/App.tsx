import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import './App.css';
import theme from './theme';
import routes from './routes';
import { configureStore, history } from './redux';
import Initializer from './components/Initializer';

const store = configureStore();

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Initializer>
          <ConnectedRouter history={history}>
            <Switch>
              {routes.map(({ slug, ...route }) => (
                <Route key={`route-${slug}`} {...route} />
              ))}
            </Switch>
          </ConnectedRouter>
        </Initializer>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
