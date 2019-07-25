console.log('this is loaded');

exports.spotify = {
    id: process.env.SPOTIFY_ID,
    secret: process.env.SPOTIFY_SECRET
};

exports.OMDb = {
    id: "http://www.omdbapi.com/?t=" + movie + "&apikey=11726a8"
}

// http://www.omdbapi.com/?t=titanic&apikey=11726a8

exports.bands = {
    id: "codingbootcamp"
}


// "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"`