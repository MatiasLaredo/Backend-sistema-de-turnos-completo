export const generarHorarios=()=>{
    const horarios =[];
    for (let i=9; i<=18; i++){
        horarios.push(`${i}:00`);
    }
    return horarios;
}

