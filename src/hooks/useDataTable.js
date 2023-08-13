import React, { useEffect } from "react";

export function useDataTable(apiUrl) {
  const [data, setData] = React.useState([]);

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, [apiUrl]);

  return data;
}
