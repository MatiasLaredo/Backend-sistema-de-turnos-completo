import fs from 'fs';
import path from 'path';
import { generarHorarios } from '../utils/horarios.js';

const filepath= path.resolve("src/data/turnos.json"); //esto es para que sepa donde esta el archivo json para leerlo y escribirlo y asi evitar errores de ruta

const leerTurnos = () => {
    const data = fs.readFileSync(filePath);
    return JSON.parse(data);
} //esta funcion lee el archivo json y lo convierte a un objeto de JavaScript para poder manipularlo

const guardarTurnos = (turnos) => {
    fs.writeFileSync(filePath, JSON.stringify(turnos, null, 2));
} //esta funcion toma un objeto de JavaScript y lo convierte a formato JSON para guardarlo en el archivo

export const obtenerTurnos = (req,res) => {
    const turnos = leerTurnos();
    res.json(turnos);
} //esta funcion es un controlador que se encarga de manejar la solicitud para obtener los turnos, lee los turnos del archivo y los devuelve como respuesta en formato JSON

export const crearTurno = (req,res) => {
    const {nombre, apellido, hora} = req.body;

    if (!nombre || !apellido || !hora) {
        return res.status(400).json({error: "Faltan datos requeridos"});
    }

    const horariosValidos = generarHorarios();
    if (!horariosValidos.includes(hora)) {
        return res.status(400).json({error: "hora no valida"});
    }

    const turnos= leerTurnos();

    const existe= turnos.find (t => t.hora === hora);
    if (existe) {
        return res.status(400).json({error: "horario ocupado"});
    
    }

    const nuevoTurno = {
        id: turnos.lenght ++, //esto es para generar un id unico para cada turno, se basa en la longitud del array de turnos
        nombre,
        apellido,
        hora};

        turnos.push(nuevoTurno);
        guardarTurnos(turnos);
        res.status(201).json(nuevoTurno);
    };

    export const editarTurno = (req,res) => {
        const {id}= req.params;
        const {nombre, apellido, hora} = req.body;

        let turnos = leerTurnos();
        turnos = turnos.map(t => {
            if (t.id == id) {
                return {...t, nombre, apellido, hora};
            }         return t;
        });
        guardarTurnos(turnos);
        res.json({message:"turno actualizado"});
    }

export const eliminarTurno = (req, res) =>{
    const {id} = req.params;
    let turnos = leerTurnos();
    turnos = turnos.filter(t => t.id != id); //esto es para eliminar el turno con el id especificado, se filtra el array de turnos y se devuelve un nuevo array sin el turno que se quiere eliminar
    guardarTurnos(turnos); //esto es para guardar el nuevo array de turnos sin el turno eliminado en el archivo json
    res.json({message: 'turno eliminado'});
    
}

export const turnosDisponibles = (req,res) => {
    const turnos = leerTurnos();
    const horariosValidos = generarHorarios (); //esto es para generar el array de horarios validos, se llama a la funcion generarHorarios que se encuentra en el archivo horarios.js
    const turnosOcupados = turnos.map(t => t.hora); // esto es para obtener un array con las horas de los turnos ocupados, se mapea el array de turnos y se devuelve un array con las horas de cada turno.
    const turnosDisponibles = horariosValidos.filter(h=> !turnosOcupados.includes(h)); //esto es para obtener un array con las horas de los turnos disponibles, se filtra el array de horarios validos y se devuelve un nuevo array con las horas que no estan en el array de turnos ocupados.
    res.json(turnosDisponibles);
    
}