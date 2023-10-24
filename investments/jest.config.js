module.exports = {
    verbose: true,
    testEnvironment: 'node',
    testEnvironmentOptions: {
      NODE_ENV: 'test',
    },
    restoreMocks: true,
    rootDir: '.',
    collectCoverage: true,
    collectCoverageFrom: [
      '**/*.js',
      '!**/node_modules/**',
      '!**/test/**',
      '!src/config/**',
      '!src/index.js',
      '!jest.config.js',
    ],
    coveragePathIgnorePatterns: [
      '<rootDir>/node_modules/',
      '<rootDir>/src/config/',
      '<rootDir>/src/app.js',
      '<rootDir>/jest.config.js',
      '<rootDir>/test/',
      '<rootDir>/logs/',
    ],
    reporters: ['text', 'lcov', 'clover', 'html', 'default', 'jest-junit',
    ],
  };