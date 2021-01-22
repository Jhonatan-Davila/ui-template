const merge = require('webpack-merge');

module.exports = (env = 'development') => {
	switch (env) {
        case 'production':
            return merge(
                require('./config.common'), 
                require('./config.prod')
            );
        case 'development':
            return merge(
                require('./config.common'),  
                require('./config.dev')
            );
        default:
            throw new Error(`Unknown env: ${env}`);
	}
};
