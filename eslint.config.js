import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginPrettier from 'eslint-plugin-prettier';

export default tseslint.config(
  { ignores: ['dist', 'node-modules', 'public'] },
  {
    extends: [js.configs.recommended, eslintConfigPrettier, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      prettier: eslintPluginPrettier
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],

      // ⚠️ Prettier rules
      'prettier/prettier': 'error',

      // ⚠️ ESLint rules
      'no-var': 'error', // ✅ Use let/const instead of var
      'no-return-await': 'error', // ✅ Avoid unnecessary return await
      'require-await': 'error' // ✅ Avoid async functions that don't use await
    }
  }
);
