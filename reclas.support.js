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
              			"contributors": [
              				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
              				"Vinse Vinalon <vinsevinalon@gmail.com>"
              			],
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
              			"coprop": "coprop",
              			"cntsyz": "cntsyz",
              			"diatom": "diatom",
              			"divoid": "divoid",
              			"falzy": "falzy",
              			"impel": "impel",
              			"inhere": "inhere",
              			"katalyz": "katalyz",
              			"kloak": "kloak",
              			"kurse": "kurse",
              			"meton": "meton",
              			"mrkd": "mrkd",
              			"ntrprt": "ntrprt",
              			"protype": "protype"
              		}
              	@end-include
              */var _symbol = require("babel-runtime/core-js/symbol");var _symbol2 = _interopRequireDefault(_symbol);var _for = require("babel-runtime/core-js/symbol/for");var _for2 = _interopRequireDefault(_for);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var coprop = require("coprop");
var cntsyz = require("cntsyz");
var diatom = require("diatom");
var divoid = require("divoid");
var falzy = require("falzy");
var impel = require("impel");
var inhere = require("inhere");
var katalyz = require("katalyz");
var kloak = require("kloak");
var kurse = require("kurse");
var meton = require("meton");
var mrkd = require("mrkd");
var ntrprt = require("ntrprt");
var protype = require("protype");

var CLASS = (0, _for2.default)("class");
var CLONED_CLASS = (0, _symbol2.default)("cloned-class");
var BLUEPRINT = (0, _symbol2.default)("blueprint");

var reclas = function reclas(blueprint) {
	/*;
                                         	@meta-configuration:
                                         		{
                                         			"blueprint:required": "function"
                                         		}
                                         	@end-meta-configuration
                                         */

	if (falzy(blueprint) || !protype(blueprint, FUNCTION)) {
		throw new Error("invalid blueprint");
	};

	/*;
    	@note:
    		Extract the current blueprint class structure.
    			Because the old blueprint may not have the new properties of the new blueprint.
    	@end-note
    */

	var residue = katalyz(blueprint);
	if (mrkd(CLONED_CLASS, blueprint, true)) {
		var origin = ntrprt(BLUEPRINT, blueprint);

		residue = katalyz(blueprint, origin);

		blueprint = origin;
	}

	divoid(blueprint);

	kurse(blueprint);

	inhere(blueprint);

	var clone = diatom(blueprint.name);

	if (!mrkd(CLASS, blueprint, true) && !mrkd("diatomic", blueprint)) {
		coprop("constructor", blueprint.prototype, clone.prototype);
	}

	kloak(blueprint, clone, CLONED_CLASS);

	/*;
                                        	@note:
                                        		Manually, transfer method names excluding anything related to constructor.
                                        	@end-note
                                        */
	meton(blueprint.prototype).forEach(function (method) {
		clone.prototype[method] = blueprint.prototype[method];
	});

	/*;
     	@note:
     		Reconstruct the clone using the residue.
     			This will make the cloned class looks entirely similar to the blueprint.
     	@end-note
     */

	cntsyz(clone, residue);

	impel(BLUEPRINT, blueprint, clone);

	return clone;
};

module.exports = reclas;

//# sourceMappingURL=reclas.support.js.map