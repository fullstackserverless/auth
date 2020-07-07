module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb',
    'prettier',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript'
  ],
  plugins: ['react', 'react-native', 'jsx-a11y', 'import', 'react-hooks'],
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true // Allows for the parsing of JSX
    }
  },
  env: {
    'react-native/react-native': true
  },
  rules: {
    'no-param-reassign': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/jsx-filename-extension': ['off'],
    'react/jsx-one-expression-per-line': 0,
    'linebreak-style': ['off'],
    'implicit-arrow-linebreak': 0,
    'no-undef': ['error'],
    'react/sort-comp': ['off'],
    'react/prefer-stateless-function': ['off'],
    'react/destructuring-assignment': 1,
    'function-paren-newline': 0,
    semi: ['error', 'never'],
    '@typescript-eslint/semi': ['off'],
    'spaced-comment': 0,
    'comma-dangle': ['error', 'never'],
    'react/prop-types': 0,
    'no-extra-boolean-cast': 0,
    'no-extra-semi': 'off',
    'quote-props': 0,
    'object-curly-spacing': ['error', 'always'],
    camelcase: 0,
    'no-nested-ternary': 0,
    'react/jsx-wrap-multilines': 0,
    'object-curly-newline': 0,
    'operator-linebreak': 0,
    'no-unused-expressions': 0,
    'global-require': 0,
    'max-len': 0,
    'import/no-cycle': 0,
    'no-underscore-dangle': 0,
    'no-return-assign': 0,
    'import/prefer-default-export': 0,
    'jsx-quotes': ['error', 'prefer-double'],
    'no-console': 'error',
    'arrow-parens': 0,
    'eol-last': 0,
    'react-native/no-unused-styles': 0,
    'react-native/split-platform-components': 0,
    'react-native/no-inline-styles': 0,
    'react-native/no-color-literals': 0,
    'react-native/no-raw-text': 0,
    'consistent-return': 0,
    'import/extensions': [
      'error',
      'always',
      {
        ts: 'never',
        tsx: 'never',
        js: 'never',
        jsx: 'never'
      }
    ],
    'react/display-name': 'off'
  },
  settings: {
    react: {
      version: 'detect' // Tells eslint-plugin-react to automatically detect the version of React to use
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        moduleDirectory: ['node_modules', 'src/']
      }
    }
  }
}
