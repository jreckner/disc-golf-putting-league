import js from "@eslint/js";
import ts from "typescript-eslint";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import importPlugin from "eslint-plugin-import";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import lodash from "eslint-plugin-lodash";
import prettier from "eslint-plugin-prettier";
import globals from "globals";

export default [
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    ignores: [
      '**/node_modules',
      '**/dist',
      '**/build',
      '**/vite.config.ts',
      'tailwind.config.mjs',
      'eslint.config.mjs',
    ],

    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parser: ts.parser,
      parserOptions: {
        project: "./tsconfig.json",
        ecmaFeatures: { jsx: true },
        tsconfigRootDir: import.meta.dirname
      },
    },

    plugins: {
      react,
      "react-hooks": reactHooks,
      import: importPlugin,
      "simple-import-sort": simpleImportSort,
      lodash,
      prettier,
    },

    settings: {
      react: { version: 'detect', },
      "import/resolver": { typescript: true, node: true, },
    },

    // Custom rules can be added here
    rules: {
      ...js.configs.recommended.rules,
      ...ts.configs.recommended['rules'],
      ...ts.configs.strictTypeChecked.rules,
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      ...importPlugin.configs.recommended['rules'],
      ...lodash.configs.recommended['rules'],

      // Prettier integration
      'prettier/prettier': 'error',

      'react/react-in-jsx-scope': 'off',

      // allow console.warn and console.error, but not console.log. personal pref
      'no-console': [
        'warn',
        {
          allow: ['error', 'warn', 'info'],
        },
      ],

      // force use of curly brackts on if statements
      curly: 'error',

      // force space after comments
      'spaced-comment': [
        'error',
        'always',
        {
          markers: ['/'],
        },
      ],

      'simple-import-sort/imports': [
        'error',
        {
          'groups': [
            // `react` first, `next` second, then packages starting with a character
            ["^react$", "^react-dom$", "^react-router$", "^react-query$"],
            // other react packages
            ["^react-[a-z]"],
            // react icon package
            ["^react-icons/.*$"],
            // Packages starting with `@`
            ["^@"],
            // Packages starting with `@/` (path aliases)
            ["^@/"],
            // Imports starting with `../` - parents
            ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
            // Imports starting with `./` - siblings
            ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
            // Style imports
            ["^.+\\.s?css$"],
          ]
        }
      ],
      'simple-import-sort/exports': 'error',
      'import/no-anonymous-default-export': 0,
      'import/no-unresolved': 'error',
      'max-len': [
        'error',
        100,
        2,
        {
          ignoreUrls: true,
          ignoreComments: true,
          ignoreRegExpLiterals: true,
          ignoreStrings: true,
          ignoreTemplateLiterals: true,
        },
      ],
      'func-names': ['error', 'as-needed'],
      'react/function-component-definition': [
        1,
        {
          namedComponents: 'function-declaration',
          unnamedComponents: 'arrow-function',
        },
      ],
      'react/no-unstable-nested-components': 2,
      'react/jsx-key': [
        'error',
        {checkFragmentShorthand: true, checkKeyMustBeforeSpread: true, warnOnDuplicates: true},
      ],
      'react/jsx-curly-brace-presence': ['error', {props: 'never'}],
      // NOTE: A lot of components are doing this and will need refactoring
      // 'react/jsx-props-no-spreading': 1,
      // NOTE: Temporarily set to 0 while strings get built in
      'i18next/no-literal-string': 0,
      'lodash/prefer-constant': 0,
      'lodash/prefer-lodash-method': 0,
      'lodash/import-scope': 0,
      'lodash/chaining': 0,
    },
  }
];
