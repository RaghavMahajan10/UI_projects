var concat = require('concat-files');
concat([
    './dist/starter-kitapp/main.js',
    './dist/starter-kitapp/runtime.js',
    './dist/starter-kitapp/polyfills.js',
    './dist/starter-kitapp/scripts.js',
    'node_modules/jquery/dist/jquery.js',
    'node_modules/ids-enterprise/dist/js/sohoxi.js',
], './dist/starter-kit-app.js', function(err) {
    if (err) throw err
});