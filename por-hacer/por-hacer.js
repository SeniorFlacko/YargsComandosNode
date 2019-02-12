const fs = require('fs');

let listadoPorHacer = [];

const guardarDB = ( ) => {

    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile(`db/db.json`, data, (err) => {
        if (err) { throw new Error(err); }
    });

    
}

const cargarDB = () => {
    try {
        listadoPorHacer = require('../db/db.json');
    } catch (error) {
        listadoPorHacer = [];
    }
}

const crear = (descripcion) => {

    cargarDB();

    let porhacer = {
        descripcion,
        completado: false
    }

    listadoPorHacer.push(porhacer);

    guardarDB();

    return listadoPorHacer;
};

const listar = () => {
    cargarDB();

    return listadoPorHacer;
};

const actualizar = ( descripcion, completado = true ) => {
    cargarDB();

    const index = listadoPorHacer.findIndex( tarea => tarea.descripcion === descripcion);

    if (index >= 0) {

        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;

    } else {
        return false;
    }

};

const borrar = ( descripcion ) => {
    cargarDB();
    const nuevoListado = listadoPorHacer.filter( tarea => tarea.descripcion != descripcion );

    if (nuevoListado.length < listadoPorHacer.length) { // Si el length del nuevo listado es menor es porque algo se borro
        listadoPorHacer = nuevoListado;
        guardarDB();
        return true;
    } else {
        return false; // El length permanecio igual entonces no se borro nada.
    }
};


module.exports = {
    crear,
    listar,
    actualizar,
    borrar
}