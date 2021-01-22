import { makeStyles } from '@material-ui/core/styles';
import Navbar from '../Navbar';
import React from 'react';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: `0 ${theme.spacing(4)}`,
        height: '75px'
    }
}));
export default function AppViewComponent() {
    const classes = useStyles();

    return (
        <header className={classes.root}>
            <Navbar variant="small" />
        </header>
    );
}
