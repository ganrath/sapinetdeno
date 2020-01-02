import React, { useEffect } from "react";

function useFetch(url) {
  const [response, setResponse] = React.useState(null);
  const [error, setError] = React.useState(false);
  useEffect(() => {
    async function fetchData() {
      try {
        let response = await fetch(url);
        let data = await response.json();
        setResponse(data.results);
        setError(true);
      } catch (e) {
        setError(true);
      }
    }
    fetchData();
  }, []);
  return response;
}

export default useFetch;
