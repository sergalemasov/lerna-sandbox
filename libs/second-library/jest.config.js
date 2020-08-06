module.exports = {
  name: 'second-library',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/second-library',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
