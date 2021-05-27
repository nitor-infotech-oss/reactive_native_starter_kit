// eslint-disable-next-line no-undef
module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.js',
          '.android.js',
          '.jsx',
          '.js',
          '.ts',
          '.tsx',
          '.json',
        ],
        alias: {
          '@screens': './src/screens',
          '@utils': './src/Utils',
          '@component': './src/Component',
          '@static': './src/static',
          '@redux': './src/redux',
        },
      },
    ],
  ],
  env: {
    production: {
      plugins: ['react-native-paper/babel'],
    },
  },
};
