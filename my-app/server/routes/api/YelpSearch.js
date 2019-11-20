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

router.post("/", (req, res) => {
  const newMember = {
    id: uuid.v4,
    name: req.body.name,
    email: req.body.email,
    status: "active"
  };
  if (!newMember.name || !newMember.email) {
    res.status(400).json({ msg: "Please include a name and email." });
  } else {
    members.push(newMember);
    res.json(members);
  }
});
