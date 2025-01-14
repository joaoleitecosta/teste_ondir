module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: '.',
        alias: {
          '@components': './src/components',
          '@screens': './src/screens',
          '@assets': './src/assets',
          '@hooks': './src/hooks',
          '@theme': './src/theme',
          '@domain': './src/domain',
          '@utils': './src/utils',
          '@services': './src/services',
          '@routes': './src/routes',
          '@infra': './src/infra',
          '@types': ['./src/types'],
        },
      },
    ],
    [
      'react-native-reanimated/plugin',
      {
        relativeSourceLocation: true,
      },
    ],
  ],
};
