import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import AppRoutes from './routes';

const theme = {
    background: '#F5F5F5',
    onBackground: '#262626',
    primary: '#468EFA',
    onPrimary: '#FFF',
}

const App = () => {
    return (
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <AppRoutes />
            </ThemeProvider>
        </BrowserRouter>
    );
};

export default App;
