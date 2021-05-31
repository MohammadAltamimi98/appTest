'use strict';
const artmodel = require('../models/artmodel');

const createArt = (req, res) => {
    //1. destructure the body request
    const {
        title,
        thumbnail
    } = req.body;

    const slug = title.toLowerCase().split(' ').join('-');

    // finding the right model based on the searched stuff.
    artmodel.find({ slug: slug }, (error, data) => {
        if (data.length > 0) {
            res.send('data already exists!')
        }
        else {
            const newmodel = new artmodel({
                title: title,
                thumbnail: thumbnail,
                slug: slug
            })
        }
        newmodel.save();
        res.send('added new model!')

    })


}


const deleteArt = (req, res) => {
    const slug = req.params.slug;

    artmodel.remove({ slug: slug }, (error, data) => {
        if (error) {
            res.send(error);
        }
        else {
            artmodel.find({}, (error, data) => {
                res.send(data)
            })

        }
    })

}


const readArt = (req, res) => {
    artmodel.find({}, (error, data) => {
        res.send(data)
    })
}


const updateArt = (req, res) => {
    const slug = req.params.slug;
    const { title, thumbnail } = req.body;

    artmodel.find({ slug: slug }, (error, data) => {
        if (error) {
            res.send(error)
        }
        else {
            data[0].title = title;
            data[0].thumbnail = thumbnail;
            data[0].save();
            artmodel.find({}, (error, data) => {
                res.send(data);
            })
        }
    })


}


module.exports = {
    updateArt,
    readArt,
    deleteArt,
    createArt
}