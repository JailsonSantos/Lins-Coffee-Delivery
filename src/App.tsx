import { ThemeProvider, useTheme } from 'styled-components'
import { defaultTheme } from './styles/theme/default'
import { GlobalStyle } from './styles/global'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'

import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';

export function App() {

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={defaultTheme}>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
          <GlobalStyle />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  )
}
