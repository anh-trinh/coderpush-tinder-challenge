module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy"
  },
  setupFilesAfterEnv: ['<rootDir>/jest-setup.js', '<rootDir>/setupTests.js'],
  moduleDirectories: ["node_modules", "src"],
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    "^.+\\.(js|jsx)$": "babel-jest"
  }
};
