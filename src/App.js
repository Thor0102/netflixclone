
import './App.css';
import Navbar from './COMPONENTS/Navbar'; 
import Movie from './COMPONENTS/Movie'


function App() {
  return (
    <div>
      <Navbar/>
       <Movie name="TOP RATED" url="https://api.themoviedb.org/3/movie/top_rated?api_key=94298a0336192d4aa41b816f00c96329&language=en-US"/>
       <Movie name="TRENDING" url="https://api.themoviedb.org/3/trending/movie/week?language=en-US&api_key=94298a0336192d4aa41b816f00c96329"/>
       <Movie name="ACTION MOVIES" url="https://api.themoviedb.org/3/discover/movie?api_key=94298a0336192d4aa41b816f00c96329&with_geners=28"/>
       <Movie name="COMEDY MOVIES" url="https://api.themoviedb.org/3/discover/movie?api_key=94298a0336192d4aa41b816f00c96329&with_geners=35"/>
       <Movie name="HORROR MOVIES" url="https://api.themoviedb.org/3/discover/movie?api_key=94298a0336192d4aa41b816f00c96329&with_geners=27"/>
       <Movie name="ROMANTIC MOVIES" url="https://api.themoviedb.org/3/discover/movie?api_key=94298a0336192d4aa41b816f00c96329&with_geners=10749"/>
       <Movie name="DOCUMENTARIES" url="https://api.themoviedb.org/3/discover/movie?with_geners=99&api_key=94298a0336192d4aa41b816f00c96329"/>

    </div>
  );
}

export default App;

// /movie/top_rated?api_key=${API_KEY}&language=en-US`, // toprated

//https://api.themoviedb.org/3/trending/movie/week?language=en-US&api_key=94298a0336192d4aa41b816f00c96329"

// fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,

// 	fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
	// fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
	// fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`



