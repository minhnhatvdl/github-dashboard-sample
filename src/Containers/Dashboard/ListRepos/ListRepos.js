import React, { useState, useEffect, Fragment } from "react";
import { useFetch } from "../../../Hooks/useFetch";
import MyListRepos from "../../../Components/MyListRepos/MyListRepos";
import Loading from "../../../Components/Loading/Loading";
import Error from "../../../Components/Error/Error";

const ListRepos = ({ ...props }) => {
  const [username] = useState(props.match.params.username);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  // infos user
  const [infosUser] = useFetch(
    `https://api.github.com/users/${username}`,
    {},
    setLoading,
    setError
  );
  // list repos
  const [listRepos] = useFetch(
    `https://api.github.com/users/${username}/repos`,
    [],
    setLoading,
    setError
  );
  useEffect(() => {
    if (infosUser.message || listRepos.message) setError(true);
  }, [infosUser, listRepos]);

  return (
    <Fragment>
      {error && <Error />}
      {loading ? (
        <Loading />
      ) : (
        !error && (
          <MyListRepos
            name={infosUser.login}
            avatar={infosUser.avatar_url}
            url={infosUser.url}
            listRepos={listRepos}
          />
        )
      )}
    </Fragment>
  );
};

export default ListRepos;
