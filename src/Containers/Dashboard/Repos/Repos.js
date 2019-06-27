import React, { useState, useEffect, Fragment } from "react";
import MyRepo from "../../../Components/MyRepo/MyRepo";
import Loading from "../../../Components/Loading/Loading";
import Error from "../../../Components/Error/Error";
import { useFetch } from "../../../Hooks/useFetch";
import { apiRepo } from "../../../Constants/api";

const Repos = ({ ...props }) => {
  const [{ username, repos }] = useState(props.match.params);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  // infos user
  const [infosRepos] = useFetch(
    `${apiRepo}/${username}/${repos}`,
    {},
    setLoading,
    setError
  );
  useEffect(() => {
    if (infosRepos.message) setError(true);
  }, [infosRepos]);
  
  return (
    <Fragment>
      {error && <Error />}
      {loading ? <Loading /> : !error && <MyRepo {...infosRepos} />}
    </Fragment>
  );
};

export default Repos;
