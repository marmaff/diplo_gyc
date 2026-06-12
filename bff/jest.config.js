module.exports = {
  testEnvironment: 'node',
  collectCoverageFrom: ['src/controllers/**/*.js', 'src/services/**/*.js'],
  coverageThreshold: {
    global: {
      branches: 81,
      functions: 81,
      lines: 81,
      statements: 81,
    },
  },
};
