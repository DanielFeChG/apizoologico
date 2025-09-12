const express = require('express')
const app = express()
const port = 3000


app.get('/', (req, res) => { //El objeto es app, el metodo (.get) va a hacer referencia a los verbos HTTP, parametros de get ('/', (req, res)),  este primer parametro es la ruta, forma de escribir metodos ()=>{...}  ... es el cuerpo de la funcion 
    res.send("¡Hola Daniel!") //req: request(cuando se necesita traer alguna informacion necesaria para nuestra peticion)    res: response (respuesta)

})

app.listen(port, () => {
     console.log('La aplicación se está ejecutando en el puerto: ' + `${port}`)
})