const express = require('express')
const router = express.Router()
const axios = require('axios')
const imageSearchService = require('../services/images')
const BASE_GOOGLE_IMAGE_SEARCH_URL = 'https://www.googleapis.com/customsearch/v1?imgSize=large&searchType=image'

const instance = axios.create({
  headers: {'Accept': 'application/json'}
})

router.get('/', (req, res, next) => {
  console.log(req.query)
  instance.get(BASE_GOOGLE_IMAGE_SEARCH_URL, {
    params: {
      q: req.query.query,
      cx: process.env.GOOGLE_SEARCH_ENGINE_ID,
      key: process.env.GOOGLE_API_KEY,
    }
  })
    .then(response => {
      res.send(imageSearchService.transformResponse(response.data))
    })
    .catch(error => {
      console.log(error)
    })
})
router.get('/next', (req, res, next) => {
  const {query} = req
  if (query.nextPage) {
    instance.get(BASE_GOOGLE_IMAGE_SEARCH_URL, {
      params: {
        q: req.query.query,
        cx: process.env.GOOGLE_SEARCH_ENGINE_ID,
        key: process.env.GOOGLE_API_KEY,
        start: req.query.nextPage
      }
    })
      .then(response => {
        res.send(imageSearchService.transformResponse(response.data))
      })
      .catch(
        err => {
          res.send({
            pageData: {type: 'IMAGE', error: true},
            items: []
          })
        })
  } else {
    res.send({
      pageData: {type: 'IMAGE', error: true},
      items: []
    })
  }
})

module.exports = router
