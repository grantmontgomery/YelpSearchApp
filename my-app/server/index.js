const express = require("express");
const cors = require("cors");
require("dotenv").config();
const json = require("body-parser").json;
const urlEncoded = require("body-parser").urlencoded;
const fetch = require("node-fetch");

const app = express();

app.use(json());
app.use(urlEncoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  const yelp = new URL("https://api.yelp.com/v3/businesses/search"),
    params = { term: term, location: location, radius: 15000 };

  Object.keys(params).forEach(key =>
    yelp.searchParams.append(key, params[key])
  );

  const response = fetch(yelp, {
    headers: {
      Authorization: `Bearer ${process.env.REACT_APP_YELP_API_KEY}`
    }
  });

  response
    .then(resp => resp.json())
    .then(data => res.send(data.businesses))
    .catch(error => console.log(error.message));
});

app.listen(5000, () => {
  console.log("Server running on 5000");
});
