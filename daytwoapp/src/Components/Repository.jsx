import React from "react";
import axios from "axios";
const getGithubusers = (q = "react", page = 1, perpage) => {
  return axios(" https://api.github.com/search/repositories", {
    method: "GET",
    params: {
      q,
      sort:"forks",
      order:"asc",
      per_page: perpage,
      page,
    },
  });
};

export const Repository = () => {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [query, setQuery] = React.useState("react");
  const [data, setData] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const [perpage, setPerPage] = React.useState(10);
  const [totalpage, setTotalpage] = React.useState(1);

  React.useEffect(() => {
    setLoading(true);
    getGithubusers(query, page, perpage)
      .then((res) => {
        setLoading(false);
        setError(false);
        setData(res.data);
        setTotalpage(res.data.total_count);
        console.log("res", res.data.items);
      })
      .catch((err) => {
        setLoading(false);
        setError(true);
        console.log("error");
      });
  }, [query, page, perpage]);

  // console.log(data);
  // console.log("totalpage", totalpage);

  const handleClick = (query) => setQuery(query);

  const pages = (page) => setPerPage(page);
  // console.log("pages", perpage);

  return (
    <div style={{ width: "80%", margin: "auto" }}>
      <h2>Github Users</h2>
      {loading && <div>...Loading</div>}
      {error && <div>...Error</div>}
      <Searchbox handleClick={handleClick} />

      <br />
      <div style={{ width: "50%", margin: "auto" }}>
        {data?.items?.map((item) => {
          return <GithubCard key={item.id} {...item} />;
        })}
      </div>
      <Perpage pages={pages} />
      <div>
        Page {page} out of {Math.floor(Number(totalpage) / 10)}
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

const Perpage = ({ pages }) => {
  const [text, setText] = React.useState("");
  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button onClick={() => pages(text)}>Set Per Page</button>
    </div>
  );
};

const GithubCard = ({ owner }) => {
  return (
    <div
      style={{
        display: "flex",
        gap: "2rem",
        margin: "10px",
        border: "1px solid red",
      }}
    >
      <img src={owner.avatar_url} width="50px" alt={owner.login} />
      <h3>{owner.login}</h3>
    </div>
  );
};
