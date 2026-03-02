import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export const register = (req,res) => {
    const {usuario, contrasena} = req.body;

    if (!usuario || !contrasena) {
        return res.status(400).json({error: 'Faltan datos requeridos'});
    }}

export const login = (req,res) => {
    const {usuario, contrasena} =req.body;

    if (usuario !== 'admin' || contrasena !== '1234') {
        return res.status(401).json ({error: 'Credenciales incorrectas'});
    }

    const token = jwt.sign(
        {usuario}, //payload del token, en este caso solo incluye el nombre de usuario. Esto es la información que se codifica dentro del token y que puede ser decodificada por el servidor para verificar la identidad del usuario. payload es la parte del token que contiene la información del usuario, en este caso, el nombre de usuario. Cuando el servidor recibe una solicitud con un token, puede decodificar el token para extraer esta información y verificar si el usuario tiene los permisos necesarios para acceder a los recursos protegidos.
        process.env.JWT_SECRET, //clave secreta para firmar el token, se obtiene de las variables de entorno
        {expiresIn: process.env.JWT_EXPIRES_IN} //tiempo de expiración del token, también se obtiene de las variables de entorno    
    )
    res.json({token});
}

//esta función es un controlador que se encarga de manejar la solicitud de inicio de sesión. Verifica las credenciales proporcionadas por el usuario y, si son correctas, genera un token JWT que incluye el nombre de usuario en su payload. El token se firma utilizando una clave secreta y tiene un tiempo de expiración definido. Finalmente, el token se devuelve al cliente en formato JSON. en este ejemplo, las credenciales son estáticas (usuario: 'admin', contraseña: '1234'), pero en una aplicación real, estas credenciales deberían ser verificadas contra una base de datos u otro sistema de almacenamiento seguro. Basicamente esto es el formato de toda la vida de crear usuarios y contraseñas, pero para simplificar el ejemplo, se han hardcodeado las credenciales. En una aplicación real, deberías implementar un sistema de autenticación más robusto que incluya almacenamiento seguro de contraseñas (por ejemplo, utilizando hashing) y verificación contra una base de datos.

//yo agregue un register, esto me permite registrar nuevos usuarios, aunque en este ejemplo no se guarda en ningún lado, solo verifica que se hayan proporcionado los datos necesarios. En una aplicación real, deberías implementar un sistema de almacenamiento para los usuarios registrados, como una base de datos, y asegurarte de almacenar las contraseñas de manera segura (por ejemplo, utilizando hashing).