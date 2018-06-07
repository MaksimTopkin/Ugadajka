
gameCore.nsdef("gameCore.init", {
	main: function() 
	 		{
				var startGame = function()
									{
										window.location.href = "#game";
										gameCore.utils.createGameMainBlock(); // function creates start page block		
							        	gameCore.gameLogic.gameRound(0);
									}

				gameCore.serverRequest.doRequest({url: gameCore.dom.serverAPI.url.get.readData}, 
					function(data)
					{
						var length = data.length;

						for (var i = 0; i < length; i++) 
							{
							gameCore.dom.gameRoundsDefinition.push([data[i].question, data[i].answer.split(" ")]);
							}
					}),

				gameCore.serverRequest.doRequest({url: gameCore.dom.serverAPI.url.get.labelTexts}, 
					function(data)
						{
							gameCore.message.bundle = data;
							var anchor = window.location.hash;
							
							if (anchor == "#rules" || anchor == "")
								{
								 	gameCore.utils.createTitle(startGame);
								} 
							else if (anchor == "#game") 
								{
									startGame();
								} 
							else if (anchor == "#answers") 
								{
								gameCore.serverRequest.doRequest({url: gameCore.dom.serverAPI.url.get.readUsr},function(data){gameCore.utils.userDataFromDB(data)})
								}
						})	
			},

	 init: function() 
	 		{
				var loaded = function(jsLoader) 
								{
									if (gameCore.loader.jsLoader.filesCount() == 5) 
									{
									gameCore.init.main();
									}
								}

				// 5 dependencies should be loaded
				gameCore.loader.require('game/config.js', loaded);
				gameCore.loader.require('game/message.js', loaded);
				gameCore.loader.require('game/utils.js', loaded);
				gameCore.loader.require('game/view.js', loaded);
				gameCore.loader.require('game/logic.js', loaded);	
			}
});
