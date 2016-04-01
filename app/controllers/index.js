module.exports = (function(global){
	global.fetch.controllers = {
		"app": require("./fetch.app.controller")
	}
})(window)