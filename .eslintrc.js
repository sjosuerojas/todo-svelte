module.exports = {
    extends: [
      'eslint:recommended'
    ],
    parserOptions: {
        ecmaVersion: 2019,
        sourceType: 'module'
    },
    env: {
      es6: true,
      browser: true
    },
    overrides: [
      {
        files: ['*.svelte'],
        processor: 'svelte3/svelte3'
      }
    ],
    plugins: ['svelte3'],
    ignorePatterns: ['node_modules']
  }