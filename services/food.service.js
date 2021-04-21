const { get } = require('http');

module.exports = {
    name:'food',
    actions: {
            async get(){
              const [ foods, categories ] = await Promise.all([this.getFood(), this.getCategories()])

              const result = foods.map(food => ({
                  id: food.id,
                  description: food.description,
                  categoriry: categories.find(category => category.id === food.category_id).category
              }))

              return result;
            },
            async categories(){
                return await this.getCategories()
        }      
    },

    methods: {
        async getCategories(){

            const result = await new Promise((resolve,reject)=> {
                get('http://taco-food-api.herokuapp.com/api/v1/category',(res)=>{
                    let data= ''
                    res.on('data',(value) => ( data += value))
                    res.on('error',(error) => reject(error))
                    res.on('end',() => resolve(JSON.parse(data)))
                })
              })
              return result
            },

        async getFood(){
            const result = await new Promise((resolve, reject) => {
                get('http://taco-food-api.herokuapp.com/api/v1/food',(res)=>{
                   let data = ''
                   res.on('data', (value) => (data += value))
                   res.on('error',(error) => reject(error))
                   res.on('end',() => resolve(JSON.parse(data)))
                })
              })
              return result
            },    
     }
}