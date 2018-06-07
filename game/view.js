  
gameCore.nsdef("gameCore.view", {
  getBlock: function (id) 
  {
  	return null != id ? document.getElementById(id) : null;
  },


  getCheatBlock: function () 
  {
    return gameCore.view.getBlock(gameCore.dom.domStructure.cheatFld.id);
  },


  getEndGameBlock: function ()
  {
    return gameCore.view.getBlock(gameCore.dom.domStructure.endGameText);
  },


  getGameHolder: function ()
  {    
    return gameCore.view.getBlock(gameCore.dom.domStructure.flowBlockHolder);           
  },


  getMainBlock: function () 
  {
  	var block = document.getElementsByTagName('body')[0];

  	block.appendBlock = function (block) 
    {
  		if (null != block) 
      {
  		  this.appendChild(block);
  		}
  	};	

  	return block;
  },

  createBlock: function(args) {   
    gameCore.applyIf(args, {
                    id: '',
                    cls: '',
                    val: '',
                    elem: 'div'
                  });

    var block = document.createElement(args.elem);

    if (args.id != null) {
      block.id = args.id;
    }

    if (args.cls != null) {
      block.className = args.cls;
    }

    block.setCheatText = function(txt) {
        var cheatBlock = gameCore.view.getCheatBlock();

        cheatBlock.innerText = '';

         if (null != txt && txt.length > 0) {
            cheatBlock.appendChild(document.createTextNode(txt));
         }
    };

    block.setText = function(txt) {
    	if (null != txt && txt.length > 0) {
    		this.appendChild(document.createTextNode(txt));
    	}
    	else {
    		if (null != this.firstChild) {
    			this.firstChild.remove();
    		}
    	}
    };

    block.getValue = function() {
      return this.value;
    };

    block.setValue = function(val) {
      this.value = val;
    };

    block.removeBlock = function() {
      this.remove();
    };

    block.setOnClickEvent = function(cbk) {
      if (null != cbk) {
        this.addEventListener("click", cbk);
      }
    };

    block.setEnabled = function(bEnable) {
      this.disabled = !bEnable;
    };

    block.appendBlock = function(block) {
      if (null != block) {
        this.appendChild(block);
      }
    };

    block.setClass = function(arg) {
      this.className = arg;
    };

    block.setDBanswer = function(arg) {
      getBlock(domStructure.flowBlock).innerText = arg;
    }

    block.getText = function() {
        return this.innerText;
    }

    block.setText(args.val);

    return block;
  }
});





