import { makeStyles } from '@material-ui/core/styles';
import Footer from '../Footer';
import PropTypes from 'prop-types';
import React from 'react';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        minHeight: 'calc(100vh - 80px)'
    },
    content: {
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column'
    }
}));
export default function PageViewComponent(props) {
    const classes = useStyles();
    const { children } = props;

    return (
        <div className={classes.root}>
            <div className={classes.content}>{children}</div>
            <Footer />
        </div>
    );
}

PageViewComponent.propTypes = {
    children: PropTypes.any
};
