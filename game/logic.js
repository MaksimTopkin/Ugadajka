//========================= game logic ==========================================

gameCore.nsdef("gameCore.gameLogic", {
	 gameRound: function (nextRound) {

		if (null != nextRound && nextRound >= 0 && nextRound < gameCore.dom.gameRoundsDefinition.length) {

			var gameFlow = gameCore.utils.getGameFlow();
			var gameRoundBlock = gameCore.utils.createGameBlock(nextRound,gameFlow);

	 		gameRoundBlock.questionBlock.setText(gameCore.dom.gameRoundsDefinition[nextRound][0]);
	 		gameCore.view.getCheatBlock().setCheatText(gameCore.dom.gameRoundsDefinition[nextRound][1]);
			gameRoundBlock.answerFld.setValue('');
			gameRoundBlock.answerBtn.setValue(nextRound);

			gameRoundBlock.answerBtn.setOnClickEvent(function () {
				var userAnswer = (gameRoundBlock.answerFld.getValue()).trim().toLowerCase();
				var answers = gameCore.dom.gameRoundsDefinition[this.value][1];
				// console.log(answers);
				var bWin = false;

				if (null != userAnswer && userAnswer.length > 0) {
					
					gameRoundBlock.answerFld.setEnabled(false);				
					gameRoundBlock.answerBtn.setEnabled(false);
					
					for (var idx = 0; idx < answers.length; idx++) {
						if (answers[idx] == userAnswer) {
							bWin = true;
							gameRoundBlock.answer.setClass(gameCore.dom.domStructure.gameBlock.answer.classr)
							break;
						}
					}

				
					
					var msg = gameCore.message.getMessage('message.wrong');
									
					if (bWin) {
						msg = gameCore.message.getMessage('message.right');
					}

					gameRoundBlock.answer.setText(msg);
					
					var currentRound = this.value;

					// paramChange({question: gameRoundBlock.questionBlock.getText() ,answer: userAnswer});
					var args = {question: gameRoundBlock.questionBlock.getText() ,answer: userAnswer};
					gameCore.serverRequest.doRequest({url: gameCore.dom.serverAPI.url.post.writeUsr, method: gameCore.dom.serverAPI.method.post, params: args});
					
					gameCore.gameLogic.gameRound(++currentRound);
				}
			});
		}
		else {
			gameCore.view.getEndGameBlock().setText(gameCore.message.getMessage('message.end'));
		}
	}
});
