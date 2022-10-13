const axios = require('axios')
const apiConf = require('../../config/api-conf.json')

// to export in config file
const GET_BEERS_REQUEST = (page) => `${apiConf.API_URL}?page=${page}&per_page=${apiConf.BEERS_PER_PAGE}`
const GET_BEER_REQUEST = (id) => `${apiConf.API_URL}/${id}`
const FIND_BEER_REQUEST = (name) => `${apiConf.API_URL}?beer_name=${name}`

const getBeers = (page) => {
  return new Promise((resolve, reject) => {
    axios.get(GET_BEERS_REQUEST(page), {}).then((response) => {
      resolve(response.data)
    }).catch((error) => reject(error))
  })
}

const getBeer = (id) => {
  return new Promise((resolve, reject) => {
    axios.get(GET_BEER_REQUEST(id), {}).then((response) => {
      resolve(response.data[0])
    }).catch((error) => reject(error))
  })
}

const findBeer = (name) => {
  return new Promise((resolve, reject) => {
    axios.get(FIND_BEER_REQUEST(name), {}).then((response) => {
      resolve(response.data)
    }).catch((error) => reject(error))
  })
}

module.exports = { getBeers, getBeer, findBeer }
