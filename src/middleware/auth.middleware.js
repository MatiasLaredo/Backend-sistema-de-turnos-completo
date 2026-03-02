import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export const verificarToken = (req, res, next) => {
    const token= req.header("Authorization");

    if (!token) {
        return res.status(401).json ({error: 'Token invalido o no proporcionado'});
    }
    try{
        jwt.verify (token, process.env.JWT_SECRET);
        next();
    } catch(error)
    {res.status(401).json({error:'Token invalido o expirado'});}

    }
//esta función es un middleware que se encarga de verificar la validez del token JWT incluido en la solicitud. Si el token es válido, permite que la solicitud continúe hacia el siguiente middleware o controlador. Si el token es inválido o ha expirado, devuelve una respuesta de error con un código de estado 401 (No autorizado).