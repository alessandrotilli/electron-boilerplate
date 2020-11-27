const config = {
  appId: "com.example.electron-boilerplate",
  files: [
    "app/**/*",
    "node_modules/**/*",
    // rimuoviamo in binari non necessari si sqlite3-offline
    "!node_modules/sqlite3-offline/binaries",
    "node_modules/sqlite3-offline/binaries/index.js",
    "node_modules/sqlite3-offline/binaries/sqlite3-@(linux|darwin|win32)/electron-v8.2-@(linux|darwin|win)-@(x64|ia32)/*",
    "package.json"
  ],
  directories: {
    buildResources: 'resources',
    output:         'dist/${version}'
  },
  win: {
    target: [ {
      target: 'nsis',
      arch:   [ 'ia32', 'x64' ]
    } ]
  },
  mac: {
    target: [ 'dmg', 'zip' ]
  },
  linux: {
    artifactName: '${productName}-${version}-${arch}.${ext}',
    target:       [ {
      target: 'deb',
      arch:   [ 'ia32', 'x64' ]
    } ]
  },
  publish: null
};

module.exports = () => {
  return config;
};
