import React from "react";

import MovieDetails from "./components/MovieList";
import SearchBar from "./components/SearchBar";
function App(){
  return(
    <>
      <SearchBar/><br></br>
      <MovieDetails/>
      
    </>
  )
}

export default App;