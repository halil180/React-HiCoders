import React from "react";
import errorImage from "../assets/noImage.png";
import { Link } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
///////movie&&series list that appears at first when the user clicks the page
const  MovieList = ({ movies, clickHandler, input }) => {
  return (
    <div className="container bg-container ">
      <div className="row d-flex justify-content-around align-items-center movieList ">
        {movies &&
          movies.map((x, index) => (
            <React.Fragment key={x.imdbID}>
              <Card
                style={{ width: "18rem" }}
                className="col-4 col-sm-12  col-md-6 col-lg-4 bg-card mb-4"
                key={x.imdbID}
              >
                <Card.Img
                  variant="top"
                  className="col-sm-6  col-md-6 col-lg-6"
                  style={{ height: "24rem" }}
                  src={x.Poster === "N/A" ? errorImage : x.Poster}
                  alt="lo"
                />
                <Card.Body>
                  <Card.Title className="p-4">
                    {" "}
                    <p style={{ fontSize: 20 }}>{x.Title}</p>
                  </Card.Title>
                  <Link to="/info">
                    <Button id="infoBtn" onClick={() => clickHandler(x.imdbID)}>
                      info
                    </Button>
                  </Link>
                </Card.Body>
              </Card>
            </React.Fragment>
          ))}
        {!movies && (
          <div id="errorMessage">
            <h1>Your search - {input} - did not match any contents.</h1>
            <br />
            <h2> Suggestions: </h2>
            <ul>
              <li> Make sure that all words are spelled correctly.</li>
              <li>Try different keywords.</li>
              <li>Try more general keywords. </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
export default MovieList;