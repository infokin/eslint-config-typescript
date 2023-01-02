# TypeScript ESLint Configuration

This package provides a common Typescript specific ESLint configuration.

## Installation

Install the latest version of this package with:

```bash
npm install @infokin/eslint-config-typescript --save-dev
```

To install a specific version use `@infokin/eslint-config-typescript@<version>` instead.

To install this package directly from the `main` branch on GitHub use:

```bash
npm install git://github.com/infokin/eslint-config-typescript --save-dev
```

## Usage

First, install and set up ESLint and TypeScript for your project,
see [here](https://eslint.org/docs/user-guide/getting-started#installation-and-usage) for further information on that.
Proceed with the installation of this package, then extend from the provided configuration in your project's ESLint
configuration file and provide a TypeScript configuration file.

A minimal example for your project's `.eslintrc.js` file could look like this:

```javascript
module.exports = {
  root: true,
  extends: [
    "@infokin/eslint-config-typescript"
  ],
  overrides: [
    {
      files: [
        "*.ts"
      ],
      parserOptions: {
        project: "tsconfig.json"
      }
    }
  ]
};
```

### Customization

After extending from the provided ESLint configuration, you can add and override your project specific ESLint rules,
preferably inside the `overrides` block.

## Development

The `package.json` file provides two scripts:

`lint` - this is used to check the code style for project files without linting tests

`test` - runs linting only for tests to check whether the configuration works as intended

## Bugs & Issues

If you're experiencing any issues or encountering any bugs, we would really appreciate it if you could report them on
the [corresponding GitHub page](https://github.com/infokin/eslint-config-typescript/issues), so we can take a look and
try to resolve them. Thank you for your help in making this project better!

## Author

Johannes Hillert ([GitHub](https://github.com/clovergaze))

## License

Copyright (c) 2022 Johannes Hillert. Licensed under the MIT license, see the included LICENSE file for details.
