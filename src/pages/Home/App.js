import { useEffect, useState } from "react";


function App() {
  const[repo, setRepo]= useState([]);

  useEffect( () => {
    fetch("https://api.github.com/users/99735094/repos")
    .then(Response => Response.json())
    .then(data => setRepo(data))
    
  }, []);
  return (
    <div className="App">
    {
      repo.map(repo => {
        return(
          <div>
            <h1>{repo.name}</h1>
            <h1>{repo.id}</h1>
            <h1>{repo.html_url}</h1>
            <h1>{repo.forks}</h1>
            <a href={"https://api.github.com/repos/99735094/api"}>github</a>
          </div>
        )
      })
    }
    </div>
  );
}

export default App;
