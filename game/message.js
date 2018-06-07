
gameCore.nsdef("gameCore.message", {
	bundle: {},

	messageBundle: new function ()
	{
		this.getMessage = function (key) 
		{
	  		return null != key ? gameCore.message.bundle[key] : '';
		};	
	},


	getMessage: function (key) 
	{
		return gameCore.message.messageBundle.getMessage(key);
	}
});