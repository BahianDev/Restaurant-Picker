require('dotenv/config')
const google = require('googleapis').google;
const customSearch = google.customsearch('v1')

const axios = require('axios');


module.exports = {
    async getIdLocation(req, res) {
        const city = req.body
        const config = {
            headers: {
                'user-key': process.env.KEY
            },
            params: {
                query: city
            }
        }
        const data = await axios.get('https://developers.zomato.com/api/v2.1/locations?', config)
        res.json(data.data.location_suggestions[0].city_id)

    },

    async getIdsRestaurant(req, res) {
        const config = {
            headers: {
                'user-key': process.env.KEY
            },
            params: {
                entity_id: req.headers.id,
                entity_type: 'city'
            }
        }

        const data = await axios.get('https://developers.zomato.com/api/v2.1/search?', config)
        const ids = data.data.restaurants.map(x => x.restaurant.id)
        res.json(ids)
    },

    async getRestaurantDetail(req, res) {
        const {restaurantId} = req.body;
        const config = {
            headers: {
                'user-key': process.env.KEY
            },
            params: {
                res_id:restaurantId
            }
        }
        const {data} = await axios.get('https://developers.zomato.com/api/v2.1/restaurant?', config)
        res.json(data)
    },

    async getImages(req, res) {
        const {name} = req.body
        const response = await customSearch.cse.list({
            auth: process.env.GOOGLE_KEY,
            cx: process.env.SEARCH_ENGINE_ID,
            q: name,
            searchType: 'image',
            fileType: 'jpg',
            num: 10
        })

        const imagesUrl = response.data.items.map(item => {
            return item.link
        })

        console.log(imagesUrl)

        res.json({});
    }
}
