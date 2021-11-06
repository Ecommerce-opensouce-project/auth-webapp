# Settingup React with + webpack + babble + typescript
* npm init
* mkdir src
* cd src
  * touch index.html
    ```
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>React App</title>
        </head>
        <body>
            <noscript>You need to enable JavaScript to run this app.</noscript>
            <div id="root"></div>
        </body>
        </html>
    ```
  * touch index.tsx
    ```
        import * as React from "react";
        import * as ReactDOM from "react-dom";
        ReactDOM.render(
            <div>
                <h1>Hello, Welcome to React and TypeScript</h1>
            </div>,
            document.getElementById("root")
        );
    ```
* npm install react react-dom --save-dev
* npm install webpack webpack-cli webpack-dev-server --save-dev
* npm install html-webpack-plugin --save-dev
* npm install @babel/core babel-loader --save-dev
* npm install --save-dev typescript ts-loader --save-dev
* npm install @babel/preset-env @babel/preset-react --save-dev
  *  // @babel/preset-env for transpiling ES2015+ syntax and we have @babel/preset-react for transpiling react code
* touch tsconfig.json
  ```
  {
    "compilerOptions": {
        "target": "es5", // Specify ECMAScript target version
        "lib": [
        "dom",
        "dom.iterable",
        "esnext"
        ], // List of library files to be included in the compilation
        "allowJs": true, // Allow JavaScript files to be compiled
        "skipLibCheck": true, // Skip type checking of all declaration files
        "esModuleInterop": true, // Disables namespace imports (import * as fs from "fs") and enables CJS/AMD/UMD style imports (import fs from "fs")
        "allowSyntheticDefaultImports": true, // Allow default imports from modules with no default export
        "strict": true, // Enable all strict type checking options
        "forceConsistentCasingInFileNames": true, // Disallow inconsistently-cased references to the same file.
        "module": "esnext", // Specify module code generation
        "moduleResolution": "node", // Resolve modules using Node.js style
        "isolatedModules": true, // Unconditionally emit imports for unresolved files
        "resolveJsonModule": true, // Include modules imported with .json extension
        "noEmit": true, // Do not emit output (meaning do not compile code, only perform type checking)
        "jsx": "react", // Support JSX in .tsx files
        "sourceMap": true, // Generate corrresponding .map file
        "declaration": true, // Generate corresponding .d.ts file
        "noUnusedLocals": true, // Report errors on unused locals
        "noUnusedParameters": true, // Report errors on unused parameters
        "incremental": true, // Enable incremental compilation by reading/writing information from prior compilations to a file on disk
        "noFallthroughCasesInSwitch": true // Report errors for fallthrough cases in switch statement
    },
    "include": [
        "src/**/*" // *** The files TypeScript should type check ***
    ],
    "exclude": ["node_modules", "build"] // *** The files to not type check ***
    }
  ```
* touch webpack.config.js
``` add to webpack config
    const path = require('path'); // helps to concatinate paths 
    const HtmlWebpackPlugin = require('html-webpack-plugin'); add plugins for html

    module.exports = {
        entry: path.join(__dirname, "src", "index.tsx"), // define js files entry path
        output: {
            path:path.resolve(__dirname, "dist"), // define out put path for bundled js file
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
```
* in package.json
```
    "scripts": {
    "dev": "webpack serve",
    "build": "webpack",
    ...
    }
```
* npm run dev