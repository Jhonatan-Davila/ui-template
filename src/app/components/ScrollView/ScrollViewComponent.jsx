import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        display: 'flex',
        padding: '0 2rem',
        alignItems: 'center',
        height: 'calc(100vh - 80px)',
        overflowX: 'auto'
    }
}));
export default function ScrollViewComponent(props) {
    const classes = useStyles();
    const { children } = props;
    return <div className={classes.root}>{children}</div>;
}

ScrollViewComponent.propTypes = {
    children: PropTypes.any
};
