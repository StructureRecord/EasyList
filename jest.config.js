// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {

  // Automatically clear mock calls and instances between every test
  clearMocks: true,

  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: true,

  // An array of glob patterns indicating a set of files for which coverage information should be collected
  collectCoverageFrom: ['src/**/*.ts'], 

  // The directory where Jest should output its coverage files
  coverageDirectory: "coverage",

  // Indicates which provider should be used to instrument code for coverage
  coverageProvider: "v8",

  // An object that configures minimum threshold enforcement for coverage results
  // coverageThreshold: undefined,

  // A set of global variables that need to be available in all test environments
  // globals: {},

  // Activates notifications for test results
  notify: true,

  // An enum that specifies notification mode. Requires { notify: true }
  notifyMode: "failure-change",

  // Automatically reset mock state between every test
  // resetMocks: false,

  // The paths to modules that run some code to configure or set up the testing environment before each test
  // setupFiles: [],

  // The test environment that will be used for testing
  testEnvironment: "node",

  // Options that will be passed to the testEnvironment
  // testEnvironmentOptions: {},

  // Adds a location field to test results
  // testLocationInResults: false,

  // The glob patterns Jest uses to detect test files
  // testMatch: [
  //   "**/__tests__/**/*.[jt]s?(x)",
  //   "**/?(*.)+(spec|test).[tj]s?(x)"
  // ],

  // An array of regexp pattern strings that are matched against all test paths, matched tests are skipped
  // testPathIgnorePatterns: [
  //   "/node_modules/"
  // ],

  // The regexp pattern or array of patterns that Jest uses to detect test files
  testRegex: '(/tests/.*|(\\.|/))\\Test.ts$',

  // Setting this value to "fake" allows the use of fake timers for functions such as "setTimeout"
  timers: "fake",

  // A map from regular expressions to paths to transformers
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },

  // An array of regexp pattern strings that are matched against all source file paths, matched files will skip transformation
  transformIgnorePatterns: [
    "/node_modules/"
  ],
};
