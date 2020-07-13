const axios = require('axios');


const getLugarLatLng = async(dir) => {

    const encodedUlr = encodeURI(dir);

    const instance = axios.create({
        baseURL: `http://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUlr}`,
        headers: { 'x-rapidapi-key': '7c8b2b76c5msh57ba9915803b96cp11ddd6jsn5436db9bf8a7' }
    });

    const resp = await instance.get();

    if (resp.data.Results.length === 0) {

        throw new Error(`No hay resultado para la ${dir}`)
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.long;

    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}