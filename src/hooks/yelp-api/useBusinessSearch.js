import { useState, useEffect } from "react";
import * as api from "./api";

export function useBusinessSearch(term, location) {
  const [businesses, setBusinesses] = useState([]);
  const [amountResults, setAmountResults] = useState();
  const [searchParams, setSearchParams] = useState({ term, location });

  useEffect(() => {
    setBusinesses([]);
    const fetchData = async () => {
      const rawData = await api.get(searchParams);

      const resp = await rawData.json();
      console.log(resp);

      setBusinesses(resp);
      setAmountResults(resp.length);
    };
    fetchData();
  }, [searchParams.term, searchParams.location]);

  return [businesses, amountResults, searchParams, setSearchParams];
}
