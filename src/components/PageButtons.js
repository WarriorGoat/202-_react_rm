import React from "react";
// import { useState } from "react";

const PageButtons = (props) => {
    // const [currentPageURL, setCurrentPageURL] = useState(process.env.REACT_APP_API_URL);
    // const [nextPageURL, setNextPageURL] = useState("");
    // const [previousPageURL, setPreviousPageURL] = useState("");
    // const [currentPage, setCurrentPage] = useState("");
    const previous = props.previous
    const next = props.next;
    const set = props.set;
    return (
      <div className="buttons">
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => {
            set(previous);
          }}
        >
          Previous
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => {
            set(next);
          }}
        >
          Next
        </button>
      </div>
    );
  };

export default PageButtons