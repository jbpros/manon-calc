module.exports={
  'env': {
    'browser': true,
    'node': true
  },
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'tsconfigRootDir': __dirname,
    'project': ['./tsconfig.json'],
  },
  'plugins': [
    'react',
    'node',
    '@typescript-eslint'
  ],
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    // 'prettier/@typescript-eslint'

    'plugin:prettier/recommended'
  ],
  'rules': {
    'node/no-extraneous-import': 'error',
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/member-delimiter-style': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'react/prop-types': 'off',
    '@typescript-eslint/no-unused-vars': ['error', {'argsIgnorePattern': '^_'}],
    '@typescript-eslint/no-empty-function': 'off'
  },
  'settings': {
    'react': {
      'pragma': 'React',
      'version': 'detect'
    }
  }
}
