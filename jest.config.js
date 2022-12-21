/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts(x)?', '!src/**/stories.ts(x)', '!src/@types/*'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  transform: {
       "^.+\\.tsx?$": "ts-jest",
       "^.+\\.svg$": "<rootDir>/src/utils/svgTransform.js" 
  },
};
