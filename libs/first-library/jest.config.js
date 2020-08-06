module.exports = {
  name: 'first-library',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/first-library',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
