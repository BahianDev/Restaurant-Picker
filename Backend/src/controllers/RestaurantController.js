require('dotenv/config')
const google = require('googleapis').google;
const customSearch = google.customsearch('v1')
const zomato = require('../services/zomato')




module.exports = {
    async getCategories(req, res){
      zomato()

      res.send("OK")
    },

    async getImages(req, res){
        	const response = await customSearch.cse.list({
                auth: process.env.GOOGLE_KEY,
                cx: process.env.SEARCH_ENGINE_ID,
                q:'Z Deli Sandwich Shop',
                searchType: 'image',
                
                num: 3
            })

            res.json(response);
    }
}


