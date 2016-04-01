module.exports = (function(global){
	global.fetch.services = {
		"feature": require("./fetch.feature.service")
	}
})(window)