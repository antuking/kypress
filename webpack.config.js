const path = require('path');

module.exports = {
    mode: 'development',
    devtool: 'eval-source-map',
    resolve: {
        extensions: [".ts", ".js"],
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: [/node_modules/],
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                '@babel/typescript',
                            ]
                        }
                    }
                ]
            }
        ]
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
}