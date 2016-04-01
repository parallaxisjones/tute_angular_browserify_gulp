require('leaflet')
module.exports = (function(fetch){
	var collection = L.FeatureGroup.extend({
		initialize : function(){},
		addLayer: function(layer){
			collection.prototype.addLayer.call(this, layer);
		},
		removeLayer : function(){},
		clearLayers: function(){}



	})
})(window.fetch)