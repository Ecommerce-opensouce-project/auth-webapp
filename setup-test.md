## add  Puppeteer + jest + enzyme to react project
* npm install enzyme  @wojtekmaj/enzyme-adapter-react-17 enzyme-to-json @types/enzyme --save-dev // install enzyme 
* npm install jest babel-jest @babel/preset-env @babel/preset-react react-test-renderer @types/jest --save-dev  //install jest
* package.json
    ```
    "scripts": {
        "test": "jest"
    }
    ```
* touch babel.config.js
  ```
    module.exports = {
        presets: ['@babel/preset-env', '@babel/preset-react'],
    };
  ```
* touch jest.setup.js // to make jest and enzyme work together 
  ```
    import Enzyme from 'enzyme';
    import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
    Enzyme.configure({ adapter: new Adapter() });
  ```
  * other option is in package.json add 
    ```
    "jest": {
        "setupFilesAfterEnv": [
        "<rootDir>/setupTests.js"
        ]
    }
    ```
* touch jest.config.json
  ```
    {
        "testRegex": "((\\.|/*.)(spec))\\.tsx?$",
        "setupFilesAfterEnv": [
            "<rootDir>/jest.setup.js"
        ]
    }
  ```
