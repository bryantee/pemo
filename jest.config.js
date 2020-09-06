module.exports = {
  verbose: true,
  moduleFileExtensions: ['ts', 'tsx', 'jsx', 'js'],
  preset: 'ts-jest',
  testEnvironment: 'node',
  testPathIgnorePatterns: ['/node_modules/', '<rootDir>/lib/'],
};
