module.exports = {
  preset: 'ts-jest',
  // preset: 'ts-jest/presets/js-with-th', //для исп без TS а только js.
  testEnvironment: 'node',
  setupFilesAfterEnv:["<rootDir>/jest.setup.js"],//указание пути где лежит настройка. В <rootDir> парсер вставит рут директорию нашего проекта.
  moduleNameMapper: {//styles.container -> 'container'
    "\\.(css)": "identity-obj-proxy"
  },
  snapshotSerializers: ["enzyme-to-json/serializer"]
};