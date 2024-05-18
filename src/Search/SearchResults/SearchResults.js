import React from "react";
import { SearchResult } from "./SearchResult/SearchResult";
import styles from "./SearchResults.module.css";
import { Spinner } from "../../Spinner/Spinner.js";

export function SearchResults(props) {
  let data = props.businesses;
  let searchResults = <Spinner />;
  if (data && data.length) {
    searchResults = data.map((b, index) => (
      <SearchResult key={data.name} business={b} />
    ));
  }

  return <div className={styles["search-results"]}>{searchResults}</div>;
}
