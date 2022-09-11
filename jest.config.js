const config = {
  verbose: true,
  preset: 'react-native',
  transform: {
    '^.+\\.[t|j]sx?$': 'babel-jest',
  },
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|react-native-vector-icons|@react-native|react-native-chart-kit)/)',
  ],
  setupFiles: ['./__tests__/setup.js'],
  testMatch: ['**/*.test.{js,jsx}'],
};

module.exports = config;
