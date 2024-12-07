module.exports = {
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  plugins: ['react-refresh'],
  rules: {
    ...js.configs.recommended.rules,
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
    ...reactHooks.configs.recommended.rules,
    'react/jsx-no-target-blank': 'off',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true }
    ],
    'react/prop-types': 'off', // add this line
    'react/no-unescaped-entities': 'off' // add this line
  }
}
