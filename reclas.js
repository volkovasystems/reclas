"use strict";

/*;
	@module-license:
		The MIT License (MIT)
		@mit-license

		Copyright (@c) 2017 Richeve Siodina Bebedor
		@email: richeve.bebedor@gmail.com

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in all
		copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
		SOFTWARE.
	@end-module-license

	@module-configuration:
		{
			"package": "reclas",
			"path": "reclas/reclas.js",
			"file": "reclas.js",
			"module": "reclas",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"repository": "https://github.com/volkovasystems/reclas.git",
			"test": "reclas-test.js",
			"global": true
		}
	@end-module-configuration

	@module-documentation:
		Clone the blueprint.
	@end-module-documentation

	@include:
		{
			"diatom": "diatom",
			"falzy": "falzy",
			"harden": "harden",
			"kloak": "kloak",
			"metod": "metod",
			"protype": "protype",
			"transpher": "transpher"
		}
	@end-include
*/

const diatom = require( "diatom" )
const falzy = require( "falzy" );
const harden = require( "harden" );
const kloak = require( "kloak" );
const metod = require( "metod" );
const posp = require( "posp" );
const protype = require( "protype" );
const transpher = require( "transpher" );

const CLONED_CLASS = Symbol( "cloned-class" );
const BLUEPRINT = Symbol( "blueprint" );

const reclas = function reclas( blueprint ){
	/*;
		@meta-configuration:
			{
				"blueprint:required": "function"
			}
		@end-meta-configuration
	*/

	if( falzy( blueprint ) || !protype( blueprint, FUNCTION ) ){
		throw new Error( "invalid blueprint" );
	};

	if( blueprint[ CLONED_CLASS ] === CLONED_CLASS ){
		return reclas( blueprint[ BLUEPRINT ] );
	}

	let clone = diatom( blueprint.name );

	transpher( blueprint, clone, true );

	/*;
		@note:
			Note that, cloned classes, must preserved their default property and values.
			We will only transfer the name, the prototype methods
				and any property unique to this blueprint.

			We will not transfer the constructor or rename the constructor as this will
				have effects on the cloned class.
		@end-note
	*/
	posp( metod( blueprint.prototype ), "constructor" )
		.forEach( ( method ) => ( clone.prototype[ method.name ] = method ) );

	kloak( blueprint, clone, CLONED_CLASS );

	harden( BLUEPRINT, blueprint, clone );

	return clone;
};

module.exports = reclas;
