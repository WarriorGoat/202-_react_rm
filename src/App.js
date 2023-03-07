import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import PageButtons from "./components/PageButtons";
import CardDeck from "./components/CardDeck";
import Footer from "./components/Footer";

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

  //Retrieve data from API and assign results to key variables
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
  }, [currentPageURL]);  //track any changes to currentPageURL to trigger a new API call


  return (
    <div className="container">
      <Header />
      <PageButtons previous={previousPageURL} next={ nextPageURL} set={setCurrentPageURL}/>
      <p>
        Page Number {currentPage} of {pageCount}
      </p>
      <br />
      <div className="card-deck">
        <CardDeck data={allCharacters} />
      </div>
      <Footer />
    </div>
  );
};

export default App;
