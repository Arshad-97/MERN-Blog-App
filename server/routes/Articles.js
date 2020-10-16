const express = require('express');
const router = express.Router();
const Articles = require('../models/articles');

// REQUEST GET ALL ARTICLES
router.get("/",  (req, res) => {
    Articles.find()
    .then(article => res.json(article))
    .catch(err => res.status(400).res.json(`error: ${err}`));
});

// REQUES ADD NEW ARTICLES
router.post("/add", (req, res) => {
    const newAtricle = Articles({
        title: req.body.title,
        article: req.body.article,
        authorname: req.body.authorname
    });

    newAtricle
    .save()
    .then(() => res.json("Article successfully added !"))
    .catch(err => res.status(400).json(`error: ${err}`));
});

// REQUEST FIND ARTICLE BY ID
router.get("/:id", (req, res) => {
    Articles.findById(req.params.id)
    .then(article => res.json(article))
    .catch(err => res.status(400).json(`error:${err}`));
});

// REQUES FIND ARTICLE BY ID AND UPDATE
router.put("/update/:id", (req, res) => {
    Articles.findById(req.params.id)
    .then(article => {
        article.title = req.body.title,
        article.article = req.body.article,
        article.authorname = req.body.authorname

        article
        .save()
        .then(() => res.json("The article is UPDATED successfully !"))
        .catch(err => res.status(400).json(`error:${err}`));
    })
    .catch(err => res.status(400).json(`error:${err}`));
});

//REQUEST FIND ARTICLE BY ID AND DELETE
router.delete("/:id", (req, res) => {
    Articles.findByIdAndDelete(req.params.id)
    .then(() => res.json("Successfully Deleted the article as this id !"))
    .catch(err => res.status(400).json(`error:${err}`));
});

module.exports = router;