import { makeStyles } from '@material-ui/core/styles';
import PageView from '../../components/PageView';
import React from 'react';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        flex: '1 1 auto',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        border: '1px dashed gray',
        borderRadius: '3px',
        padding: '25px'
    },
    title: {
        fontSize: '2rem',
        fontWeight: '100'
    }
});
export default function ExploreComponent() {
    const classes = useStyles();
    return (
        <PageView>
            <div className={classes.root}>
                <Typography className={classes.title}>Explore</Typography>
            </div>
        </PageView>
    );
}
