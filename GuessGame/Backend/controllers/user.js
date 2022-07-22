
const fs =  require('fs')
exports.createUser = (req,res,next) => {
    try {
        const response = fs.readFileSync("records.json");
        const data = JSON.parse(response);
        const result = data.records.filter(obj => {
            return obj.email === req.body.email
          })
        if(!result.length){
            data.records.push(req.body)
        }
        fs.writeFile('records.json',JSON.stringify(data),'utf8', function(err){
            if(err) throw err
            console.log('write new data successfully.')
        })
        res.status(200).json({message: 'created user'})
    } catch (err) {
        res.status(500).json({message: 'something wrong'})
    }
}

exports.updateScore = (req,res,next)=> {
    try{
        const response = fs.readFileSync("records.json");
        const data = JSON.parse(response);
        data.records.map(obj => {
            if(obj.email === req.body.email){
                if(obj.score < req.body.score){
                    obj.score = req.body.score
                }
            }
            return obj
        })

        fs.writeFile('records.json',JSON.stringify(data),'utf8', function(err){
            if(err) throw err
            console.log('write new data successfully.')
        })
        res.status(200).json({message: "data updated"})
    }
    catch (err) {
        console.log(err)
        res.status(500).json({message: err})
    }


}