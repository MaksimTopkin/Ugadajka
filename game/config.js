//===================== DOM  block ===========================

gameCore.nsdef("gameCore.dom", {
    domStructure : {   
        cheatFld:             {class: 'cheat', id: 'cheatFld', elem: 'span'},
        fromDBfield:          {classAns: 'fromDBanswer', classQuest: 'fromDBquestion', id: 'userFromDB', elem: 'p'},
        gameName:             {class: 'main'},   
        titleTitle:           {pgdClass: 'title', nameClass: 'gameTitle'},  
        titleGameRules:       {class: 'rules'},  
        titleButon:           {elem: 'button', class: 'titleBtn'},
        flowBlockHolder:      'gameFlowBlockHolder',        
        flowBlock:            'gameFlowBlock',
        endGameText:          'endGame',
        startBtn:             {elem: 'button', class: 'startBtn'},
        gameVersion:          {elem: 'span', class: 'version', ver: 'v 1.3'},
        fromDBbtn:            {elem: 'button', class: 'DBbutton'},
        gameBlock: {
            questionBlock:  {elem: 'div', class: 'question', elem: 'li'},
            answerFld:      {elem: 'input', class: 'input'},
            answerBtn:      {elem: 'button', class: 'ansBtn'},
            answer:         {elem: 'div', classr: 'answerR', classw: 'answerW'}
        }
    },
    
    //====================== game version =========================
    
    gameVersion: {
            ver: 'v 1.4'
    },


    gameRoundsDefinition: new Array,

    
    serverAPI: {
                    url: {
                        get: {
                                readUsr: 'service/userData/fromDB.php',
                                readData: 'service/userData/dataFromDB.php',
                                labelTexts: 'service/textLabel/labelTexts.php'
                             },
                        post: {
                                writeUsr: 'service/userData/DBwrite.php',
                              },
                        put: {
                                putData: 'putData.php' // file not yet created
                             }                 
                          },
                    method: {
                        get: 'GET',
                        post: 'POST',
                        put: 'PUT'
                }         
    }

});



