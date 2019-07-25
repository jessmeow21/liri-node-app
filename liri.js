require("dotenv").config();

var keys = require("./keys.js");

var spotify = new Spotify(keys.spotify);

var band = new Band(keys.band);