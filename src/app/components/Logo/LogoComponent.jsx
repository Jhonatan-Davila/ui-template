import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    link: {
        textDecoration: 'none'
    },
    name: {
        color: 'white',
        fontSize: '2rem',
        fontWeight: 100,
        opacity: 0.6
    },
    selected: {
        color: 'orange'
    }
});
export default function LogoComponent(props) {
    const { navigate, selectedIndex } = props;
    const classes = useStyles();
    const index = 0;

    return (
        <Link to="/" className={classes.link} onClick={() => navigate(index)}>
            <Typography
                variant="h6"
                className={classNames(classes.name, {
                    [classes.selected]: selectedIndex === index
                })}
            >
                HEADER
            </Typography>
        </Link>
    );
}

LogoComponent.propTypes = {
    navigate: PropTypes.func,
    selectedIndex: PropTypes.number
};
