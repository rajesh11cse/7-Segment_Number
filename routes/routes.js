var marcopolo = require('../marcopolo.js');
var user_story = require('../user_story.js');

var appRouter = function (app) {
	app.get("/", function (req, res) {
		res.send("Hello World");
	});
	// macro polo API
	app.get("/api/marco_polo", marcopolo.marcopolo);

	// user story API
	app.get("/api/user_story", user_story.user_story);
}
module.exports = appRouter;

// ----Or------
// module.exports = function(app) {
//  	app.get("/", function(req, res) {
// 	    res.send("Hello World");
// 	});
// }