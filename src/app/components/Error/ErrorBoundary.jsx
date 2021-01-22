import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Typography } from '@material-ui/core';

export default class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
            error: null
        };
    }

    static getDerivedStateFromError(error) {
        return {
            hasError: true,
            error
        };
    }

    render() {
        if (this.state.hasError) {
            return (
                <div id="errorBoundryRoot">
                    <Typography variant="h4">Something went wrong.</Typography>
                    <div id="errorBoundryMessage">
                        {this.state.error && <Typography variant="body">{this.state.error.message}</Typography>}
                    </div>
                </div>
            );
        }
        return this.props.children;
    }
}

ErrorBoundary.propTypes = {
    children: PropTypes.any
};
