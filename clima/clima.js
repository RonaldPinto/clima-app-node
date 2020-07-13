const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=30ad762ffe78d09888cf24c877247781`);

    return resp.data.main.temp;
}

module.exports = {
    getClima
}