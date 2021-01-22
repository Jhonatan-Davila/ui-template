import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';

const useStyles = makeStyles({
    root: {
        flex: '1 1 auto'
    },
    title: {
        fontSize: '8rem',
        fontWeight: '500',
        maxWidth: '500px',
        lineHeight: '10rem',
        opacity: 0.25
    }
});
export default function ProjectsComponent() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Typography className={classes.position}>404 PAGE NOT FOUND</Typography>
        </div>
    );
}
