const path = require('path'); // helps to concatinate paths 
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, "src", "index.tsx"), // define js files entry path
    mode: 'development',
    output: {
        path: path.resolve(__dirname, "dist"), // define out put path for bundled js file
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    module: {
        rules: [
            { // for typescript
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            { // for css
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            { // for image
                test: /\.(png|jp(e*)g|svg|gif)$/,
                use: ['file-loader'],
            },
            { // svg image
                test: /\.svg$/,
                use: ['@svgr/webpack'],
            },
            { // for javascript
                test: /\.?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
        
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "src", "index.html"), // inject generated js to src/index.html
        }),
    ],
}