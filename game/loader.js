//===================loader for .js files=====================

gameCore.nsdef("gameCore.loader", {
	jsLoader: new function() {
		var loadedFiles = [];
	
		this.load = function(url, onLoadCbk) {
			if (null == loadedFiles[url]) {
				var script = document.createElement('script');
				script.src = url;
				script.onload = function() {
					loadedFiles.push(url);
					
					if (null != onLoadCbk) {
						onLoadCbk(gameCore.loader.jsLoader);
					} 
				};
				document.getElementsByTagName('head')[0].appendChild(script);
			}	
		};
	
		this.isLoaded = function(url) {
			return !!loadedFiles[url];
		};
	
		this.filesCount = function() {
			return loadedFiles.length;
		}
	},
	
	require: function (url, onLoadCbk) {
		gameCore.loader.jsLoader.load(url, onLoadCbk);
	}
	
});