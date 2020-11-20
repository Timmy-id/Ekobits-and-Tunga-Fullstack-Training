## Webpack Exercises
### Part I

1. `webpack` is used to compile javascript modules. `babel` is a javascript transcompiler which is used for compiling latest javascript codes into older versions
 so that they can run on older engines.
2. `loader` is used for file pre-processing while importing. Types of loaders are:
  - json5-loader
  - html-loader
  - url-loader
3. The differnce between `path` and `publicPath` is where we want our bundle.js file to be emmitted to.
4. A babel `preset` contains the config details of the babel transpiler.
5. `test:/\.jsx?$/` is a regular expression for checking for all files with the .js extension.
6. `webpack-dev-server` is a CLI tool for starting a static server.
7. Tree shaking is a term used for describing the removal of code that does not affect the program result and they reduce the bundle size by removing the unused code
  while code splitting is used for splitting code into various bundles which is loaded when needed and this can help help in reducing bundle size as only the code needed will 
  be loaded.
8. When exporting, the `default` keyword is used to export a single object.
9. Object desctructuring is used to extract data from an object and assign them to their own variables.
10. To enable `webpack.config.js` for development, you save the modules using `--save-dev` flag.
