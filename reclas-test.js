
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

assert.equal( ClassA instanceof ClassAClone, true, "should be true" );

assert.equal( ClassA( ) instanceof ClassAClone, true, "should be true" );

let NewDate = reclas( Date );

assert.equal( NewDate.name, Date.name, "should be equal" );

assert.equal( NewDate instanceof Date, true, "should be true" );

assert.equal( NewDate( ) instanceof Date, true, "should be true" );

let EventEmitter = require( "events" );
let Event = reclas( EventEmitter );

assert.equal( Event.name, EventEmitter.name, "should be equal" );

assert.equal( Event instanceof EventEmitter, true, "should be true" );

assert.equal( Event( ) instanceof EventEmitter, true, "should be true" );

let event = Event( ).on( "test", function test( value ){
	assert.equal( value, "hello", "should be equal" );
} );

event.emit( "test", "hello" );

console.log( "ok" );
