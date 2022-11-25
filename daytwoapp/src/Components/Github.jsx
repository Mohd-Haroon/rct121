import React from "react";
import axios from "axios";



const getGithubusers = (q = "masai", page = 1) => {
  return axios("https://api.github.com/search/users", {
    method: "GET",
    params: {
      q,
      sort:"id",
      order:"desc",
      per_page: 5,
      page,
    },
  });
};

export const Github = () => {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [query, setQuery] = React.useState("masai");
  const [data, setData] = React.useState([]);
  const [page, setPage] = React.useState(1);

  React.useEffect(() => {
    setLoading(true);
    getGithubusers(query, page)
      .then((res) => {
        setLoading(false);
        setError(false);
        setData(res.data);
        console.log("res",res.data)
      })
      .catch((err) => {
        setLoading(false);
        setError(true);
        console.log("error");
      });
  }, [query, page]);

  // console.log(data);

  const handleClick = (query) => setQuery(query);
  return (
    <div style={{width:"80%",margin:"auto"}}>
      <h2>Github Users</h2>
      {loading && <div>...Loading</div>}
      {error && <div>...Error</div>}
      <Searchbox handleClick={handleClick} />
      <br />
      <div style={{width:"50%",margin:"auto"}}>
        {data?.items?.map((item) => {
          return <GithubCard key={item.id} {...item} />;
        })}
      </div>
      <div>
        <button disabled={page === 1} onClick={() => setPage(page - 1)}>
          PREV
        </button>
        <button onClick={() => setPage(page + 1)}>NEXT</button>
      </div>
    </div>
  );
};

const Searchbox = ({ handleClick }) => {
  const [text, setText] = React.useState("");
  return (
    <div>
      <input type="text" onChange={(e) => setText(e.target.value)} />
      <button onClick={() => handleClick(text)}>SEARCH</button>
    </div>
  );
};

const GithubCard = ({ avatar_url, login }) => {
  return (
    <div style={{ display: "flex", gap: "2rem",margin: "10px",border: "1px solid red"}}>
      <img src={avatar_url} width="50px" alt={login} />
      <h3>{login}</h3>
    </div>
  );
};
