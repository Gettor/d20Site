/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function(global) {
  // paths serve as alias
  var paths = {
            'npm:': 'lib/'
  };
  // map tells the System loader where to look for things
  var map = {
    'app':                        'app/', // 'dist',
    '@angular':                   'npm:@angular',
    'angular2-in-memory-web-api': 'npm:angular2-in-memory-web-api',
    'rxjs':                       'npm:rxjs',
    'ng2-bs3-modal':              'npm:ng2-bs3-modal',
    'ng2-completer':              'npm:ng2-completer/bundles',
    'ng2-pagination':             'npm:ng2-pagination',
    'angular2-jwt':               'npm:angular2-jwt/angular2-jwt.js',
    'js-base64':                  'npm:js-base64/base64.js',
    'buffer':                     '@empty',
    'ng2-tabs':                   'npm:ng2-tabs',
  };
  // packages tells the System loader how to load when no filename and/or no extension
  var packages = {
    'app':                        { main: 'main.js',  defaultExtension: 'js' },
    'rxjs':                       { defaultExtension: 'js' },
    'angular2-in-memory-web-api': { main: 'index.js', defaultExtension: 'js' },
    'ng2-completer':              { main: 'ng2-completer.js', format: 'cjs' },
    'ng2-pagination':             { main: 'index.js', defaultExtension: 'js' },
    'ng2-tabs':                   { main: 'index.js', defaultExtension: 'js' },
  };
  var ngPackageNames = [
    'common',
    'compiler',
    'core',
    'forms',
    'http',
    'platform-browser',
    'platform-browser-dynamic',
    'router',
    'router-deprecated',
    'upgrade',
  ];
  // Individual files (~300 requests):
  function packIndex(pkgName) {
    packages['npm:@angular/'+pkgName] = { main: 'index.js', defaultExtension: 'js' };
  }
  // Bundled (~40 requests):
  function packUmd(pkgName) {
    packages['npm:@angular/'+pkgName] = { main: '/bundles/' + pkgName + '.umd.js', defaultExtension: 'js' };
  }
  // Most environments should use UMD; some (Karma) need the individual index files
  var setPackageConfig = System.packageWithIndex ? packIndex : packUmd;
  // Add package entries for angular packages
  ngPackageNames.forEach(setPackageConfig);
  var config = {
    paths : paths,
    defaultJSExtensions: true,
    map: map,
    packages: packages
  };
  System.config(config);
})(this);
