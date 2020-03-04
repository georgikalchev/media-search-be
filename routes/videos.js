const express = require('express')
const router = express.Router()
const axios = require('axios')
const videoSearchService = require('../services/videos')

const YOUTUBE_BASE_URL = 'https://www.googleapis.com/youtube/v3/search?part=id%2C%20snippet&maxResults=24&type=video&videoEmbeddable=true'

const instance = axios.create({
  headers: {'Accept': 'application/json'}
})

router.get('/', (req, res, next) => {
  const {query} = req
  instance.get(YOUTUBE_BASE_URL, {params: {q: query.query, key: process.env.GOOGLE_API_KEY}})
    .then(response => {
        res.send(videoSearchService.transformResponse(response.data))
      }
    )
    .catch(
      err => {
        console.log(err)
      }
    )
})

router.get('/next', (req, res, next) => {
  const {query} = req
  if (!!query.nextPage) {
    instance.get(YOUTUBE_BASE_URL, {
      params: {
        q: query.query,
        key: process.env.GOOGLE_API_KEY,
        pageToken: query.nextPage
      }
    })
      .then(response => {
          res.send(videoSearchService.transformResponse(response.data))
        }
      )
      .catch(
        err => {
          res.send({
            pageData: {type: 'VIDEO', error: true},
            items: []
          })
        }
      )
  } else {
    res.send({
      pageData: {type: 'VIDEO', error: true},
      items: []
    })
  }

})
module.exports = router
