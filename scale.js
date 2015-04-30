var oboe = require('oboe');
var fs = require('fs');
var turf = require('turf');

var f = fs.createReadStream("PedVol.json");
oboe(f).on('node', '*', function(node){
	if (node != null && node.type === "Feature") {
		var year = node.properties.Model6_Vol;

		node.properties = { count: Math.floor(year / 365), sqrt: Math.sqrt(year / 365) };
		console.log(JSON.stringify(node));

		return oboe.drop;
	}
}).done(function() {

}).fail(function(err) {
	console.error(err);
});
