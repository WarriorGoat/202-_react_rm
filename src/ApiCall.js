import { useState, useEffect } from "react";
require("dotenv").config();

function ApiCall(){ //This function extracts the Rick & Morty character data and feeds it into an array
    const [urlToAccess, setUrlToAccess] = useState("https://rickandmortyapi.com/api/character")
    const [allCharacters, setAllCharacters] = useState([])
    const [nextPageURL, setNextPageURL] = useState("");
    const [previousPageURL, setPreviousPageURL] = useState("");

    // retrieve data from API and add to initial variables.
    useEffect(() => {
        async function fetchData(){
            const response = await fetch(urlToAccess);
            const data = await response.json();
            setAllCharacters(data.results);
            setNextPageURL(data.info.next);
            setPreviousPageURL(data.info.previous);
        }
        fetchData();
    },[])
};
    

export default ApiCall