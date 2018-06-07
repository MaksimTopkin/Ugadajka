

var applyIf = function(args, defaults) {
    for (var key in defaults) {
      if (!args.hasOwnProperty(key) || args[key] == null) {
        args[key] = defaults[key];
      }
    }
};


var doRequest  = function(args, cbk) {
  cbk = cbk || function(data){};
  applyIf(args, {
                method: "GET",
                url: "pong.php",  
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

};

var param = {
    "question": "data1",
    "answer": "data2",
    "data":    "data3"
};

var serverAPI = {
                url: {
                    readUsr: 'fromDB.php',
                    writeUsr: 'addData.php',
                    readData: 'dataFromDB.php'
            },
                method: {
                    get: 'GET',
                    post: 'POST'
            }         
};


var getBlock = function(id) {
  return document.getElementById(id);
};


var paramChange = function(args) {
  applyIf (args, {
    question: '',
    answer: '',
    data: ''
  })
    param.question = args.question;
    param.answer = args.answer;
    param.data = args.data;
};

//======================== HTML functions ==============================================


var addData = function() {
  paramChange({question: getBlock('label').value, answer: getBlock('texts').value});
  console.log (param);
  doRequest({url: serverAPI.url.writeUsr, method: serverAPI.method.post, params: param}, function(data){console.log(data)});
};


var takeData = function() {
  doRequest({url: serverAPI.url.readData, method: serverAPI.method.get}, function(data){getBlock('output').innerText = data[1].question+" with answer "+data[1].answer})
};


var testFunc = function() {

  doRequest({url: serverAPI.url.readData, method: serverAPI.method.get}, function(data){paramChange({data: data[1].answer});
    console.log(param.data);
  if (param.data != 'data3'){
  if (getBlock('testInp').value == param.data) {
    getBlock('testOutput').innerText = 'Test is done, everything is working !';
  } else {
    getBlock('testOutput').innerText = 'Something is wrong ! ' + param.data;
    }
  }
});

  console.log(param.data);


};





