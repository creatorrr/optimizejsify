var
  assert = require('assert'),
  browserify = require('browserify'),
  fs = require('fs'),

  optimizejsify = require('../'),
  o = optimizejsify,

  input  = './test/sample.in.js',
  output = './test/sample.out.js',

  expected;

// Check correct
describe('Optimizejsify', function() {
  before( function ( done ) {

    browserify( output ).bundle( function ( err, src ) {
      expected = src.toString('utf8');
      done();
    });

  });

  describe('#transform()', function() {
    it('should be a function', function() {
      assert.equal(typeof o, 'function');
    });

    it('should return expected output', function( done ) {
      browserify( input )
        .transform( o )
        .bundle( function onBundle( err, src ) {
          src = src.toString('utf8');

          if ( err ) done( err );
          else done( !( src === expected ));
        });
    });
  });
});
