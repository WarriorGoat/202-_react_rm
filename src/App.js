import React from "react";
import { useState, useEffect } from "react";
// import $ from 'jquery';
// import ApiCall from "./ApiCall";
import "./App.css";
import "./Header";
import Cards from "./components/Cards";


const App = () => {
  //Set initial variables with initial state
  const [allCharacters, setAllCharacters] = useState([]);
  const [currentPageURL, setCurrentPageURL] = useState(
    process.env.REACT_APP_API_URL
  );
  const [nextPageURL, setNextPageURL] = useState("");
  const [previousPageURL, setPreviousPageURL] = useState("");
  const [currentPage, setCurrentPage] = useState("");
  const [pageCount, setPageCount] = useState(1);
  

  const ApiCall = () => {
    //This function extracts the Rick & Morty character data and feeds it into an array
    // retrieve data from API and add to initial variables.
    useEffect(() => {
      async function fetchData() {
        const response = await fetch(currentPageURL);
        const data = await response.json();
        setAllCharacters(data.results);
        setNextPageURL(data.info.next);
        setPreviousPageURL(data.info.prev);
        let idNum = data.results[0].id;
        setCurrentPage(Math.ceil(idNum / 20));
        setPageCount(data.info.pages);
      }
      fetchData();
      return;
    }, [currentPageURL]);
  };
  ApiCall();

  const goToNextPage = () => {
    setPreviousPageURL(currentPageURL);
    setCurrentPageURL(nextPageURL);

    console.log(currentPageURL);
  };

  const goToPreviousPage = () => {
    setNextPageURL(currentPageURL);
    setCurrentPageURL(previousPageURL);
    console.log(currentPageURL);
  };

  const PageButtons = () => {
    return (
      <div className="buttons">
        <button
          type="button"
          className="btn btn-secondary"
          onClick={goToPreviousPage}
        >
          Previous
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={goToNextPage}
        >
          Next
        </button>
      </div>
    );
  };

 

  return (
    <div className="container">
      <h1>Welcome to the Rick & Morty Show Character Index</h1>
      <PageButtons />
      <p>
        Page Number {currentPage} of {pageCount}
      </p>
      <br />
      <div className="card-deck">
        <Cards data={allCharacters} />
      </div>
    </div>
  );
};

export default App;
