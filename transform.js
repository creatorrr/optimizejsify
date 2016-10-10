var
  optimize = require('optimize-js'),
  through = require('through2');

module.exports = function optimizejsify( file ) {
  var src = "";

  return through(
    function transform ( buf, enc, next ) {
      src += buf.toString('utf8');

      // Continue, push at the end
      next();
    },
    function flush ( done ) {

      // Optimize and flush
      this.push( optimize( src ));
      done();
    }
  );
};
