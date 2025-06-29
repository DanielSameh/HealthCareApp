module.exports = function(api) {
  api.cache(true);
  
  return {
    presets: ['module:@react-native/babel-preset'],
    plugins: [
      'react-native-reanimated/plugin',
      [
        '@tamagui/babel-plugin',
        {
          components: ['tamagui'],
          config: './tamagui.config.js',
        },
      ],
    ],
  };
};
