import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Root () {
  return (
    <>
      <div id="navbar">
        <h1 id="title">🍺 Beer Provider</h1>
        <div className="navbar-div">
          <form id="search-form" role="search">
            <input
              id="q"
              aria-label="Search a Beer"
              placeholder="Search"
              type="search"
              name="q"
            />
            <div
              id="search-spinner"
              aria-hidden
              hidden={true}
            />
            <div
              className="sr-only"
              aria-live="polite"
            ></div>
          </form>
        </div>
        <nav className="navbar-div">
          <a href={'/catalog'}>📖 Catalog</a>
          <a href={'/cart'}>🛒 Cart</a>
        </nav>
      </div>
      <div id="detail">
        <Outlet />
      </div>
      <div id='footer'>
        <div>Made with 💕🍺 by AE.</div>
        <div>reach me on: <a href='https://github.com/Marma92'>github</a> <a href='https://twitter.com/le_marma'>twitter</a> <a href='https://www.instagram.com/le__marma/'>instagram</a></div>
      </div>
    </>
  )
}
