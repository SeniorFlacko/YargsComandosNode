const opts = {
    crear: {
        alias: ''
    },
    actualizar: {
        alias: 'l',
        default: 10
    }
};

const argv = require('yargs')
                .command('crear','Crear un elemento por hacer',{
                    descripcion: {
                        demand: true,
                        alias: 'd',
                        desc: 'Descripcion de la tarea por hacer'
                    }
                })
                .command('actualizar','Actualiza el estado de un elemento por hacer', {
                    descripcion: {
                        demand: true,
                        alias: 'd',
                        desc: 'Descripcion de la tarea por hacer'
                    },
                    completado: {
                        default: true,
                        alias: 'c',
                        desc: 'Marca como completa o pendiente la tarea'
                    }
                })
                .command('borrar','Borrar un elemento por hacer', {
                    descripcion: {
                        demand: true,
                        alias: 'd',
                        desc: 'Descripcion de la tarea por hacer'
                    },
                })
                .help()
                .argv;

module.exports = {
    argv
}