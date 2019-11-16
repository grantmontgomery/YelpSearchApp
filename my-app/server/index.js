const express = require('express');

const app = express()

const fetch = require("node-fetch")
require("dotenv").config()


app.get("/", (req, res) => {
const yelp = new URL ("https://api.yelp.com/v3/businesses/search"),
params = {term: "restaurants", location: "Los Angeles", radius: 10000}
Object.keys(params).forEach(key => yelp.searchParams.append(key, params[key]))

const response = fetch(yelp, {
    headers: {
        Authorization: `Bearer ${process.env.REACT_APP_YELP_API_KEY}`
    }
})

response.then(resp => resp.json())
.then(data => res.send(data.businesses))
.catch(error => console.log(error.message))

})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server started on ${PORT}`))