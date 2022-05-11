## Pre-/post-scripts
- [Npm scripts and life-cycles](https://docs.npmjs.com/cli/v8/using-npm/scripts)

```json
  "scripts": {
    "prebuild": "rimraf dist",
    "build": "tsc",
    "postbuild": "npm run test",
    "test": "jest"
  }
```

If you now run `npm run build` the following things will automatically be triggered:

- `prebuild` will be called executing the rimraf tool to delete the dist folder
- `build` is executed running the TypeScript compiler
- `postbuild` will be called running npm run test
- `test` is executed running the jest test runner

This works because npm will automatically detect if a script has other scripts named the same way but prefixed with pre or post and will execute those in the respective order. It's a great way to chain commands without convoluting your scripts. Good use cases for this would be:

The same behavior also applies for built-in commands. For example `preinstall`, `prepack`. An odd one here is version because it provides `preversion`, `version` and `postseason`. Where the difference between version and `postversion` is that `postversion` will be called after npm has committed the changes performed in `preversion` and `version`.



## Environment variables
- [Working with Env Variables in NodeJS](https://www.twilio.com/blog/working-with-environment-variables-in-node-js-html)

When you run a command or script through npm run..., your environment variables will automatically be augmented with a set of variables from npm.

All environment variables are prefixed with `npm_` and can be grouped into two types:

- anything starting with `npm_config_` is general npm configuration from your global npm config or from a project specific `.npmrc` file.
- anything starting with `npm_package_` is specific to your project

If you are curious of all the values that are passed to scripts in your project, add the following entry to your scripts:

```json
{
  "scripts": {
    "check-env": "node -e 'console.log(process.env)' | grep npm"
  }
}
```

Then run npm run check-env in your command-line and you should see a list of all the environment variables that npm has set for you. Some that stood out for me:

You can find every single entry of your `package.json` as an environment variable. The accessing is done similar to accessing a property in JSON except that it's all using _ as separators. For example npm_package_dependencies_twilio will give you the version of twilio that is installed or npm_package_author_email would give you the email field of the author property. In order to access values inside an array you use the index value prefixed with an _, like npm_package_keywords_0 to retrieve the first keyword.

