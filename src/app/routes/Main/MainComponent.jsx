import { makeStyles } from '@material-ui/core/styles';
import PageView from '../../components/PageView';
import Typography from '@material-ui/core/Typography';
import React from 'react';

const useStyles = makeStyles({
    centerAlign: {
        flex: '1 1 auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '0 5rem'
    }
});
export default function Mainomponent() {
    const classes = useStyles();
    return (
        <PageView>
            <div className={classes.centerAlign}>
                <div>
                    <Typography variant="h1">TEMPLATE</Typography>
                </div>
            </div>
        </PageView>
    );
}
