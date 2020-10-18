const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'public'),
        open: true,
        port: 1337,
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
              },
              {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
              },
              {
                  test: /\.(png|jpg|jpeg|svg|gif)$/,
                  use: {
                    loader: "file-loader",
                    options: {
                      name: '[path][name].[ext]',
                    },
                  }
              }
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devtool: 'source-map',
};
