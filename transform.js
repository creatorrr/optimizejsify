var
  optimize = require('optimize-js'),
  through = require('through2');

module.exports = function optimizejsify(file) {
  return through( function ( buf, enc, next ) {
    var
      src = buf.toString('utf8'),
      out = optimize( src );

    // Push chunk
    next( null, out );
  });
};
