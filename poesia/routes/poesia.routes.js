const express = require('express')

//Llamamos los controladores 
const poesiaControllers =require('../controllers/poesiaControllers')



 // Instanciamos el router- permite crear las direcciones 
const router  = express.Router()

router.get('/',poesiaControllers.getLibro)  


//instanciamos ruta y controladores busqueda de libro por Titulo y 
router.get('/:titulo', poesiaControllers.getLibroByTitulo)
 

//instancia ruta y controladores para insertar un nuevo libro
router.post('/libro', poesiaControllers.postLibro)

//instancia ruta y controladores eliminar un libro
router.delete('/libro/:titulo', poesiaControllers.deleteLibro)

//instancia ruta y controladores eliminar un libro
router.put('/libro/:titulo', poesiaControllers.putLibro)








//exporto la ruta y el servidor para inicializarlo
module.exports=router