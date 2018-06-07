window.gameCore = {		
                applyIf: function(args, defaults){
                        for (var key in defaults) {
                            if (!args.hasOwnProperty(key) || args[key] == null) {
                            args[key] = defaults[key];
                                }
                            }

                        },

                nsdef: function(ns, sc, parent) {
                    var obj = parent || window; 
                    // console.log(typeof(obj))

                    var arr = ns.split(".");
                    // console.log(arr);

                    var idx;

                    for (idx in arr) {    
                      var name = arr[idx];
                        if (typeof (obj[name]) === "undefined") {
                            obj[name] = {};
                        }
                        obj = obj[name];                      
                    }

                    if (null != sc) {
                               gameCore.applyIf(obj, sc) // our function should be defined here in Core
                    }
               return obj;
                }               

};

window.onload = function() {
    gameCore.init.init();
};







