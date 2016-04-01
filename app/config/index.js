module.exports = (function(global){
	global.fetch.config = {
		"events": require("./fetch.events.config")
	}
})(window)