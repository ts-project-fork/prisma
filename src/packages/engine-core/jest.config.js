module.exports = {
  preset: '@swc-node/jest',
  testEnvironment: 'node',
  collectCoverage: process.env.CI ? true : false,
  coverageReporters: ['clover'],
  coverageDirectory: 'src/__tests__/coverage',
  collectCoverageFrom: ['src/**/*.ts', '!**/__tests__/**/*'],
  testMatch: ['**/src/__tests__/**/*.test.ts'],
}
