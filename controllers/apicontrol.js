'use strict';

const superagent = require('superagent');
const artmodel = require('../models/artmodel');


const getArtApi = async (req, res) => {
    const url = `https://api.artic.edu/api/v1/artworks?limit=15`;

    superagent.get(url).then(data => {
        const response = data.body.data.map(art => {
            return new artmodel(art)
        });
        res.send(response);
    }).catch(error => {
        console.log(error)
    });
}



module.exports = { getArtApi };