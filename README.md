# @ackee/browserslist-config

A default browsers list for our projects in Akcee.

More readble version for our PMs and our clients can found [here](https://docs.google.com/document/d/1_SzDspoB9c1RUIVnbx880qxsEfQ5VNKbE33atqXb7Es/edit?usp=sharing).

## Usage

```sh
yarn add @ackee/browserslist-config -D
```

Add this to your `package.json`:

```json
    "browserslist": [
        "extends @ackee/browserslist-config"
    ]
```

---

# Browserslist in [create-react-app](https://github.com/AckeeCZ/create-react-app)

## Usage

1. Make sure to have installed at least `@ackee/react-scripts@1.1.1` version:

   ```sh
   yarn add @ackee/react-scripts@1.1.1 -D
   ```

2. Add to `package.json`:

   ```sh
   "browserslist": [
       "extends @ackee/browserslist-config"
   ]
   ```

3. Import `core-js` in root of your project for correct polyfilling:
   ```sh
   import 'core-js';
   ```

## Recommendations

1. Since node modules often have the largest impact on the final bundle size, it's crucial to choose those packages carefully:

   > **To leverage the power of browserslist on your project, it's important to choose packages transpiled to modern (non-ES5 JavaScript) as much as possible.**

2. Lint the browser compatibility of your code by adding [`eslint-plugin-compat`](https://github.com/amilajack/eslint-plugin-compat)

## Structure

- CRA has its own babel preset called [`babel-preset-react-app`](https://github.com/AckeeCZ/create-react-app/tree/master/packages/babel-preset-react-app).
- The preset is then used in Webpack configuration in [`@ackee/react-scripts`](https://github.com/AckeeCZ/create-react-app/blob/master/packages/react-scripts/config/webpack.config.js).
- `babel-preset-react-app` uses [`@babel/preset-env`](https://babeljs.io/docs/en/babel-preset-env) preset that transpiles code based on provided browserslist.

## Debugging

`@babel/preset-env` has available [`debug`](https://babeljs.io/docs/en/babel-preset-env#debug) option. You can set it in:

- [`babel-preset-react-app/create.js`](https://github.com/AckeeCZ/create-react-app/blob/master/packages/babel-preset-react-app/create.js#L81) for your source code.
- [`babel-preset-react-app/dependencies.js`](https://github.com/AckeeCZ/create-react-app/blob/master/packages/babel-preset-react-app/dependencies.js#L86) for node modules.

An example output could look like this for browserslist only with `Chrome 81`:

```sh
@babel/preset-env: `DEBUG` option

Using targets:
{
    "chrome": "81"
}

Using modules transform: false

Using plugins:
syntax-nullish-coalescing-operator { "chrome":"81" }
syntax-optional-chaining { "chrome":"81" }
syntax-json-strings { "chrome":"81" }
syntax-optional-catch-binding { "chrome":"81" }
syntax-async-generators { "chrome":"81" }
syntax-object-rest-spread { "chrome":"81" }
syntax-dynamic-import { "chrome":"81" }
syntax-top-level-await { "chrome":"81" }

Using polyfills with `entry` option:
```
