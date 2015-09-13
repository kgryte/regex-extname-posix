'use strict';

var re = require( './../lib' );

var ext;

ext = re.exec( 'index.js' )[ 1 ];
console.log( ext );
// returns '.js'

ext = re.exec( '/foo/bar/home.html' )[ 1 ];
console.log( ext );
// returns '.html'

ext = re.exec( 'foo/file.pdf' )[ 1 ];
console.log( ext );
// returns '.pdf'

ext = re.exec( 'beep.' )[ 1 ];
console.log( ext );
// returns '.'

ext = re.exec( '' )[ 1 ];
console.log( ext );
// returns ''

ext = re.exec( '/foo/bar/file' )[ 1 ];
console.log( ext );
// returns ''

ext = re.exec( '/foo/bar/.gitignore' )[ 1 ];
console.log( ext );
// returns ''
