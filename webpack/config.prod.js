const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
    mode: 'production',
    plugins: [
        new CompressionPlugin({
            filename: '[path].gz[query]',
            algorithm: 'gzip',
            test: /\.js$|\.css$/,
            threshold: 1024,
            minRatio: 0.5
        }),
        new webpack.DefinePlugin({
          'process.env.NODE_ENV': JSON.stringify('production')
        })
    ]
};
