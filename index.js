const express = require('express') 
//instancio express en poesia 
const poesia = express()

//instancio las rutas
const router = require('./poesia/routes/poesia.routes')

//solicitamos aceptacion de Json 
poesia.use(express.json())

//pedimos que escuche los routers
poesia.use('/', router)


//levanto el puerto
poesia.listen(3001, ()=>{
    console.log('funcionando')
})




