module.exports = {
  name: 'first-app',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/first-app',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
