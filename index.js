import app from './src/app.js';

const PORT= 3000;

app.listen(PORT, ()=>{
    console.log('Servidor escuchando en el puerto ' + PORT);
});
//este es el punto de entrada de la aplicación, se encarga de iniciar el servidor y escuchar en el puerto definido. Cuando el servidor está listo, imprime un mensaje en la consola indicando que está escuchando en el puerto especificado.