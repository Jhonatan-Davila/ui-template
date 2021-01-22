import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import classNames from 'classnames';
import Logo from '../Logo';
import PropTypes from 'prop-types';
import React from 'react';

const useStyles = makeStyles({
    root: {
        flex: '1 1 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    link: {
        textDecoration: 'none'
    },
    button: {
        color: 'white',
        fontSize: '2rem',
        fontWeight: 100
    },
    selected: {
        color: 'orange'
    }
});
export default function NavbarComponent(props) {
    const { navigate, routes, selectedIndex, showFirstRoute } = props;
    const classes = useStyles();

    const maybeRenderButton = (route, index) => {
        if (index > 0 || showFirstRoute) {
            const { name, path } = route;
            return (
                <Link key={index} to={path} onClick={() => navigate(index)} className={classes.link}>
                    <Button
                        key={index}
                        className={classNames(classes.button, {
                            [classes.selected]: selectedIndex === index
                        })}
                    >
                        {name}
                    </Button>
                </Link>
            );
        }
        return null;
    };

    return (
        <div className={classes.root}>
            <Logo />
            <div>{routes.map((route, i) => maybeRenderButton(route, i))}</div>
        </div>
    );
}

NavbarComponent.propTypes = {
    navigate: PropTypes.func,
    routes: PropTypes.array,
    selectedIndex: PropTypes.number,
    showFirstRoute: PropTypes.bool
};
