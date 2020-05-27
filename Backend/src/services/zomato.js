const axios = require('axios');
require('dotenv/config')


async function getIdLocation(city) {

    const config = {
        headers: {
            'user-key': process.env.KEY
        },
        params: {
            query: city
        }
    }
    const data = await axios.get('https://developers.zomato.com/api/v2.1/locations?', config)
    return data.data.location_suggestions[0].city_id
}

async function getRestaurant() {
    const id = await getIdLocation('Sao Paulo')
    
    const config = {
        headers: {
            'user-key': process.env.KEY
        },
        params: {
            entity_id: id,
            entity_type : 'city',
            count: 1
        }
    }

    const data = await axios.get('https://developers.zomato.com/api/v2.1/search?', config)
    console.log(data.data.restaurants)


}

module.exports = getRestaurant;
