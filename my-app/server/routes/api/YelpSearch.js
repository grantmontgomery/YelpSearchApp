const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const yelp = new URL("https://api.yelp.com/v3/businesses/search"),
    params = { term: "", location: "" };

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
