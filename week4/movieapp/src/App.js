import React, { useState, useEffect } from "react";
import Search from "./components/Search";
import MovieList from "./components/MovieList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailedInfo from "./components/DetailedInfo";
const  App = () => {
  const [movies, setMovie] = useState([]); ////this state gets the api's informations
  const [contentName, setName] = useState("iron man"); /////  serie name
  const [typeOfSearch, settypeOfSearch] = useState(""); ////all , movie or series
  const [input, setinput] = useState(); ////// if the user clicks the search button use effect will be rerendered 
  const [imdbID, setimdbID] = useState(); ///we use this state to fetch to detailed data (beacuse we can't get detailed info just by entering the serie name(s=${contentName} see line 15)  you will understand why if you look at the console in home page and in /info page)
  const [movieInfo, setMovieInfo] = useState();////with this state we get the detailed info for the movies(if this doesn't make sens look at the responses you get when you click info in console)
  const getData = async () => {
    const response = await fetch(`http://www.omdbapi.com/?s=${contentName}&apikey=d9b45705&type=${typeOfSearch}`)
    const data = await response.json();
    setMovie(data.Search);
  }
  useEffect(() => {
    getData()
  }, [input, typeOfSearch]);
  ///// navbar buttons will  fetch the data again for specified genre (this is  sort of a filter)
  const printButtonLabel = (event) => {
    console.log(event.target.name);
    if (event.target.name === "All") {
      settypeOfSearch("");
    } else if (event.target.name === "Movies") {
      settypeOfSearch("movie");
    } else if (event.target.name === "Series") {
      settypeOfSearch("series");
    }
  }
  //////fetch the specific information about selected content 
  const clickHandler = (id) => {
    setimdbID(id); 
    // console.log(id)
    fetch(`http://www.omdbapi.com/?i=${id}&apikey=d9b45705`)
      .then((resp) => resp)
      .then((resp) => resp.json())
      .then((response) => {
        console.log(response);
        setMovieInfo([response]);
      })
      .catch(({ message }) => {
        console.log(message, "msg");
      });
  };
  const  handleInputChange = (x)  =>  setName(x); ////this gets  triggered  on every input change (onchange) 
  const handleSearchButton = () =>  setinput(contentName); ////set the content when the user clicks the search button
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/info"
            element={
              <DetailedInfo movieInfo={movieInfo} setimdbID={setimdbID} />
            }
          ></Route>
          <Route
            index
            element={
              <div>
                <Search
                  handleInputChange={handleInputChange}
                  handleSearchButton={handleSearchButton}
                  printButtonLabel={printButtonLabel}
                />
                <MovieList
                  movies={movies}
                  clickHandler={clickHandler}
                  input={input}
                />
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;