let {PythonShell} = require('python-shell')

let options = { args : [5,3,6] }

PythonShell.run('sam.py', options , function (err ,res) {
    if (err) throw err;
    console.log('finished ' , res);
  });
