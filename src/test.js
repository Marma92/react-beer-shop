const { getBeers } = require('./services/api/beerApi')

getBeers(1).then((beers) => {
  [beers].map(beer => (
    console.log(beer)
  ))
})
  .catch((error) => console.log(error))
