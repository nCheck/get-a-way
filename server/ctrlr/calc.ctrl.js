let {PythonShell} = require('python-shell')
const dir                 = __dirname;
var path = require('path')

pyFunc = ()=>{
    return new Promise( (resolve , reject)=>{

        let options = { args : [5,3,6] }

        PythonShell.run( path.join(__dirname , 'disPy.py'), options , function (err ,res) {
            if (err) reject(err);
            console.log('finished ' , res);
            resolve(res)
          });


    } )
}


module.exports.getBestPath = async (req , res)  =>{
    var ans = await pyFunc();
    res.send(ans)
}


