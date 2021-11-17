module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['import'],
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'import/prefer-default-export': 'off',
    'no-restricted-syntax': [
      'error',
      {
        selector: 'ExportDefaultDeclaration',
        message: 'Restricted default export, prefer named exports!',
      },
    ],

    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/explicit-function-return-type': 0,

    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/order.md#importorder-enforce-a-convention-in-module-import-order
    'import/order': [
      'error',
      {
        // Не дефолтное значение, но на момент комментария описанное в основном
        // примере в шапке правила, и субъективно выглядящее наиболее адекватно
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
          'object',
          'unknown',
        ],
        pathGroups: [
          { pattern: '@app/**', group: 'internal' },
          // React и MobX библиотеки ставить первыми из `external`,
          // и только после них остальные упорядочивать алфавитно
          // (`alphabetize` ниже)
          {
            pattern: '+(react|react-*)',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '+(mobx|mobx-*)',
            group: 'external',
            position: 'before',
          },
          // Стили в конец списка.
          // Работает для присвоенных стилей вида
          // `import styles from './style.module.scss'`,
          // не работает для неприсвоенных вида
          // `import './style.scss'`.
          // Для последних можно было бы использовать `warnOnUnassignedImports`,
          // но это имеет свои тонкости, порой требующие ручных перестановок
          // и `eslint-disable-next-line`, и решили не использовать,
          // а пока следить именно за стилями в ручном режиме, а потом
          // переходить на CSS modules с уже присвоенными `import styles from ...`,
          // которые будут нормально правилом позиционироваться
          // (https://github.com/uchiru/magic-math-2-front/pull/70#discussion_r718241491)
          { pattern: '**.scss', group: 'unknown', position: 'after' },
        ],
        // Позволять `pathGroups` с `pattern: '@app/**'` выше воспринимать
        // `@app/**` не как `'external'`, а как `'internal'` модули
        pathGroupsExcludedImportTypes: ['builtin'],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        'newlines-between': 'never',
      },
    ],

    'react/jsx-curly-brace-presence': ['error', 'never'],
    'react/jsx-props-no-spreading': 'off',
    'react/no-array-index-key': 'off',
    'react/prop-types': 0,
  },
};
