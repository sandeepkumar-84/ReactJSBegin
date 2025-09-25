import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(null);
  
useEffect(() => {
  fetch("http://backend:5000/api/data")
    .then((res) => res.json())
    .then((json) => setData(json))
    .catch((err) => console.error("Error fetching data:", err));
}, []);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Vite + React Frontend</h1>
      {data ? (
        <div>
          <p>{data.message}</p>
          <ul>
            {data.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}

export default App;
