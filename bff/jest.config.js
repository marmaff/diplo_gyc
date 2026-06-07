module.exports = {
  testEnvironment: 'node',
  collectCoverageFrom: ['src/controllers/**/*.js', 'src/services/**/*.js'],
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 70,
      lines: 70,
      statements: 70,
    },
  },
};
