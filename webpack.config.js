const path = require('path')

module.exports = {
    mode: 'development',
    entry: {
        main: './src/index.js',
    },
    output: {
        // filename: 'main.js',
        path: path.resolve(__dirname, 'public')
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    
}