import { makeStyles } from '@material-ui/core/styles';
import Header from '../Header';
import PropTypes from 'prop-types';
import React from 'react';
import ScrollView from '../ScrollView';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        display: 'flex',
        height: '100vh',
        flexDirection: 'column'
    }
}));
export default function AppViewComponent(props) {
    const classes = useStyles();
    return (
        <main className={classes.root}>
            <Header />
            <ScrollView>{props.children}</ScrollView>
        </main>
    );
}

AppViewComponent.propTypes = {
    children: PropTypes.any
};
