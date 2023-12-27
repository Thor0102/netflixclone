import React, { useState } from 'react'
import Axios from 'axios'
import YouTube from 'react-youtube'
import movieTrailer from "movie-trailer"

function Movie(props) {

    
  const [ movies, setMovies ] = useState([])

  const [ fetchedVideoID, setFetchedVideoID] = useState("")
    
    Axios.get(props.url)
      .then(function(output){
        setMovies(output.data.results)
      })
      .catch(function(error){
        console.log(error)
      })
  
  function collectTheMovie(name){

        // name == The Creator  --> is there any trailer present in the youtube or not , trailer we require 
  
        movieTrailer(name)
        .then(function(output){
          // output --> https://www.youtube.com/watch?v=UdFeVo0cODs
          // v --> videoID
  
         const myVideoId = new URLSearchParams(new URL(output).search).get('v')
         setFetchedVideoID(myVideoId)
        
        })
        .catch(function(error){
          console.log(error)
        })
      }
    
      const additionalData = {
        height: "400px", 
        width: "100%",
        playerVars:{
          autoplay:1
        }
      }
  
    return ( 
     <div>

      <h2 style={{color: "white", fontSize: "30px", fontWeight: "900", marginLeft:"30px"}}>{props.name}</h2>

       
      {/* for play trailer */}
      { fetchedVideoID && <YouTube videoId={fetchedVideoID} opts={additionalData}/> }

      {/* Getting Poster/ Imagesy6 */}
     <div className='trendingdiv' style={{display: "flex", overflowX: "scroll"}}>
      {
      movies.map(function(i)
        {
          return(
            <img style={{margin: "10px"}} onClick={function()
            {
              collectTheMovie(i.title)
            }} height="250px" width="250px" src={"https://image.tmdb.org/t/p/original"+i.poster_path}/>
          )
          
          //  <img style={{margin: "10px"}} onClick={function()
          //   {
          //     collectTheMovieName(i.title)
          //    }} height="250px" width="250px" src={"https://image.tmdb.org/t/p/original"+i.poster_path}/>
          
        })
      }       
      </div>
     </div>
    )
}

export default Movie