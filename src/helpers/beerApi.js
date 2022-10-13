const axios = require('axios')
const { useState, useEffect } = require('react')
const apiConf = require('../config/api-conf.json')

// to export in config file
const GET_BEERS_REQUEST = (page) => `${apiConf.API_URL}?page=${page}&per_page=${apiConf.BEERS_PER_PAGE}`
const GET_BEER_REQUEST = (id) => `${apiConf.API_URL}/${id}`
const FIND_BEER_REQUEST = (name) => `${apiConf.API_URL}?beer_name=${name}`

export const getBeers = (page) => {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)
  const [beers, setBeers] = useState([])
  const [hasMore, setHasMore] = useState(false)

  useEffect(() => {
    setBeers([])
  }, [])

  useEffect(() => {
    const CancelToken = axios.CancelToken
    let cancel

    setIsLoading(true)
    setError(false)

    axios
      .get(GET_BEERS_REQUEST(page), {
        cancelToken: new CancelToken((c) => (cancel = c))
      })
      .then((res) => {
        setBeers((prev) => {
          return [...new Set([...prev, ...res.data])]
        })
        setHasMore(res.data.length > 0)
        setIsLoading(false)
      })
      .catch((err) => {
        if (axios.isCancel(err)) return
        setError(err)
      })

    return () => cancel()
  }, [page])

  return { isLoading, error, beers, hasMore }
}

// const getBeers = (page) => {
//   return new Promise((resolve, reject) => {
//     axios.get(GET_BEERS_REQUEST(page), {}).then((response) => {
//       resolve(response.data)
//     }).catch((error) => reject(error))
//   })
// }

export const getBeer = (id) => {
  return new Promise((resolve, reject) => {
    axios.get(GET_BEER_REQUEST(id), {}).then((response) => {
      resolve(response.data[0])
    }).catch((error) => reject(error))
  })
}

export const findBeer = (name) => {
  return new Promise((resolve, reject) => {
    axios.get(FIND_BEER_REQUEST(name), {}).then((response) => {
      resolve(response.data)
    }).catch((error) => reject(error))
  })
}
