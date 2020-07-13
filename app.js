const lugar = require('./lugar/Lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;




// lugar.getLugarLatLng(argv.direccion)
//     .then(resp => {
//         console.log(resp);

//     })
//     .catch(err => {
//         console.log('Error!!!', err);

//     })

// clima.getClima(40.750000, -74.000000)
//     .then(console.log())
//     .catch(console.log())

const getInfor = (direccion) => {

    try {
        const coord = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(coord.lat, coord.lng);

        return `El clima de ${direccion} es de ${temp}`
    } catch (error) {
        return `No se pudo determinar el clima de ${direccion}`
    }


}