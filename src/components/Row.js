import React, { useEffect, useState } from 'react'
import instance from '../instanceConfig'
import './Row.css'

function Row({isPoster,title,fetchUrl}) {
    const base_url = "https://image.tmdb.org/t/p/original/";
    const [movies,setMovies]=useState([])
    const fetchData = async()=>{
        const response = await instance.get(fetchUrl)
        const {results} = response.data
        setMovies(results)
    }

    useEffect(()=>{
        fetchData()
    },[])
  return (
    <div className='parent_row'>
        <h2>{title}</h2>
        <div className="movies_row">
            {
                movies.map((movie)=>(
                    <img className={`movie ${isPoster && 'poster'}`} src={`${base_url}/${isPoster?movie.poster_path:movie.backdrop_path}`} alt="movie image"/>
                ))
            }
        </div>
    </div>
  )
}

export default Row