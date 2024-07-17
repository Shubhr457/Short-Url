const { v4: uuidv4 } = require('uuid')
const url = require('../Models/url');
const URL = require('../Models/url');

async function  handleGenerateShortUrl(req,res){
    const body = req.body;
    if(!body.url) return res.status(400).json({error: 'url is required'})
        const shortID = uuidv4();;
    await url.create({
        shortId : shortID,
        redirectURL : body.url,
        visitHistory: [],
    });
    return res.render('home', {
        id: shortID,
    })
    // return res.json({id : shortID});

}

async function handleGetAnalytics(req,res){
    const shortId = req.params.shortId;
    const result = await URL.findOne({ shortId });
    return res.json ({totalClicks: result.visitHistory.length, 
        analytics: result.visitHistory,
    })
}

module.exports = {
    handleGenerateShortUrl,
    handleGetAnalytics,
}