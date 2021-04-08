import axios from 'axios';
require('dotenv').config()
var CryptoJS = require("crypto-js");

export async function getCharacter(query, cb) {
    // Generate hash, ts and apikey for api request
    const ts = new Date().getTime().toString();
    const hashStr = ts + process.env.REACT_APP_MARVEL_PRIVATE_KEY + process.env.REACT_APP_MARVEL_PUBLIC_KEY;
    var md5Hash = CryptoJS.MD5(hashStr);
    var url = "https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=" + query + 
    "&ts=" + ts +
    "&apikey=" + process.env.REACT_APP_MARVEL_PUBLIC_KEY +
    "&hash=" + md5Hash.toString();
    axios.get(url)
        .then(function(response){
            if (response.data.code === 200) {
                cb(response.data.data, "success");
            }
            cb(response.message, "fail");
            console.log(response.message);
        })
        .catch(function (error) {
            console.log(error.message);
        })
}

