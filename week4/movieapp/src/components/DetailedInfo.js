import React,{useState,useEffect} from 'react'
import {Badge} from "react-bootstrap"
import {FaImdb} from "react-icons/fa"
import errorImage from '../assets/noImage.png'
//// this is the ----/info------ path in our application 
const DetailedInfo = ({movieInfo,setimdbID}) =>{
const [loaded, setloaded] = useState(false) ////well wait 350 miliseconds to content to load and this will be set to true  after that
const [loading, setloading] = useState(true)///well wait 350 miliseconds to content to load and this will be set to false  after that
useEffect(() => {
setTimeout(() => {
  setloaded(true)
  setloading(false)
}, 350);
}, [setimdbID])
  return (
    <div className='detailedInfo'>
        {loading && <h1 className='text-white'>Loading...</h1>}
        {loaded && movieInfo && movieInfo.map((x,index) => (
        <div className='row align-items-center' key={index}>
          <div className='col-md-6 col-sm-12  bg-container d-flex flex-column '>
          <img src={x.Poster ==='N/A' ?errorImage : x.Poster} alt="" id='movieCover' />
          </div>
          <div className='col-md-6 col-sm-12 bg-container d-flex flex-column description'>
            <div className='d-header'>
              <div className='YearAndRuntime'>
              <Badge pill bg="warning" className='text-dark genre-badge'  style={{fontSize: 20}}> {x.Type}</Badge>
                <span>Year: {x.Year} </span>
                <span>Rated : {x.Rated} </span>
                <span>Runtime:{x.Runtime} </span>
              </div>
              <div className='ratings'>
              {x.Ratings.map((l) => <p>{l.Source} {l.Value}</p>)}
              </div>
            </div>
            <h1 className='display-1 title'>{x.Title}</h1>
            <div className='d-plot'>
            <div className='h4'>{x.Plot}</div>
            </div>
            <div className='d-footer'>
            <div className='casting'>
              <p>Director : {x.Director}</p>
              <p>Actors : {x.Actors}</p>
              <p>Writers : {x.Writer}</p>
            </div>
            <div className='languages'>
                <p>Languages:{x.Language}</p>
              <p> <FaImdb className='imdbIcon'/>Votes:{x.imdbVotes}</p>
              <p> <FaImdb className='imdbIcon'/> Rating:{x.imdbRating}</p>
            </div>
            </div>
          </div>
        </div>
    ))}
    </div>
  )
}
export default DetailedInfo