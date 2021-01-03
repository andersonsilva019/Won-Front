module.exports = {
  // Simula a DOM
  testEnvironment: 'jsdom',
  // Ignorar essas pastas
  testPathIgnorePatterns: ['/node_modules', '/.next'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts(x)?', '!src/**/stories.tsx'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts']

}
