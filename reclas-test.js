
const assert = require( "assert" );
const diatom = require( "diatom" );
const reclas = require( "./reclas.js" );
const util = require( "util" );

let ClassA = diatom( "ClassA" );
ClassA.prototype.hello = function hello( ){
	return "hello world";
};

let ClassAClone = reclas( ClassA );

ClassAClone( ).hello( );

assert.equal( ClassAClone.name, ClassA.name, "should be equal name" )

assert.equal( ClassAClone( ).hello( ), ClassA( ).hello( ), "should be equal return value" );

assert.equal( ClassAClone( ) instanceof ClassA, true, "should be true" );

assert.equal( ClassAClone instanceof ClassA, true, "should be true" );

assert.equal( ClassA instanceof ClassAClone, false, "should be false" );

assert.equal( ClassA( ) instanceof ClassAClone, false, "should be false" );

console.log( "ok" );
