
const diatom = require( "diatom" );
const reclas = require( "./reclas.js" );
const util = require( "util" );

let ClassA = diatom( "ClassA" );
ClassA.prototype.hello = function hello( ){
	console.log( "hello world" );
};

let ClassAClone = reclas( ClassA );

ClassAClone( ).hello( );

console.log( util.inspect( ClassAClone, { "showHidden": true } ), ClassAClone.name );
