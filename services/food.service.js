const { get } = require('http');

module.exports = {
    name:'food',
    actions: {
        async get(){
            const result = await new Promise((resolve, reject) => {
                get('http://taco-food-api.herokuapp.com/api/v1/food',(res)=>{
                    let data = ''
                    res.on('data', (value) => (data += value))
                    res.on('error',(error) => reject(error))
                    res.on('end',() => resolve(JSON.parse(data)))
                })
              })

              return result
        }
    }
}