module.exports = {
  transform: { '^.+\\.(t|j)sx?$': ['@swc-node/jest', { dynamicImport: true }] },
  testEnvironment: 'node',
  testMatch: ['**/src/__tests__/**/*.test.ts'],
  // todo duplicated serializer from client package, should share
  snapshotSerializers: ['./src/__tests__/__helpers__/snapshotSerializer.ts'],
}
