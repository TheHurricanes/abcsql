const express = require('express');
const router = express.Router();
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('1d64e8618c2047a7b3294ae1837e1092');
const checkauth = require('../config/checkauth');


router.post('/fetchnews',checkauth,(req,res)=> {
    console.log('Get Request to /fetchnews');
    const page_num = req.body.page | 1;
    console.log('page ',page_num);
    newsapi.v2.everything({
        sources: 'bbc-news,the-verge,google-news-in',
        domains: 'bbc.co.uk, techcrunch.com',
        language: 'en',
        sortBy: 'relevancy',
        page: page_num
      }).then(response => {
        return res.json({success:true,
            news : response        
        });
      },
      err => {
        res.json({success:false,msg:"News cannot be fetched", detail:err});
      });
});

module.exports = router;