[cNodejs社区 - React](http://mstore.online). [Development pattern Preview].

## Available Scripts

Initialize project:

### `npm install`

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

> .scss失效的问题

在`node_modules`中找到`react-scripts`，修改`config/webpack.config.dev.js`，配置`scss`文件的`loader`配置；
在`file loader`配置前添加
```js
{
	test: /\.scss$/,
	loaders: ['style-loader', 'css-loader', 'sass-loader'],
}
```

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

### Start master
