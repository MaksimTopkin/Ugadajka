  // ======================== game functions ==================================
gameCore.nsdef("gameCore.utils", {
  getGameFlow: function(bCreateIfAbsent) {
    bCreateIfAbsent = bCreateIfAbsent || true;

    var gameFlow = gameCore.view.getBlock(gameCore.dom.domStructure.flowBlock);

    if (null == gameFlow && bCreateIfAbsent) {
      gameFlow = gameCore.view.createBlock({id: gameCore.dom.domStructure.flowBlock});
      flowHolder = gameCore.view.getGameHolder(); // Suppose that Holder Block is always present
      flowHolder.appendBlock(gameFlow);
    }

    return gameFlow;
  },



  //function creates start title page
  createTitle: function(cbk) {

      window.location.href = "#rules";

      var gameTitle = gameCore.view.createBlock({cls: gameCore.dom.domStructure.titleTitle.pgdClass});

      var title = gameCore.view.createBlock({cls: gameCore.dom.domStructure.titleTitle.nameClass, val: gameCore.message.getMessage('message.start')});
      var rules = gameCore.view.createBlock({cls: gameCore.dom.domStructure.titleGameRules.class, val: gameCore.message.getMessage('message.rules')});
      var gameBtn = gameCore.view.createBlock({val: gameCore.message.getMessage('label.gameBtn'), cls: gameCore.dom.domStructure.titleButon.class, elem: gameCore.dom.domStructure.titleButon.elem});

      gameBtn.setOnClickEvent(function(){
            gameTitle.removeBlock();
            cbk();
            }
        );

      gameTitle.appendBlock(title);
      gameTitle.appendBlock(rules);
      gameTitle.appendBlock(gameBtn);

      mainBlock = gameCore.view.getMainBlock();

     return mainBlock.appendBlock(gameTitle);
          
  },


  // function creates start page block
  createGameMainBlock: function() {

    var startGameText = gameCore.view.createBlock({cls: gameCore.dom.domStructure.gameName.class, val: gameCore.message.getMessage('message.gameName')});
    var flowBlockHolder = gameCore.view.createBlock({id: gameCore.dom.domStructure.flowBlockHolder});
    var cheatText = gameCore.view.createBlock({cls: gameCore.dom.domStructure.cheatFld.class, val: gameCore.message.getMessage('message.cheat'), elem: gameCore.dom.domStructure.cheatFld.elem});
    var cheatAns = gameCore.view.createBlock({id: gameCore.dom.domStructure.cheatFld.id, elem: gameCore.dom.domStructure.cheatFld.elem});
    var endGameText = gameCore.view.createBlock({id: gameCore.dom.domStructure.endGameText});
    var startBtn = gameCore.view.createBlock({val: gameCore.message.getMessage('label.btn.start'), elem: gameCore.dom.domStructure.startBtn.elem, cls: gameCore.dom.domStructure.startBtn.class});
    var DBdataBtn = gameCore.view.createBlock({val: gameCore.message.getMessage('label.DBbutton'), elem: gameCore.dom.domStructure.fromDBbtn.elem, cls: gameCore.dom.domStructure.fromDBbtn.class});
    var version = gameCore.view.createBlock({elem: gameCore.dom.domStructure.gameVersion.elem, val: gameCore.dom.gameVersion.ver, cls: gameCore.dom.domStructure.gameVersion.class});

    startBtn.setOnClickEvent(function(){
      gameCore.utils.getGameFlow().removeBlock();    
      endGameText.setText("");
      gameCore.gameLogic.gameRound(0);
    });

    DBdataBtn.setOnClickEvent(function(){
      gameCore.utils.getGameFlow().removeBlock();    
      gameCore.serverRequest.doRequest({url: gameCore.dom.serverAPI.url.get.readUsr},
        function(data){gameCore.utils.userDataFromDB(data)})});

    var mainBlock = gameCore.view.getMainBlock();

    mainBlock.appendBlock(startGameText);
    mainBlock.appendBlock(flowBlockHolder);
    mainBlock.appendBlock(cheatText);
    mainBlock.appendBlock(cheatAns);
    mainBlock.appendBlock(endGameText);
    mainBlock.appendBlock(startBtn);
    mainBlock.appendBlock(DBdataBtn);
    startGameText.appendBlock(version);



    return {   
      startGameText: startGameText,
      flowBlockHolder: flowBlockHolder,
      cheatText: cheatText,
      endGameText: endGameText,
      startBtn: startBtn
    }
  },

  createGameBlock: function(gameRound, parentBlock) {
    
    var questionBlock = gameCore.view.createBlock({cls: gameCore.dom.domStructure.gameBlock.questionBlock.class, elem: gameCore.dom.domStructure.gameBlock.questionBlock.elem});
    var answerFld = gameCore.view.createBlock({cls: gameCore.dom.domStructure.gameBlock.answerFld.class, elem: gameCore.dom.domStructure.gameBlock.answerFld.elem});
    var answerBtn = gameCore.view.createBlock({cls: gameCore.dom.domStructure.gameBlock.answerBtn.class, val: gameCore.message.getMessage('label.btn.answer'), elem: gameCore.dom.domStructure.gameBlock.answerBtn.elem});
    var answer = gameCore.view.createBlock({cls: gameCore.dom.domStructure.gameBlock.answer.classw});

    parentBlock.appendBlock(questionBlock);
    parentBlock.appendBlock(answerFld);
    parentBlock.appendBlock(answerBtn);
    parentBlock.appendBlock(answer);

    return {
      questionBlock:  questionBlock,
      answerFld:      answerFld,
      answerBtn:      answerBtn,
      answer:         answer                
    }
  },


  userDataFromDB: function(data) {

        window.location.href = "#answers";

        // var flowBlockHolder = createBlock({id: domStructure.flowBlockHolder});
        if (gameCore.view.getGameHolder() == null) {
          var flowBlockHolder = gameCore.view.createBlock({id: gameCore.dom.domStructure.flowBlockHolder});
          var mainBlock = gameCore.view.getMainBlock();
          mainBlock.appendBlock(flowBlockHolder);        
        }

        gameCore.utils.getGameFlow().appendBlock(gameCore.view.createBlock({id: gameCore.dom.domStructure.fromDBfield.id}));
          for (obj in data){
              var qstanswFields = gameCore.view.getBlock(gameCore.dom.domStructure.fromDBfield.id);
              qstanswFields.appendBlock(gameCore.view.createBlock({val: data[obj].question, elem: gameCore.dom.domStructure.fromDBfield.elem, cls: gameCore.dom.domStructure.fromDBfield.classQuest}));
              qstanswFields.appendBlock(gameCore.view.createBlock({val: data[obj].answer, elem: gameCore.dom.domStructure.fromDBfield.elem, cls: gameCore.dom.domStructure.fromDBfield.classAns}));
            }
  }
});



gameCore.nsdef("gameCore.serverRequest", {
  doRequest: function(args, cbk) {
    cbk = cbk || function(data){};
    gameCore.applyIf(args, {
                  method: "GET",
                  url: "",  
                  params: ""

    });

    var myJson = JSON.stringify(args.params);

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var myObj = JSON.parse(this.responseText);
        cbk(myObj);
      }
     else if (null != args.cbk) 
     {
        args.cbk({});
    }
    };

    xhttp.open(args.method, args.url, true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send('x='+myJson);

  }
});


