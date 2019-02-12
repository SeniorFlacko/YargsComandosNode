const argv = require('./config/yargs.js').argv;
const colors = require('colors');

const crear = require('./por-hacer/por-hacer.js').crear;
const listar = require('./por-hacer/por-hacer.js').listar;
const actualizar = require('./por-hacer/por-hacer.js').actualizar;
const borrar = require('./por-hacer/por-hacer.js').borrar;

// console.log(argv);

let comando = argv._[0];


switch (comando) {
    case 'crear':
        let tarea = crear(argv.descripcion);
        console.log(tarea);
        
        break;

    case 'listar':
        let tareas = listar();

        for (const tarea of tareas) {
            console.log('===================================='.green);
            console.log(`${ tarea.descripcion } , ${ tarea.completado }`);
            console.log('===================================='.green);
        }
        
        break;

    case 'actualizar':
        
        const response = actualizar( argv.descripcion, argv.completado );
                
        if (!response) {
            console.log(`Error al actualizar tarea por hacer`);
        }

        break;

    case 'borrar':
        
        const respuesta = borrar( argv.descripcion );
        
        if (!respuesta) {
            console.log(`Error al borrar tarea: la tarea '${ argv.descripcion }' no existe`.red);
        }

        break;

    default:
        console.log(`Comando desconocido`);
        
        break;
}