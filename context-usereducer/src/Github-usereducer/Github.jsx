import React from "react";
import axios from "axios";

const initstate = {
  loading: true,
  error: false,
  data: null,
};

const githubactions = {
  fetch: "fetch",
  success: "success",
  failure: "failure",
};
const githubReducer = (state, action) => {
  switch (action.type) {
    case githubactions.fetch: {
      return {
        ...state,
        loading: true,
        error: false,
        data: null,
      };
    }
    case githubactions.success: {
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload,
      };
    }
    case githubactions.failure: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    default:
      return state;
  }
};

export const GithubCard = () => {
  const [{ loading, error, data }, dispatch] = React.useReducer(
    githubReducer,
    initstate
  );

  React.useEffect(() => {
    dispatch({
      type: githubactions.fetch,
    });
    axios({
      url: "https://api.github.com/search/users",
      method: "GET",
      params: {
        q: "masai",
      },
    })
      .then((res) => {
        dispatch({
          type: githubactions.success,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: githubactions.failure,
        });
      });
  }, []);
  console.log(data);
  return (
    <div>
      {loading && <div>Loading</div>}
      {error && <div>Error</div>}
      {data?.items.map((item) => (
        <div
          style={{
            width: "400px",
            height: "100px",
            border: "1px solid red",
            margin: "auto",
            display: "flex",
            justifyContent: "space-between",
            padding: "10px"
          }}
          key={item.id}
        >
          <div>
            <img style={{ width:"100px", height:"100px",borderRadius:"50%" }} src={item.avatar_url} alt="" />
          </div>
          <h3>{item.login}</h3>
        </div>
      ))}
    </div>
  );
};
