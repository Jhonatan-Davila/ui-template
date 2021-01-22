import React, { useEffect } from 'react';
import PageView from './PageViewComponent';

const withPageView = Component => props => {
    useEffect(() => {
        // todo: do something when page mounts
    }, []);
    return (
        <PageView>
            <Component {...props} />
        </PageView>
    );
};
export default withPageView;
