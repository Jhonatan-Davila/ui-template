import { BrowserRouter as Router } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Provider } from 'react-redux';
import AppView from './app/components/AppView';
import ErrorBoundary from './app/components/Error';
import React from 'react';
import routes from './app/routes';
import store from './app/model/Store';
import styles from './styles/global';

const useStyles = makeStyles(styles);

export default function App() {
    useStyles();
    return (
        <ErrorBoundary>
            <Provider store={store}>
                <Router>
                    <AppView>{routes}</AppView>
                </Router>
            </Provider>
        </ErrorBoundary>
    );
}
